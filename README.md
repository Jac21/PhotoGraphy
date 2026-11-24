# PhotoGraphy

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Build Status](https://github.com/Jac21/PhotoGraphy/actions/workflows/push.yaml/badge.svg)](https://github.com/Jac21/PhotoGraphy/actions/workflows/push.yaml)

Personal photography portfolio site: [jcantuphotography.com](https://www.jcantuphotography.com/)

## Features

- Angular-based photography portfolio
- Responsive layouts and image galleries powered by Macy.js
- Angular Material components
- Progressive web app support through Angular Service Worker
- Production build configuration and bundle budgets
- Custom domain support for GitHub Pages deployments

## Built With

- [Angular](https://angular.dev/) 21
- [Angular Material](https://material.angular.io/) 21
- [Angular CDK](https://material.angular.io/cdk/categories)
- [Macy.js](http://macyjs.com/) masonry-layout library
- [RxJS](https://rxjs.dev/) 7
- [TypeScript](https://www.typescriptlang.org/) 5.8+
- Karma and Jasmine for unit tests
- Angular CLI and `angular-cli-ghpages` for building and deployment

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20 (see `.nvmrc`)
- npm
- Angular CLI

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Jac21/PhotoGraphy.git
cd PhotoGraphy
nvm use
npm install
npm install -g @angular/cli
```

If you do not use nvm, make sure Node.js 20.20.0 is active.

### Development Server

Start the local development server:

```bash
npm start
```

Open `http://localhost:4200/`. The application reloads automatically when source files change.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Angular development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run budget` | Run the production build and bundle budget checks |
| `npm test` | Run unit tests with Karma |
| `npm run lint` | Run lint checks |
| `npm run e2e` | Run the end-to-end test suite |
| `npm run deploy` | Build and deploy the site to GitHub Pages |

## Testing

Run the unit test suite with:

```bash
npm test
```

The repository also includes legacy Protractor end-to-end configuration:

```bash
npm run e2e
```

## Deployment

The deploy workflow builds the application with the production base href configured for `https://jcantuphotography.com/`, then publishes `dist/browser` with `angular-cli-ghpages`:

```bash
npm run deploy
```

Deployment configuration is defined in `angular.json`, `package.json`, and `src/CNAME`.

## Continuous Integration

GitHub Actions uses Node.js 20 to install dependencies and run a production build for pushes to `master` and `feature/*`, as well as pull requests targeting `master`.

## Project Structure

```text
src/
├── app/          Application components and modules
├── assets/       Images and static assets
├── environments/ Angular environment configuration
├── CNAME         Custom GitHub Pages domain
├── manifest.json Progressive web app manifest
└── sitemap.xml   Search engine sitemap
```

## License

This project is licensed under the [MIT License](LICENSE).
