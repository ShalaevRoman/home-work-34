# Advanced Webpack Configuration Project

A comprehensive Webpack 5 configuration demonstrating professional development and production workflows. This project showcases all essential modern web development tools including preprocessors, transpilers, linters, and asset management.

## 🚀 Core Features Implemented

### 1. **DevServer with Hot Module Replacement (HMR)**
- Automatic page reload on code changes
- Preserves application state during updates  
- Configured for optimal development experience
- Error overlay for quick debugging
- Command: `npm start`

### 2. **Stylesheet Preprocessors**
- **CSS**: Standard stylesheets with extraction to separate files
- **SCSS/Sass**: Advanced features (variables, mixins, nesting in `components.scss` and `variables.scss`)
- **LESS**: Dynamic stylesheets with operations (theme.less)
- All support responsive design with media queries
- Automatic compilation during build process

### 3. **TypeScript Support**
- Full type checking with `tsconfig.json`
- ts-loader for compilation
- Interface and type definitions (`utils.ts`)
- Better IDE support and autocomplete
- Strict mode enabled for type safety

### 4. **JavaScript Transpilation with Babel**
- Babel 7 converting modern ES6+ to compatible JavaScript
- Preset-env for automatic browser target configuration
- Support for experimental JavaScript features
- Configuration in `.babelrc`
- Works seamlessly with webpack

### 5. **Code Quality with ESLint**
- Automatic code linting with TypeScript support
- Comprehensive rules for consistent code style
- Configuration in `.eslintrc.json`
- Run with: `npm run lint`
- Prevents common mistakes and enforces best practices

### 6. **Bundle Visualization**
- Webpack Bundle Analyzer for analyzing bundle contents
- Identify large dependencies and optimization opportunities
- Generate interactive HTML report
- Run with: `ANALYZE=true npm run build`

### 7. **Professional Asset Management**
- File hashing for cache busting in production
- Font support (WOFF, WOFF2, TTF, OTF, EOT)
- Image optimization with smart inlining (< 8KB)
- Organized output directories (js, css, fonts, images)
- Vendor chunk separation for efficient caching

### 8. **Production Optimization**
- Code minification and tree-shaking
- Automatic split chunks strategy
- Runtime chunk extracted separately
- Source maps for production debugging
- Optimized CSS extraction with MiniCssExtractPlugin

## 📁 Project Structure

```
home-work-34/
├── src/
│   ├── index.html              # Main HTML template
│   ├── index.js                # Entry point
│   ├── utils.ts                # TypeScript utilities
│   ├── styles/
│   │   ├── style.css           # Main stylesheet
│   │   ├── variables.scss      # SCSS variables and mixins
│   │   ├── components.scss     # SCSS components
│   │   └── theme.less          # LESS theme styles
│   ├── fonts/                  # Font files directory
│   └── images/                 # Image assets directory
├── webpack.config.js           # Main webpack configuration
├── tsconfig.json               # TypeScript configuration
├── .babelrc                    # Babel configuration
├── .eslintrc.json              # ESLint configuration
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 📦 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/ShalaevRoman/home-work-34.git
cd home-work-34
```

### 2. Install dependencies
```bash
npm install
```

This will install all required packages:
- webpack 5 and webpack-dev-server
- Babel with presets
- TypeScript and ts-loader
- Sass, LESS, and CSS loaders
- ESLint with plugins
- Webpack Bundle Analyzer
- HTML Webpack Plugin and Mini CSS Extract Plugin

## 🎯 Available Commands

### Development
```bash
npm start
```
Starts the webpack dev server on `http://localhost:3000` with:
- Hot Module Replacement enabled
- Cheap source maps for debugging
- Automatic browser opening
- Error overlay

### Production Build
```bash
npm run build
```
Creates optimized production build with:
- Code minification
- File hashing
- CSS extraction
- Full source maps
- Tree-shaking of unused code

### Development Build
```bash
npm run dev
```
Creates unminified development build for testing without dev server

### Code Linting
```bash
npm run lint
```
Runs ESLint to check code quality for `.js`, `.ts`, `.jsx`, and `.tsx` files

### Bundle Analysis
```bash
ANALYZE=true npm run build
```
Generates bundle size visualization report (Windows: `set ANALYZE=true && npm run build`)

## 📊 Build Output Structure

After production build, the `dist/` directory contains:

```
dist/
├── index.html                  # Minified HTML
├── js/
│   ├── main.[contenthash].js   # Application code
│   ├── vendors.[contenthash].js # Dependencies
│   └── runtime.[contenthash].js # Webpack runtime
├── css/
│   └── main.[contenthash].css  # Compiled stylesheets
├── fonts/                      # Extracted fonts with hashes
├── images/                     # Optimized images with hashes
└── *.map                       # Source maps for debugging
```

## 🔧 Webpack Configuration Details

### Module Loaders

**JavaScript/TypeScript**
- babel-loader: Transforms modern JS with Babel
- ts-loader: Compiles TypeScript files
- Extensions: .js, .jsx, .ts, .tsx

**Stylesheets**
- css-loader: Processes CSS imports
- sass-loader: Compiles SCSS/Sass to CSS
- less-loader: Compiles LESS to CSS
- style-loader (dev): Injects styles into DOM
- MiniCssExtractPlugin (prod): Extracts to separate files

**Assets**
- Fonts: WOFF, WOFF2, EOT, TTF, OTF
- Images: PNG, JPG, JPEG, GIF, SVG
- Smart inlining for small files (< 8KB)

### Build Modes

**Development Mode**
- Cheap source maps for fast builds
- Style-loader for quicker updates
- No minification for readable code
- Easier debugging with original sources

**Production Mode**
- Full source maps for debugging
- MiniCssExtractPlugin for separate CSS
- Code minification and optimization
- Tree-shaking enabled
- File hashing for cache busting

## 📚 Example Files

### TypeScript (src/utils.ts)
Demonstrates:
- Interfaces and types
- Function typing
- Module exports
- JSDoc comments

### SCSS (src/styles/components.scss, variables.scss)
Demonstrates:
- Variables and mixins
- Nesting and parent selectors
- Responsive mixins
- Component styling

### LESS (src/styles/theme.less)
Demonstrates:
- LESS variables and mixins
- Nested selectors
- Animations
- Color operations

## 🌐 Browser Support

Configured for modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Babel preset-env automatically polyfills as needed.

## 💡 Development Tips

### Adding New Assets
1. **Images**: Place in `src/images/`, import in JavaScript or reference in HTML
2. **Fonts**: Place in `src/fonts/`, reference in CSS with `@font-face`
3. **Styles**: Create `.css`, `.scss`, or `.less` files and import in JavaScript
4. **JavaScript/TypeScript**: Import in entry point or use dynamic imports

### Performance Best Practices
- Keep vendor bundle separate for better caching
- Use dynamic imports for code splitting
- Lazy load images below the fold
- Monitor bundle size with `ANALYZE=true npm run build`
- Enable gzip compression on your server

### ESLint Rules
Check `.eslintrc.json` for configured rules including:
- Consistent indentation (2 spaces)
- Single quotes for strings
- Semicolons required
- TypeScript-specific rules

## 🚀 Deployment

The `dist/` folder is ready for deployment to:
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Any static hosting service

## 🐛 Troubleshooting

### Dev Server Won't Start
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm start
```

### TypeScript Errors
- Check `tsconfig.json` is in project root
- Verify file extensions (.ts or .tsx)
- Enable "Use TypeScript Version" in IDE

### SCSS/LESS Not Compiling
- Verify `node-sass` or `sass` is installed
- Check `less` package is installed
- Review webpack.config.js loaders section

### ESLint Warnings
- Run `npm run lint` to see all issues
- Fix automatically with `eslint src --fix`
- Check `.eslintrc.json` for rule configuration

### Bundle Size Issues
- Run `ANALYZE=true npm run build` to visualize
- Check for large dependencies
- Use dynamic imports for code splitting
- Enable tree-shaking in production

## 📝 Configuration Files

### webpack.config.js
Main webpack configuration with:
- Entry and output settings
- Module loaders for all file types
- Plugins for HTML generation, CSS extraction, and bundle analysis
- Optimization strategies
- DevServer configuration

### tsconfig.json
TypeScript compiler options with:
- ES2020 target
- Strict mode enabled
- DOM libraries included
- Source maps enabled

### .babelrc
Babel presets and configuration:
- @babel/preset-env for modern JavaScript
- @babel/preset-typescript for TypeScript support

### .eslintrc.json
ESLint rules for code quality:
- ES2021 environment
- TypeScript parser
- Comprehensive rule set

## 📄 License

This project is created for educational purposes as part of a homework assignment.

## 🤝 Contributing

Feel free to fork and modify this configuration for your own projects!
