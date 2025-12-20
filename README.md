# Flora Studios

A modern architecture landing page project.

## Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- npm (comes with Node.js)
- A Vercel account for deployment

## Installation

1. Clone the repository (if you haven't already).
2. Install dependencies:

```bash
npm install
```

## Running the Project

To start the development server with live reloading:

```bash
npm start
```

This command runs `gulp`, which:
- Compiles SCSS to CSS.
- Starts a local server (usually at `http://localhost:3000`).
- Watches for changes in SCSS and HTML files.

## Building

To compile the styles for production without starting the server:

```bash
npm run build
```

## Vercel Speed Insights

This project includes Vercel Speed Insights for performance monitoring. Speed Insights tracks Core Web Vitals and other performance metrics for your application.

### Setup Instructions

#### 1. Enable Speed Insights in Vercel

On the [Vercel dashboard](/dashboard), select your Project followed by the **Speed Insights** tab. Select **Enable** from the dialog.

> **💡 Note:** Enabling Speed Insights will add new routes (scoped at `/_vercel/speed-insights/*`) after your next deployment.

#### 2. Deploy to Vercel

Deploy your app to Vercel's global CDN:

```bash
vercel deploy
```

Alternatively, [connect your project's git repository](/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest pushes and merges to main.

#### 3. View Your Data

Once your app is deployed and users have visited your site, you can view the data in the [Vercel dashboard](/dashboard) by selecting your project and clicking the **Speed Insights** tab.

### Implementation Details

Speed Insights has been integrated into all pages of the site using the HTML script tag implementation:

```html
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

This script is automatically loaded on all pages and requires no additional configuration.

### Learn More

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Understanding Metrics](https://vercel.com/docs/speed-insights/metrics)
- [Privacy and Compliance](https://vercel.com/docs/speed-insights/privacy-policy)

## Project Structure

- `public/`: Contains the source files.
  - `css/`: SCSS and compiled CSS files.
  - `pages/`: HTML pages.
  - `js/`: JavaScript files.
  - `assets/`: Images and fonts.
- `gulpfile.js`: Gulp configuration for tasks.
- `package.json`: Project dependencies and scripts.
