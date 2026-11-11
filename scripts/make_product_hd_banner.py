import os
from PIL import Image, ImageFilter, ImageEnhance

source_path = r"C:\Users\user\.gemini\antigravity\brain\0137250f-e9f8-46dc-9950-a454aa8fd371\.user_uploaded\media_1794389346847_a78ab987.png"
out_dir = r"public\images"
os.makedirs(out_dir, exist_ok=True)

# Open source image
img = Image.open(source_path).convert("RGBA")
orig_w, orig_h = img.size
print(f"Original product banner dimensions: {orig_w}x{orig_h}")

# Upscale 2.5x to 2560 x 855 (Ultra-crisp 2.5K HD)
target_w = 2560
target_h = int(orig_h * (target_w / orig_w))

# Step 1: Lanczos high-quality resampling
hd_img = img.resize((target_w, target_h), resample=Image.Resampling.LANCZOS)

# Step 2: Unsharp mask to make text, edges, laptop and pill icons razor sharp
r, g, b, a = hd_img.split()
rgb = Image.merge("RGB", (r, g, b))

# Apply refined detail enhancement
sharpened = rgb.filter(ImageFilter.UnsharpMask(radius=1.6, percent=130, threshold=2))

# Contrast & sharpness fine-tune
enhancer = ImageEnhance.Sharpness(sharpened)
sharpened = enhancer.enhance(1.18)

color_enhancer = ImageEnhance.Color(sharpened)
sharpened = color_enhancer.enhance(1.04)

contrast_enhancer = ImageEnhance.Contrast(sharpened)
sharpened = contrast_enhancer.enhance(1.02)

# Merge back with alpha
r2, g2, b2 = sharpened.split()
final_hd = Image.merge("RGBA", (r2, g2, b2, a))

out_png = os.path.join(out_dir, "product-hero-banner-hd.png")
final_hd.save(out_png, format="PNG", optimize=True)

# Also save an optimized WebP for blazing fast load times
out_webp = os.path.join(out_dir, "product-hero-banner-hd.webp")
final_hd.save(out_webp, format="WEBP", quality=96, method=6)

print(f"Generated Product HD Banner: {target_w}x{target_h}")
print(f"Saved PNG size: {os.path.getsize(out_png)} bytes")
print(f"Saved WebP size: {os.path.getsize(out_webp)} bytes")
