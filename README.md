# Minimum Working Example

This reproduces my issue with Svelte Custom Components, Rollup and the Shadow DOM.

## Reproducing

```
npm install
npm run bundle
python -m http.server -d ./bundle
```

You should see an unstyled button. Inspecting the source, you will find the CSS attached to `<head>` instead of the Shadow DOM inside `<my-counter>`.