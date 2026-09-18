---
name: mf-media-image-compression
description: Create web-ready image derivatives with Sharp while preserving source images and checking size, dimensions and visible quality.
---

# Image compression

Use for thumbnails, web screenshots and social images. Start with the required dimensions, format, file-size ceiling and whether cropping is permitted.

1. Preserve the input and choose a new output path. Inspect input dimensions, orientation, alpha and animation before transforming it. Do not flatten animation or transparency without an explicit output decision.
2. Use the host package manager to add Sharp if it is absent. Work on one representative derivative first. Use `inside` when the complete composition must remain visible; `cover` crops to fill the target and needs visual inspection.
3. Select WebP/AVIF for compatible web surfaces, or JPEG when social consumers require it. Choose quality by comparing real output, especially text edges, gradients and grain. Do not assume a single quality value meets every byte budget.
4. Verify output dimensions, file type and bytes, then open the actual output. Confirm subjects and supplied logos were not clipped and the original is unchanged.

Example for an explicitly approved 1200 × 630 crop, with distinct input/output paths:

```js
import sharp from 'sharp';
await sharp(input).rotate().resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 86, progressive: true }).toFile(output);
```

Report original/output sizes, resize/crop decisions and any visible compromise. Metadata removal is not a claim that visible personal information has been removed.

## Sources

- https://sharp.pixelplumbing.com/
- https://github.com/lovell/sharp
