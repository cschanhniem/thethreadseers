# GitHub Pages Deployment Guide

## 🚀 Quick Deployment Steps

### Option 1: Automatic Deployment (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "feat: Complete Thread Seers website with authentic series bible content"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy your site

3. **Access Your Site**:
   - Your site will be available at: `https://yourusername.github.io/tts_series_site/`
   - The deployment typically takes 2-3 minutes

### Option 2: Manual Deployment

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Build the Project**:
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```

## 🔧 Configuration Details

### Vite Configuration
- **Base URL**: Set to `/tts_series_site/` for GitHub Pages
- **Build Output**: `dist` directory
- **Source Maps**: Enabled for debugging

### GitHub Actions Workflow
- **Trigger**: Pushes to `main` branch
- **Node Version**: 18.x
- **Build Command**: `npm run build`
- **Deploy Directory**: `./dist`

### Package.json Scripts
- `npm run build`: Builds the production version
- `npm run deploy`: Deploys to GitHub Pages using gh-pages
- `npm run predeploy`: Automatically runs build before deploy

## 🌐 Custom Domain (Optional)

To use a custom domain:

1. **Add CNAME file**:
   ```bash
   echo "your-domain.com" > public/CNAME
   ```

2. **Configure DNS**:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. **Update Vite Config**:
   ```typescript
   export default defineConfig({
     // ... other config
     base: '/', // Change from '/tts_series_site/'
   })
   ```

## 🔍 Troubleshooting

### Common Issues

1. **404 Errors on Refresh**:
   - GitHub Pages doesn't support client-side routing by default
   - Add a `404.html` file that redirects to `index.html`

2. **Assets Not Loading**:
   - Ensure `base` in `vite.config.ts` matches your repository name
   - Check that all asset paths are relative

3. **Build Failures**:
   - Check Node.js version compatibility
   - Ensure all dependencies are installed
   - Review build logs in GitHub Actions

### Debug Commands

```bash
# Check build locally
npm run build
npm run preview

# Test deployment locally
npx serve dist

# Check GitHub Pages status
# Go to repository Settings > Pages
```

## 📊 Performance Optimization

### Pre-deployment Checklist
- [ ] Images optimized and compressed
- [ ] Fonts preloaded in HTML
- [ ] CSS and JS minified
- [ ] Source maps generated for debugging
- [ ] Accessibility tested
- [ ] Mobile responsiveness verified

### Post-deployment Testing
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Reading interface functions
- [ ] Mobile menu operates smoothly
- [ ] Luminous effects display properly
- [ ] Performance scores (Lighthouse 90+)

## 🔐 Security Considerations

- No sensitive data in repository
- Environment variables not exposed
- HTTPS enforced by GitHub Pages
- Content Security Policy headers (if needed)

## 📈 Analytics Setup (Optional)

To add Google Analytics:

1. **Add tracking code to `index.html`**:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

2. **Update privacy policy** to mention analytics

## 🎯 Next Steps After Deployment

1. **Test thoroughly** on different devices and browsers
2. **Share the URL** with beta readers for feedback
3. **Monitor performance** using browser dev tools
4. **Update content** as needed using the content management system
5. **Consider SEO optimization** for better discoverability

## 📞 Support

If you encounter issues:
1. Check the GitHub Actions logs for build errors
2. Verify the repository settings for GitHub Pages
3. Test the build locally using `npm run build && npm run preview`
4. Ensure all dependencies are correctly installed

Your Thread Seers website will be live and accessible to readers worldwide! 🌟
