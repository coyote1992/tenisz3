"""Exploded clay-court specimen: a cut-away block whose layers lift apart.

Layer order is the typical build-up of a clay court (illustrative thicknesses):
top dressing of crushed brick, a dynamic layer, a crushed-stone base, gravel drainage, subsoil.
Exports one PNG per frame plus label anchors (pixel coords of each layer's right edge).
Run with the bpy module (pip install bpy==4.2): python clay.py [frames] [res] [samples] [out]
"""
import bpy, bmesh, math, random, json, os, sys
from mathutils import Vector
from bpy_extras.object_utils import world_to_camera_view

a = sys.argv[1:]
FRAMES = int(a[0]) if len(a) > 0 else 40
RES = int(a[1]) if len(a) > 1 else 960
SAMPLES = int(a[2]) if len(a) > 2 else 40
OUT = a[3] if len(a) > 3 else os.path.dirname(os.path.abspath(__file__)) + "/out/"
random.seed(4)

bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene
sc.render.engine = "CYCLES"
sc.cycles.device = "CPU"
sc.cycles.samples = SAMPLES
sc.cycles.use_denoising = True
sc.cycles.denoiser = "OPENIMAGEDENOISE"
sc.cycles.max_bounces = 4
sc.render.use_persistent_data = True
sc.render.resolution_x = sc.render.resolution_y = RES
sc.render.film_transparent = True
sc.view_settings.view_transform = "AgX"
sc.view_settings.look = "AgX - Medium High Contrast"
sc.render.image_settings.file_format = "PNG"
sc.render.image_settings.color_mode = "RGBA"


def srgb(h):
    h = h.lstrip("#")
    c = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    return tuple(((x + 0.055) / 1.055) ** 2.4 if x > 0.04045 else x / 12.92 for x in c)


def grain_mat(name, c1, c2, scale=60, bump=0.4, rough=0.9, speck=None):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    nt = m.node_tree
    N, L = nt.nodes, nt.links
    p = N["Principled BSDF"]
    p.inputs["Roughness"].default_value = rough
    tc = N.new("ShaderNodeTexCoord")
    noise = N.new("ShaderNodeTexNoise")
    noise.inputs["Scale"].default_value = scale
    noise.inputs["Detail"].default_value = 8
    noise.inputs["Roughness"].default_value = 0.7
    L.new(tc.outputs["Object"], noise.inputs["Vector"])
    ramp = N.new("ShaderNodeValToRGB")
    ramp.color_ramp.elements[0].color = (*srgb(c1), 1)
    ramp.color_ramp.elements[1].color = (*srgb(c2), 1)
    ramp.color_ramp.elements[0].position = 0.35
    ramp.color_ramp.elements[1].position = 0.65
    L.new(noise.outputs["Fac"], ramp.inputs["Fac"])
    col = ramp.outputs["Color"]
    if speck:
        vor = N.new("ShaderNodeTexVoronoi")
        vor.inputs["Scale"].default_value = scale * 2.2
        L.new(tc.outputs["Object"], vor.inputs["Vector"])
        sr = N.new("ShaderNodeValToRGB")
        sr.color_ramp.elements[0].position = 0.0
        sr.color_ramp.elements[1].position = 0.12
        L.new(vor.outputs["Distance"], sr.inputs["Fac"])
        mix = N.new("ShaderNodeMix")
        mix.data_type = "RGBA"
        mix.inputs["B"].default_value = (*srgb(speck), 1)
        L.new(sr.outputs["Color"], mix.inputs["Factor"])
        # invert: specks where distance small
        inv = N.new("ShaderNodeInvert")
        L.new(sr.outputs["Color"], inv.inputs["Color"])
        L.new(inv.outputs["Color"], mix.inputs["Factor"])
        L.new(col, mix.inputs["A"])
        col = mix.outputs["Result"]
    L.new(col, p.inputs["Base Color"])
    b = N.new("ShaderNodeBump")
    b.inputs["Strength"].default_value = bump
    b.inputs["Distance"].default_value = 0.02
    L.new(noise.outputs["Fac"], b.inputs["Height"])
    L.new(b.outputs["Normal"], p.inputs["Normal"])
    return m


def plain(name, color, rough=0.6):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    p = m.node_tree.nodes["Principled BSDF"]
    p.inputs["Base Color"].default_value = (*srgb(color), 1)
    p.inputs["Roughness"].default_value = rough
    return m


def box(name, x0, x1, y0, y1, z0, z1, m):
    me = bpy.data.meshes.new(name)
    bm = bmesh.new()
    bmesh.ops.create_cube(bm, size=1)
    for v in bm.verts:
        v.co = Vector(((x0 + x1) / 2 + v.co.x * (x1 - x0), (y0 + y1) / 2 + v.co.y * (y1 - y0), (z0 + z1) / 2 + v.co.z * (z1 - z0)))
    bm.to_mesh(me)
    bm.free()
    o = bpy.data.objects.new(name, me)
    o.data.materials.append(m)
    sc.collection.objects.link(o)
    bev = o.modifiers.new("bev", "BEVEL")
    bev.width = 0.004
    bev.segments = 2
    return o


def rocks(name, x0, x1, y0, y1, z0, z1, n, rmin, rmax, cols, round_=False):
    """Scatter rocks close to the visible faces (front -y, right +x, top)."""
    obs = []
    base = []
    for k in range(4):
        bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=2 if round_ else 1, radius=1)
        r = bpy.context.object
        for v in r.data.vertices:
            v.co *= 1 + random.uniform(-0.18, 0.18) * (0.5 if round_ else 1)
        if round_:
            r.scale = (1, 0.8, 0.65)
            bpy.ops.object.transform_apply(scale=True)
            bpy.ops.object.shade_smooth()
        r.data.materials.append(cols[k % len(cols)])
        r.hide_render = True
        r.hide_viewport = True
        base.append(r)
    me = bpy.data.meshes.new(name + "_pts")
    verts = []
    for i in range(n):
        face = random.random()
        if face < 0.45:
            p = (random.uniform(x0, x1), y0 + random.uniform(0, 0.03), random.uniform(z0, z1))
        elif face < 0.8:
            p = (x1 - random.uniform(0, 0.03), random.uniform(y0, y1), random.uniform(z0, z1))
        else:
            p = (random.uniform(x0, x1), random.uniform(y0, y1), z1 - random.uniform(0, 0.02))
        verts.append(p)
    # one point cloud per rock shape so each gets its own material
    groups = [[] for _ in base]
    for v in verts:
        groups[random.randrange(len(base))].append(v)
    for gi, g in enumerate(groups):
        pm = bpy.data.meshes.new(f"{name}_pts{gi}")
        pm.from_pydata(g, [], [])
        po = bpy.data.objects.new(f"{name}_cloud{gi}", pm)
        sc.collection.objects.link(po)
        mod = po.modifiers.new("gn", "NODES")
        tree = bpy.data.node_groups.new(f"{name}_gn{gi}", "GeometryNodeTree")
        tree.interface.new_socket("Geometry", in_out="INPUT", socket_type="NodeSocketGeometry")
        tree.interface.new_socket("Geometry", in_out="OUTPUT", socket_type="NodeSocketGeometry")
        N, L = tree.nodes, tree.links
        gi_ = N.new("NodeGroupInput")
        go = N.new("NodeGroupOutput")
        m2p = N.new("GeometryNodeMeshToPoints")
        inst = N.new("GeometryNodeInstanceOnPoints")
        oi = N.new("GeometryNodeObjectInfo")
        oi.inputs["Object"].default_value = base[gi]
        rr = N.new("FunctionNodeRandomValue")
        rr.data_type = "FLOAT_VECTOR"
        rr.inputs["Min"].default_value = (0, 0, 0)
        rr.inputs["Max"].default_value = (6.3, 6.3, 6.3)
        rs = N.new("FunctionNodeRandomValue")
        rs.data_type = "FLOAT"
        rs.inputs[2].default_value = rmin
        rs.inputs[3].default_value = rmax
        rs.inputs["Seed"].default_value = gi + 3
        L.new(gi_.outputs[0], m2p.inputs["Mesh"])
        L.new(m2p.outputs["Points"], inst.inputs["Points"])
        L.new(oi.outputs["Geometry"], inst.inputs["Instance"])
        L.new(rr.outputs["Value"], inst.inputs["Rotation"])
        L.new(rs.outputs[1], inst.inputs["Scale"])
        L.new(inst.outputs["Instances"], go.inputs[0])
        mod.node_group = tree
        obs.append(po)
    return obs


# ------------------------------------------------------------------ layers (top to bottom)
X0, X1, Y0, Y1 = -0.6, 0.6, -0.4, 0.4
LAYERS = [
    # key, label, thickness, material
    ("top", 0.05),
    ("dyn", 0.11),
    ("base", 0.22),
    ("drain", 0.17),
    ("soil", 0.16),
]
M = {
    "top": grain_mat("top", "#b4532b", "#cf6c3e", 90, 0.35, speck="#e08a5c"),
    "dyn": grain_mat("dyn", "#5a2a1b", "#76381f", 55, 0.6, speck="#2a1812"),
    "base": grain_mat("base", "#6f6a62", "#8d877c", 30, 0.8),
    "drain": grain_mat("drain", "#9c958a", "#b6afa2", 25, 0.6),
    "soil": grain_mat("soil", "#4a3a2c", "#5e4a37", 18, 0.7, speck="#2c221a"),
}
rock_cols = {
    "base": [plain("r1", "#7a756c", 0.8), plain("r2", "#5f5b55", 0.8), plain("r3", "#938d82", 0.8), plain("r4", "#6c675f", 0.8)],
    "drain": [plain("g1", "#b8b0a2", 0.55), plain("g2", "#9d9486", 0.55), plain("g3", "#c9c1b2", 0.55), plain("g4", "#8a8275", 0.55)],
    "dyn": [plain("k1", "#3b2a22", 0.7), plain("k2", "#6d3422", 0.7), plain("k3", "#4f2e22", 0.7), plain("k4", "#8a4429", 0.7)],
}
groups = {}
z = 0.0
tot = sum(t for _, t in LAYERS)
z = tot
for key, th in LAYERS:
    z0, z1 = z - th, z
    pivot = bpy.data.objects.new("L_" + key, None)
    sc.collection.objects.link(pivot)
    o = box(key, X0, X1, Y0, Y1, z0, z1, M[key])
    o.parent = pivot
    kids = [o]
    if key in rock_cols:
        n = {"base": 2200, "drain": 1800, "dyn": 2600}[key]
        r = {"base": (0.012, 0.026), "drain": (0.014, 0.03), "dyn": (0.004, 0.009)}[key]
        for ob in rocks(key, X0 + 0.004, X1 - 0.004, Y0 + 0.004, Y1 - 0.004, z0 + 0.006, z1 - 0.004, n, *r, rock_cols[key], round_=(key == "drain")):
            ob.parent = pivot
    groups[key] = (pivot, z0, z1)
    z = z0

# white line tape on the top dressing, with nails
tape = plain("tape", "#f5f2ea", 0.45)
top_pivot = groups["top"][0]
t = box("tape", X0, X1, 0.1, 0.15, tot - 0.002, tot + 0.003, tape)
t.parent = top_pivot
nail = plain("nail", "#9a9a95", 0.3)
for x in [-0.45, -0.15, 0.15, 0.45]:
    bpy.ops.mesh.primitive_cylinder_add(radius=0.006, depth=0.002, location=(x, 0.125, tot + 0.004))
    n_ = bpy.context.object
    n_.data.materials.append(nail)
    n_.parent = top_pivot
# loose granules on the top surface
for k in range(260):
    bpy.ops.mesh.primitive_ico_sphere_add(subdivisions=1, radius=random.uniform(0.002, 0.005),
                                          location=(random.uniform(X0 + 0.02, X1 - 0.02), random.uniform(Y0 + 0.02, Y1 - 0.02), tot + 0.002))
    g = bpy.context.object
    g.data.materials.append(M["top"])
    g.parent = top_pivot

# ------------------------------------------------------------------ light + camera
world = bpy.data.worlds.new("w")
sc.world = world
world.use_nodes = True
world.node_tree.nodes["Background"].inputs["Color"].default_value = (0.95, 0.92, 0.86, 1)
world.node_tree.nodes["Background"].inputs["Strength"].default_value = 0.22


def area(name, loc, size, power, color, target=(0, 0, 0.35)):
    l = bpy.data.lights.new(name, "AREA")
    l.energy, l.color, l.size = power, color, size
    o = bpy.data.objects.new(name, l)
    o.location = loc
    sc.collection.objects.link(o)
    o.rotation_euler = (Vector(target) - Vector(loc)).to_track_quat("-Z", "Y").to_euler()


area("key", (-2.0, -2.2, 3.0), 2.0, 340, (1.0, 0.95, 0.88))
area("fill", (2.6, -1.4, 1.0), 2.5, 80, (0.9, 0.95, 1.0))
area("back", (1.0, 2.5, 2.0), 1.5, 140, (1.0, 0.9, 0.8))

cd = bpy.data.cameras.new("cam")
cd.lens = 50
cam = bpy.data.objects.new("cam", cd)
sc.collection.objects.link(cam)
cam.location = (-1.8, -2.62, 2.18)
target = Vector((0.08, 0, 0.62))
cam.rotation_euler = (target - cam.location).to_track_quat("-Z", "Y").to_euler()
sc.camera = cam

# ------------------------------------------------------------------ explode + render
os.makedirs(OUT, exist_ok=True)
GAP = 0.2
anchors = []
order = [k for k, _ in LAYERS]
for f in range(FRAMES):
    u = f / (FRAMES - 1)
    e = u * u * (3 - 2 * u)
    for i, key in enumerate(order):
        pv = groups[key][0]
        pv.location = (0, 0, (len(order) - 1 - i) * GAP * e)
    bpy.context.view_layer.update()
    fr = {}
    for i, key in enumerate(order):
        pv, z0, z1 = groups[key]
        zc = (z0 + z1) / 2 + pv.location.z
        p = world_to_camera_view(sc, cam, Vector((X1, Y0, zc)))
        fr[key] = [round(p.x, 4), round(1 - p.y, 4)]
    anchors.append(fr)
    sc.render.filepath = os.path.join(OUT, f"c{f:03d}.png")
    bpy.ops.render.render(write_still=True)
    print("frame", f, flush=True)
json.dump(anchors, open(os.path.join(OUT, "anchors.json"), "w"))
