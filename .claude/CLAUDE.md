# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

*   **Build & Run:**
    *   To start the development server with live reloading: `npm start`
    *   To compile styles for production: `npm run build`
*   **Testing:**
    *   To run a single test: You will need to consult the `package.json` file or the specific test runner setup (e.g., using `npm test` or running commands defined in `gulpfile.js`).
*   **Dependencies:**
    *   Install dependencies: `npm install`

## High-Level Architecture

The project is a modern landing page built with a front-end stack that compiles SCSS to CSS.

*   **Core Structure:** The project is organized around the `public/` directory, containing the HTML pages (`pages/`), CSS files (`css/`), JavaScript files (`js/`), and assets (`assets/`).
*   **Build Process:** The build process is managed by `gulpfile.js`, which compiles SCSS and sets up the local development server.
*   **Deployment:** The project is designed for deployment on Vercel, with specific instructions provided in `README.md` for enabling Speed Insights.

## Context from Existing Documentation

*   **README.md:** The `README.md` provides setup instructions for Node.js, dependencies, running the dev server (`npm start`), building (`npm run build`), and deployment via Vercel.
*   **File Structure:** The main directories are `public/`, `css/`, `pages/`, `js/`, and `assets/`.
*   **Vercel Integration:** Speed Insights is integrated via an HTML script tag on all pages.

## General Guidelines

*   Focus on the structure defined in the `gulpfile.js` for build and server tasks.
*   When making changes, ensure the build process (`npm run build`) is tested to confirm style compilation.
*   Always refer to the `README.md` for deployment procedures and project setup.