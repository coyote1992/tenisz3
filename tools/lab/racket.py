"""Procedural tennis racket, studio-lit turntable for the /lab page.

Real proportions: 68.5 cm long, ~32 x 25 cm head, 16 x 19 string pattern.
The racket stands in the XZ plane (strings face -Y, toward the camera) and turns about Z.
Run with the bpy module (pip install bpy==4.2):  python racket.py [frames] [res_x] [res_y] [samples] [out_dir]
"""
import bpy, bmesh, math, sys
from mathutils import Vector
from PIL import Image, ImageDraw, ImageFont

args = sys.argv[1:]
FRAMES = int(args[0]) if len(args) > 0 else 60
RX = int(args[1]) if len(args) > 1 else 720
RY = int(args[2]) if len(args) > 2 else 1080
SAMPLES = int(args[3]) if len(args) > 3 else 48
OUT = args[4] if len(args) > 4 else "out/racket/"

bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = "CYCLES"
sc.cycles.device = "CPU"
sc.cycles.samples = SAMPLES
sc.cycles.use_denoising = True
sc.cycles.denoiser = "OPENIMAGEDENOISE"
sc.cycles.max_bounces = 6
sc.cycles.caustics_reflective = False
sc.cycles.caustics_refractive = False
sc.render.use_persistent_data = True
sc.render.resolution_x, sc.render.resolution_y = RX, RY
sc.render.film_transparent = True
sc.view_settings.view_transform = "AgX"
sc.view_settings.look = "AgX - Medium High Contrast"
sc.render.image_settings.file_format = "PNG"
sc.render.image_settings.color_mode = "RGBA"


def mat(name, color, rough=0.5, **kw):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes["Principled BSDF"]
    p.inputs["Base Color"].default_value = (*color, 1)
    p.inputs["Roughness"].default_value = rough
    for k, v in kw.items():
        p.inputs[k].default_value = v
    return m


def srgb(h):
    h = h.lstrip("#")
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(((x + 0.055) / 1.055) ** 2.4 if x > 0.04045 else x / 12.92 for x in c)


M_FRAME = mat("frame", srgb("#183a21"), 0.32, **{"Coat Weight": 1.0, "Coat Roughness": 0.04})
M_RIM = mat("rim", srgb("#b4532b"), 0.38, **{"Coat Weight": 0.8, "Coat Roughness": 0.06})
M_STRING = mat("string", srgb("#efe8d6"), 0.32, **{"Sheen Weight": 0.3})
M_LOGO = mat("logo", srgb("#b4532b"), 0.42)
M_GRIP = mat("grip", srgb("#f1ece0"), 0.72)
M_LIME = mat("lime", srgb("#e6e28c"), 0.4, **{"Coat Weight": 0.6})
M_CAP = mat("cap", srgb("#b4532b"), 0.4)


# ------------------------------------------------------------------ sweep helper
def sweep(name, path, profile, closed, mats, mat_of=None, radius_fn=None):
    """path: list of Vector in XZ plane. profile: list of (n, y) 2D points.
    n is the in-plane normal offset, y is along world Y."""
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    N = len(path)
    rings = []
    for i, p in enumerate(path):
        a = path[(i - 1) % N] if closed or i > 0 else path[i]
        b = path[(i + 1) % N] if closed or i < N - 1 else path[i]
        t = (b - a).normalized()
        n = Vector((t.z, 0, -t.x))  # in-plane normal
        ring = []
        for k, (pn, py) in enumerate(profile):
            s = radius_fn(i, k, p) if radius_fn else 1.0
            ring.append(bm.verts.new(p + n * pn * s + Vector((0, py * s, 0))))
        rings.append(ring)
    P = len(profile)
    segs = N if closed else N - 1
    for i in range(segs):
        r0, r1 = rings[i], rings[(i + 1) % N]
        for k in range(P):
            f = bm.faces.new((r0[k], r0[(k + 1) % P], r1[(k + 1) % P], r1[k]))
            f.material_index = mat_of(i, k) if mat_of else 0
            f.smooth = True
    if not closed:
        for r in (rings[0], rings[-1]):
            f = bm.faces.new(r)
            f.material_index = 0
    bm.normal_update()
    bm.to_mesh(me)
    bm.free()
    ob = bpy.data.objects.new(name, me)
    for m in mats:
        ob.data.materials.append(m)
    sc.collection.objects.link(ob)
    return ob


def rounded_rect(w, d, n=20, e=3.0):
    pts = []
    for i in range(n):
        a = 2 * math.pi * i / n
        c, s = math.cos(a), math.sin(a)
        pts.append((w / 2 * math.copysign(abs(c) ** (2 / e), c), d / 2 * math.copysign(abs(s) ** (2 / e), s)))
    return pts


# ------------------------------------------------------------------ geometry
HA, HB = 0.125, 0.162            # head half-width, half-height (to beam centre)
HZ = 0.685 - HB - 0.008          # head centre height
prof = rounded_rect(0.0135, 0.023)

head = [Vector((HA * math.cos(t), 0, HZ + HB * math.sin(t))) for t in [2 * math.pi * i / 220 for i in range(220)]]
# outer rim (n > 0 side) in clay, rest forest
sweep("head", head, prof, True, [M_FRAME, M_RIM], mat_of=lambda i, k: 1 if prof[k][0] > 0.0055 else 0)


def bez(p0, p1, p2, p3, n):
    out = []
    for i in range(n + 1):
        u = i / n
        out.append(p0 * (1 - u) ** 3 + p1 * 3 * u * (1 - u) ** 2 + p2 * 3 * u * u * (1 - u) + p3 * u ** 3)
    return out


SHAFT_TOP = 0.315
for side in (-1, 1):
    t0 = -math.pi / 2 + side * math.radians(48)
    start = Vector((HA * math.cos(t0), 0, HZ + HB * math.sin(t0)))
    tang = Vector((-HA * math.sin(t0), 0, HB * math.cos(t0))).normalized() * (-side)
    end = Vector((side * 0.009, 0, SHAFT_TOP))
    arm = bez(start, start + tang * 0.05, end + Vector((0, 0, 0.07)), end, 40)
    taper = lambda i, k, p, n=len(arm): 1.0 + 0.18 * (i / n)
    sweep(f"arm{side}", arm, rounded_rect(0.012, 0.022), False, [M_FRAME], radius_fn=taper)

# shaft
sweep("shaft", [Vector((0, 0, 0.19)), Vector((0, 0, SHAFT_TOP + 0.01))], rounded_rect(0.03, 0.024), False, [M_FRAME])
# lime collar
sweep("collar", [Vector((0, 0, 0.192)), Vector((0, 0, 0.204))], rounded_rect(0.034, 0.031, e=6), False, [M_LIME])

# grip: octagon with an overgrip spiral
octo = [(0.0158 * math.cos(math.pi / 8 + k * math.pi / 4), 0.0158 * math.sin(math.pi / 8 + k * math.pi / 4)) for k in range(8)]
octo_fine = []
for k in range(8):
    a, b = octo[k], octo[(k + 1) % 8]
    for j in range(4):
        u = j / 4
        octo_fine.append((a[0] + (b[0] - a[0]) * u, a[1] + (b[1] - a[1]) * u))
gpath = [Vector((0, 0, 0.012 + 0.18 * i / 260)) for i in range(261)]


def wrap(i, k, p):
    ang = math.atan2(octo_fine[k][1], octo_fine[k][0]) / (2 * math.pi)
    ph = (p.z / 0.024 + ang) % 1.0
    return 1.0 + 0.06 * (ph ** 3)


sweep("grip", gpath, octo_fine, False, [M_GRIP], radius_fn=wrap)
sweep("butt", [Vector((0, 0, 0.0)), Vector((0, 0, 0.014))], rounded_rect(0.036, 0.036, e=7), False, [M_CAP])

# strings: 16 mains x 19 crosses, woven, with a clay "G" stencil
IA, IB = HA - 0.007, HB - 0.007
mask_img = Image.new("L", (400, 520), 0)
d = ImageDraw.Draw(mask_img)
font = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSerif-Italic.ttf", 470)
d.text((200, 270), "G", font=font, fill=255, anchor="mm")
mask = mask_img.load()


def in_logo(x, z):
    u = (x + IA) / (2 * IA)
    v = 1 - (z - (HZ - IB)) / (2 * IB)
    if not (0 <= u < 1 and 0 <= v < 1):
        return False
    return mask[int(u * 399), int(v * 519)] > 128


R = 0.00088
tube = [(R * math.cos(2 * math.pi * k / 6), R * math.sin(2 * math.pi * k / 6)) for k in range(6)]
NM, NC = 16, 19
mx = [-IA + (i + 0.5) * 2 * IA / NM for i in range(NM)]
cz = [HZ - IB + (j + 0.5) * 2 * IB / NC for j in range(NC)]
W = 0.0007
me = bpy.data.meshes.new("strings")
bm = bmesh.new()


def tube_between(pts, logo_flags):
    """pts: list of Vector, logo_flags per segment."""
    rings = []
    for i, p in enumerate(pts):
        a = pts[max(0, i - 1)]
        b = pts[min(len(pts) - 1, i + 1)]
        t = (b - a).normalized()
        up = Vector((0, 1, 0)) if abs(t.y) < 0.9 else Vector((1, 0, 0))
        n1 = t.cross(up).normalized()
        n2 = t.cross(n1).normalized()
        rings.append([bm.verts.new(p + n1 * x + n2 * y) for x, y in tube])
    for i in range(len(rings) - 1):
        for k in range(6):
            f = bm.faces.new((rings[i][k], rings[i][(k + 1) % 6], rings[i + 1][(k + 1) % 6], rings[i + 1][k]))
            f.material_index = 1 if logo_flags[i] else 0
            f.smooth = True


for i, x in enumerate(mx):
    zr = IB * math.sqrt(max(0, 1 - (x / IA) ** 2))
    zs = [HZ - zr] + [z for z in cz if abs(z - HZ) < zr - 0.002] + [HZ + zr]
    pts, flags = [], []
    for jj, z in enumerate(zs):
        j = cz.index(z) if z in cz else None
        y = 0 if j is None else (W if (i + j) % 2 else -W)
        pts.append(Vector((x, y, z)))
    # subdivide for smooth weave
    sp, sf = [pts[0]], []
    for a, b in zip(pts, pts[1:]):
        for s in range(1, 4):
            q = a.lerp(b, s / 3)
            q.y = a.y + (b.y - a.y) * (0.5 - 0.5 * math.cos(math.pi * s / 3))
            sp.append(q)
            sf.append(in_logo(q.x, (q.z + sp[-2].z) / 2))
    tube_between(sp, sf)

for j, z in enumerate(cz):
    xr = IA * math.sqrt(max(0, 1 - ((z - HZ) / IB) ** 2))
    xs = [-xr] + [x for x in mx if abs(x) < xr - 0.002] + [xr]
    pts = []
    for x in xs:
        i = mx.index(x) if x in mx else None
        y = 0 if i is None else (-W if (i + j) % 2 else W)
        pts.append(Vector((x, y, z)))
    sp, sf = [pts[0]], []
    for a, b in zip(pts, pts[1:]):
        for s in range(1, 4):
            q = a.lerp(b, s / 3)
            q.y = a.y + (b.y - a.y) * (0.5 - 0.5 * math.cos(math.pi * s / 3))
            sp.append(q)
            sf.append(in_logo((q.x + sp[-2].x) / 2, q.z))
    tube_between(sp, sf)

bm.normal_update()
bm.to_mesh(me)
bm.free()
so = bpy.data.objects.new("strings", me)
so.data.materials.append(M_STRING)
so.data.materials.append(M_LOGO)
sc.collection.objects.link(so)

# parent everything to a pivot for the turntable
pivot = bpy.data.objects.new("pivot", None)
sc.collection.objects.link(pivot)
for o in list(sc.collection.objects):
    if o is not pivot and o.type == "MESH":
        o.parent = pivot
pivot.rotation_euler = (0, 0, 0)

# ------------------------------------------------------------------ lights + camera
world = bpy.data.worlds.new("w")
sc.world = world
world.use_nodes = True
bg = world.node_tree.nodes["Background"]
bg.inputs["Color"].default_value = (0.05, 0.06, 0.055, 1)
bg.inputs["Strength"].default_value = 0.35


def area(name, loc, size, power, color, target=(0, 0, 0.36), shape="RECTANGLE", sy=None):
    l = bpy.data.lights.new(name, "AREA")
    l.energy = power
    l.color = color
    l.shape = shape
    l.size = size
    if sy:
        l.size_y = sy
    o = bpy.data.objects.new(name, l)
    o.location = loc
    sc.collection.objects.link(o)
    d = Vector(target) - Vector(loc)
    o.rotation_euler = d.to_track_quat("-Z", "Y").to_euler()
    return o


area("key", (-1.4, -1.8, 1.4), 1.6, 260, (1.0, 0.96, 0.9))
area("fill", (1.8, -1.2, 0.3), 2.0, 50, (0.85, 0.92, 1.0))
area("rimL", (-1.2, 1.4, 0.9), 0.25, 180, (1.0, 0.82, 0.6), shape="RECTANGLE", sy=2.0)
area("rimR", (1.3, 1.2, 0.6), 0.25, 160, (0.8, 0.95, 0.85), shape="RECTANGLE", sy=2.0)
area("top", (0, 0, 2.2), 1.0, 60, (1, 1, 1))

cam_d = bpy.data.cameras.new("cam")
cam_d.lens = 85
cam = bpy.data.objects.new("cam", cam_d)
sc.collection.objects.link(cam)
cam.location = (0, -2.05, 0.47)
cam.rotation_euler = (Vector((0, 0, 0.345)) - cam.location).to_track_quat("-Z", "Y").to_euler()
sc.camera = cam

# ------------------------------------------------------------------ render
import os
os.makedirs(OUT, exist_ok=True)
for f in range(FRAMES):
    pivot.rotation_euler = (0, 0, 2 * math.pi * f / FRAMES)
    sc.render.filepath = os.path.join(OUT, f"r{f:03d}.png")
    bpy.ops.render.render(write_still=True)
    print("frame", f, flush=True)
