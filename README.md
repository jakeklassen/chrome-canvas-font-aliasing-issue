# Chrome Canvas Bitmap Font Aliasing Issue

## Issue

It seems the <canvas> element in Chrome does not support disabling font aliasing.

This setup ensures the following:

- canvas context `imageSmoothingEnabled` is set to `false`
- canvas `image-rendering` is set to `pixelated`
- canvas `font-smoothing` is set to `none` (experimental)

## Running

`yarn && yarn dev`
