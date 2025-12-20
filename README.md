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

## Getting Started with Vercel Speed Insights

This guide will help you get started with using Vercel Speed Insights on your project, showing you how to enable it, add the package to your project, deploy your app to Vercel, and view your data in the dashboard.

### Prerequisites

- A Vercel account. If you don't have one, you can [sign up for free](https://vercel.com/signup).
- A Vercel project. If you don't have one, you can [create a new project](https://vercel.com/new).
- The Vercel CLI installed. If you don't have it, you can install it using the following command:

```bash
npm i vercel
```

Or using your preferred package manager:

```bash
# pnpm
pnpm i vercel

# yarn
yarn i vercel

# bun
bun i vercel
```

### Setup Instructions

#### 1. Enable Speed Insights in Vercel

On the [Vercel dashboard](https://vercel.com/dashboard), select your Project followed by the **Speed Insights** tab. You can also select the button below to be taken there. Then, select **Enable** from the dialog.

> **💡 Note:** Enabling Speed Insights will add new routes (scoped at `/_vercel/speed-insights/*`) after your next deployment.

#### 2. Add `@vercel/speed-insights` to your project

The `@vercel/speed-insights` package has already been added to this project. If you need to add it to another project, use your package manager of choice:

```bash
npm i @vercel/speed-insights
```

Or using your preferred package manager:

```bash
# pnpm
pnpm i @vercel/speed-insights

# yarn
yarn i @vercel/speed-insights

# bun
bun i @vercel/speed-insights
```

#### 3. Implementation Details

Speed Insights has been integrated into all pages of the site using the HTML script tag implementation. This is the recommended approach for static HTML sites.

The following scripts have been added to all HTML pages (before the closing `</body>` tag):

```html
<script>
  window.si = window.si || function () { (window.siq = window.siq || []).push(arguments); };
</script>
<script defer src="/_vercel/speed-insights/script.js"></script>
```

The scripts are automatically loaded on all pages and require no additional configuration.

#### 4. Deploy your app to Vercel

Deploy your app to Vercel's global CDN by running the following command from your terminal:

```bash
vercel deploy
```

Alternatively, you can [connect your project's git repository](https://vercel.com/docs/git#deploying-a-git-repository), which will enable Vercel to deploy your latest pushes and merges to main.

Once your app is deployed, it's ready to begin tracking performance metrics.

> **💡 Note:** If everything is set up correctly, you should be able to find the `/_vercel/speed-insights/script.js` script inside the body tag of your page.

#### 5. View your data in the Dashboard

Once your app is deployed, and users have visited your site, you can view the data in the dashboard.

To do so, go to your [Vercel dashboard](https://vercel.com/dashboard), select your project, and click the **Speed Insights** tab.

After a few days of visitors, you'll be able to start exploring your metrics. For more information on how to use Speed Insights, see [Using Speed Insights](https://vercel.com/docs/speed-insights/using-speed-insights).

### Learn More

Explore the following resources to learn more about Vercel Speed Insights:

- [Learn how to use the `@vercel/speed-insights` package](https://vercel.com/docs/speed-insights/package)
- [Learn about metrics](https://vercel.com/docs/speed-insights/metrics)
- [Read about privacy and compliance](https://vercel.com/docs/speed-insights/privacy-policy)
- [Explore pricing](https://vercel.com/docs/speed-insights/limits-and-pricing)
- [Troubleshooting](https://vercel.com/docs/speed-insights/troubleshooting)
- [Privacy and Data Compliance Standards](https://vercel.com/docs/speed-insights/privacy-policy)

## Project Structure

- `public/`: Contains the source files.
  - `css/`: SCSS and compiled CSS files.
  - `pages/`: HTML pages.
  - `js/`: JavaScript files.
  - `assets/`: Images and fonts.
- `gulpfile.js`: Gulp configuration for tasks.
- `package.json`: Project dependencies and scripts.
