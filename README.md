# Tailwind CSS Hyphens

A Tailwind CSS plugin that helps you create utility classes for using the `hyphens` CSS property.

## Installation

Install it in a new or existing Tailwind CSS project

```bash
npm install -D @vivgui/tailwindcss-hyphens
# or
yarn add -D @vivgui/tailwindcss-hyphens
```

Then add the plugin to your `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@vivgui/tailwindcss-hyphens'),
    // ...
  ],
}
```

## Basic usage

The plugin generates these utility classes:

```css
 .hyphens-auto: {
    hyphens: "auto";
}

.hyphens-manual: {
    hyphens: "manual";
}

.hyphens-none: {
    hyphens: "none";
}
```

You can use it in your markup like this:

```html
<h1 class="hyphens-auto">Hello world</h1>
```
