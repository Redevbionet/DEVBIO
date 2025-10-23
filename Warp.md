# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

DEVBIO is a static web application for storing online account information with a cybersecurity focus. The project is called "Rexdevcyber" and uses Firebase for backend services. It's designed as a landing page with user registration/login functionality.

## Technology Stack

- **Frontend**: Static HTML with Bootstrap 5.2.3 for UI components
- **Backend**: Firebase (Realtime Database, Analytics, Authentication)
- **Hosting**: GitHub Pages (automatic deployment via GitHub Actions)
- **Development Environment**: Universal DevContainer support available

## Project Structure

This is a minimal static site with only two files in the root:
- `index.html` - Main landing page
- `README.md` - Project documentation

Referenced but currently missing directories:
- `src/css/` - Should contain `styles_1.css`
- `src/js/` - Should contain `scripts_1.js`
- `dashbord/` - Should contain `signup.html` and `signin.html`
- `assets/` - Should contain `favicon.ico`

## Firebase Configuration

The project uses Firebase with the following services:
- **Project ID**: rexdevcyber
- **Database**: Realtime Database (asia-southeast1)
- **Services**: Analytics, Authentication (implied by signup/login)

**IMPORTANT**: The Firebase API key in index.html is publicly visible. This is acceptable for web apps, but ensure Firebase security rules are properly configured to restrict data access.

## Deployment

### GitHub Pages
Deployment is automatic via `.github/workflows/static.yml`:
- Triggers on push to `main` branch or manual dispatch
- Deploys entire repository to GitHub Pages
- No build step required (static content)

To manually trigger deployment:
```bash path=null start=null
gh workflow run static.yml
```

### CI Workflow
`.github/workflows/Main.yml` sets up a Windows runner with ngrok for remote desktop access. This is a development/debugging tool, not part of the main deployment pipeline.

## Development Workflow

### Local Development
Since this is a static site with no build process:

1. **View locally**: Open `index.html` directly in a browser, or use a simple HTTP server:
   ```bash path=null start=null
   python -m http.server 8000
   # or
   npx serve .
   ```

2. **Test Firebase connection**: Ensure internet connection for CDN resources and Firebase SDK

### Using DevContainer
A universal DevContainer is configured in `.devcontainer/devcontainer.json`. To use:
```bash path=null start=null
# In VS Code or compatible IDE
# Open Command Palette and select "Dev Containers: Reopen in Container"
```

## Missing Assets

When working on this project, be aware that several referenced assets are missing:
- CSS and JavaScript files in `src/` directory
- Dashboard pages (`dashbord/signup.html`, `dashbord/signin.html`)
- Favicon and other assets

If implementing these:
1. Create the directory structure first
2. Ensure paths match references in `index.html`
3. Maintain Bootstrap 5 compatibility
4. Follow SimpleLightbox plugin usage patterns already in place

## Architecture Notes

### Single Page Structure
The current `index.html` is a complete landing page with sections:
- Navigation (sticky navbar)
- Masthead/Hero section
- About section
- Services section (4 feature cards)
- Contact section

### External Dependencies
All loaded via CDN (no package manager):
- Bootstrap 5.2.3 + Bootstrap Icons
- Google Fonts (Merriweather Sans, Merriweather)
- SimpleLightbox 2.1.0
- Start Bootstrap forms library
- Firebase SDK 11.8.1

### Navigation Flow
- Landing page → Register (`dashbord/signup.html`) or Login (`dashbord/signin.html`)
- Dashboard pages are not yet implemented

## Maintenance Notes

- No linting or type checking configured
- No test framework in place
- No build process or bundler
- Direct CDN dependencies (check for updates manually)
- Firebase config is embedded in HTML (consider externalizing for maintainability)
