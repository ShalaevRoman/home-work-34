# Webpack Asset Management Project

A comprehensive Webpack configuration demonstrating professional asset management techniques including file hashing, font support, image optimization, CSS integration, and vendor library optimization.

## Features Implemented

### 1. **File Hashing for Cache Busting**
- Production builds include content hashes in filenames
- Prevents browser cache issues when files are updated
- Format: `[name].[contenthash].js` and `[name].[contenthash].css`

### 2. **Local Fonts Support**
- Integrated Google Fonts for typography
- Support for custom font formats (WOFF, WOFF2, TTF, OTF, EOT)
- Fonts are extracted to separate `fonts/` directory in build output
- File hashing applied to font files

### 3. **Image Handling**
- Support for PNG, JPG, JPEG, GIF, and SVG formats
- Automatic optimization with inline data URLs for small images (< 8KB)
- Larger images are extracted to separate files with hashing
- Images organized in `images/` directory in build output

### 4. **CSS Integration**
- CSS files are extracted to separate files in production
- Integrated with MiniCssExtractPlugin for optimal performance
- Support for modern CSS features
- Responsive design included in demo styles

### 5. **Vendor Library Optimization**
- Automatic splitting of vendor code (from node_modules)
- Separate chunks for common code between multiple files
- Runtime chunk separated for better caching strategy
- Reduces overall bundle size and improves page load performance

## Project Structure

```
home-work-34/
├── src/
│   ├── index.html          # Main HTML file
│   ├── index.js            # Entry point
│   ├── styles/
│   │   └── style.css       # Stylesheet
│   ├── fonts/              # Font files directory
│   └── images/             # Image assets directory
├── webpack.config.js       # Webpack configuration
├── package.json            # Project dependencies
└── README.md              # This file
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/ShalaevRoman/home-work-34.git
cd home-work-34
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Development Mode
```bash
npm start
```
- Starts webpack dev server on `http://localhost:3000`
- Enables hot module reloading
- Source maps available for debugging

### Production Build
```bash
npm run build
```
- Creates optimized production build in `dist/` directory
- Minifies all assets
- Applies file hashing
- Generates source maps for production debugging

### Development Build
```bash
npm run dev
```
- Creates unminified development build

## Build Output Structure

After building, the `dist/` directory contains:

```
dist/
├── index.html              # Minified HTML
├── js/
│   ├── main.[hash].js
│   ├── vendors.[hash].js
│   └── runtime.[hash].js
├── css/
│   └── main.[hash].css
├── fonts/                  # Extracted font files with hashes
├── images/                 # Extracted and optimized images
└── *.map                   # Source maps for debugging
```

## Webpack Configuration Highlights

### Module Rules

1. **CSS Loader**: Processes and extracts CSS files
   - Uses `MiniCssExtractPlugin` in production
   - Uses `style-loader` in development

2. **Font Loader**: Handles font file formats
   - Supports: WOFF, WOFF2, EOT, TTF, OTF
   - Organized in `fonts/` directory
   - File hashing applied automatically

3. **Asset Module**: Modern approach to handle images
   - Inline small images as data URLs (< 8KB)
   - Extract larger images with hashing
   - Supports common image formats

4. **Babel Loader**: JavaScript transpilation
   - Converts modern ES6+ syntax to ES5 for browser compatibility

### Optimization

- **Split Chunks**: Vendor libraries separated from application code
- **Runtime Chunk**: Webpack runtime extracted for better caching
- **Minification**: Production builds are minified by default
- **Source Maps**: Included in production for debugging

## Browser Support

This project supports all modern browsers including:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Technologies Used

- **Webpack 5**: Module bundler
- **Babel 8**: JavaScript transpiler
- **Mini CSS Extract Plugin**: CSS extraction
- **HTML Webpack Plugin**: HTML generation
- **Webpack Dev Server**: Development server

## Development Notes

### Adding New Assets

1. **Images**: Place in `src/images/`, import or reference in HTML
2. **Fonts**: Place in `src/fonts/`, reference in CSS via `@font-face`
3. **Styles**: Import in `src/index.js` or reference in HTML
4. **JavaScript**: Import in entry point or use dynamic imports

### Performance Tips

1. Keep vendor bundle separate for better caching
2. Use dynamic imports for code splitting
3. Lazy load images that are below the fold
4. Monitor bundle size with webpack-bundle-analyzer

## Deployment

The `dist/` folder is ready for deployment to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## File Size Reference

After production build, typical file sizes:

- `main.[hash].js`: 5-15 KB (application code)
- `vendors.[hash].js`: 10-30 KB (dependencies)
- `main.[hash].css`: 10-20 KB (stylesheets)
- Fonts: 20-100 KB total (depending on selected fonts)

## Troubleshooting

### Dev Server Issues
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check port 3000 is available
- Try `npm start` with verbose flag: `webpack serve --mode development --verbose`

### Build Errors
- Ensure all imported files exist
- Check file paths are relative to project root
- Verify webpack.config.js syntax with `webpack --validate`

### Image Not Loading
- Check image path in src attribute
- Verify image exists in `src/images/` directory
- Rebuild project: `npm run build`
