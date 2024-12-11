# Nexus Toolbar Chrome Extension

A modern VTEX AI tools  Chrome extension built with TypeScript and React.

## Features

- Persistent floating toolbar at the bottom of the page
- Expandable panel with customizable action icons
- Modern, minimalist design with animations
- Fully TypeScript supported
- Styled with styled-components

## Development Setup

1. Install dependencies:
```bash
npm install
```

2. Build the extension:
```bash
npm run build
```

3. For development with hot reload:
```bash
npm run watch
```

## Loading the Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked" and select the `dist` directory

## Project Structure

- `src/` - TypeScript source files
  - `components/` - React components
  - `styles.ts` - Styled components
  - `types.ts` - TypeScript interfaces
  - `content.tsx` - Content script
  - `background.ts` - Background script
- `public/` - Static assets and manifest
- `dist/` - Built extension files

## Adding Custom Icons

1. Place your icon images in the `public/icons` directory
2. Update the `actionIcons` array in `src/content.tsx`
3. Rebuild the extension
