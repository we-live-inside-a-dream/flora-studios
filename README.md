# Flora Studios

A modern architecture landing page project.

## Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- npm (comes with Node.js)

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

## Project Structure

- `public/`: Contains the source files.
  - `css/`: SCSS and compiled CSS files.
  - `pages/`: HTML pages.
  - `js/`: JavaScript files.
  - `assets/`: Images and fonts.
- `gulpfile.js`: Gulp configuration for tasks.
- `package.json`: Project dependencies and scripts.
