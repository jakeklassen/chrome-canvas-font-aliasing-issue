# Chrome Canvas Bitmap Font Aliasing Issue

[![Netlify Status](https://api.netlify.com/api/v1/badges/5e214937-7b2d-4ac6-9048-26cd921bd861/deploy-status)](https://app.netlify.com/sites/chrome-canvas-bitmap-font-aliasing/deploys)

[Demo](https://chrome-canvas-bitmap-font-aliasing.netlify.app/)

## Issue

It seems the <canvas> element in Chrome does not support disabling font aliasing.

This setup ensures the following:

- canvas context `imageSmoothingEnabled` is set to `false`
- canvas `image-rendering` is set to `pixelated`
- canvas `font-smoothing` is set to `none` (experimental)

## Running

`yarn && yarn dev`
