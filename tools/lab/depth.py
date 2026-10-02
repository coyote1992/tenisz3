"""Depth maps for the living photograph (idea 21).
Model: Depth Anything V2 small (onnx-community/depth-anything-v2-small, onnx/model.onnx).
Usage: python depth.py hero-serve stadium-court   (reads public/img/<name>.jpg, writes <name>-depth.png)
The site uses these after a 7 px max filter and 3 px blur, saved as public/lab/<name>-depth.webp.
"""
import onnxruntime as ort, numpy as np, sys
from PIL import Image
s = ort.InferenceSession("model.onnx", providers=["CPUExecutionProvider"])
print([ (i.name, i.shape) for i in s.get_inputs()])
for name in sys.argv[1:]:
    im = Image.open(f"public/img/{name}.jpg").convert("RGB")
    W, H = im.size
    # keep aspect, multiple of 14
    tw = 770; th = int(round(tw * H / W / 14)) * 14
    x = np.asarray(im.resize((tw, th), Image.BICUBIC), dtype=np.float32) / 255.
    x = (x - [0.485, 0.456, 0.406]) / [0.229, 0.224, 0.225]
    x = x.transpose(2, 0, 1)[None].astype(np.float32)
    d = s.run(None, {s.get_inputs()[0].name: x})[0][0]
    d = (d - d.min()) / (d.max() - d.min())
    out = Image.fromarray((d * 255).astype(np.uint8)).resize((W // 2, H // 2), Image.BICUBIC)
    out.save(f"{name}-depth.png"); print(name, out.size)
