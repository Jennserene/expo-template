# Expo Template

This repository serves as a starting point for creating Expo projects with typeScript, linting, testing, CI, git hooks, and a few commonly used dependencies already set up.

## Getting Started

To get started with this template, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install` or `yarn install`.
3. Start the Expo development server by running `npm run start`.
4. Open the Expo app on your mobile device and scan the QR code displayed in the terminal or in the Expo DevTools.
5. Start building your app by editing the files in the `src` directory.

### Available Scripts

- `npm run prepare`: Installs Husky, a Git hook manager, to enable precommit hooks.
- `npm run start`: Starts the Expo development server.
- `npm run start:clear`: Starts the Expo development server and clears the cache.
- `npm run start:android`: Starts the Expo development server and opens the app on an Android emulator or device.
- `npm run start:ios`: Starts the Expo development server and opens the app on an iOS simulator or device.
- `npm run start:web`: Starts the Expo development server and opens the app in a web browser.
- `npm run ts:check`: Runs the TypeScript compiler to check for type errors.
- `npm run lint`: Runs ESLint to check for code quality and consistency issues.
- `npm run lint:fix`: Runs ESLint and automatically fixes code quality and consistency issues.
- `npm run test`: Runs Jest to execute unit tests and generate a coverage report.
- `npm run test:watch`: Runs Jest in watch mode, allowing you to re-run tests automatically when files change.

You can run these scripts by using the `npm run` command followed by the script name. For example, to start the Expo development server, you can run `npm run start`.

- prepare: Installs Husky, a Git hook manager, to enable precommit hooks.
- start: Starts the Expo development server.
- android: Starts the Expo development server and opens the app on an Android emulator or device.
- ios: Starts the Expo development server and opens the app on an iOS simulator or device.
- web: Starts the Expo development server and opens the app in a web browser.
- ts:check: Runs the TypeScript compiler to check for type errors.
- lint: Runs ESLint to check for code quality and consistency issues.
- lint:fix: Runs ESLint and automatically fixes code quality and consistency issues.
- test: Runs Jest to execute unit tests and generate a coverage report.
- test:watch: Runs Jest in watch mode, allowing you to re-run tests automatically when files change.

You can run these scripts by using the npm run command followed by the script name. For example, to start the Expo development server, you can run npm run start.

## Features

- TypeScript: This template is configured to use TypeScript for type checking and improved developer experience.
- Linting: ESLint is set up with a basic configuration to enforce code quality and consistency.
- Testing: Jest is configured for unit testing your code. You can add your tests in the `__tests__` directory.
- Pre-commit Hook: This template includes a precommit hook that runs linting and testing before committing and pushing your code, respectively.
- Pre-push Hook: This template includes a prepush hook that runs tests before pushing your code.
- CI: This template includes a GitHub Actions workflow that runs linting and tests on every pull request.
- Commonly Used Dependencies: This template includes some commonly used dependencies such as Expo Router.
  - [Expo Router](https://docs.expo.dev/router/introduction/): This template includes the Expo router for easy navigation between screens.

## Folder Structure

The folder structure of this template is as follows:

- root: Project configuration
- ./\_\_tests\_\_/: Contains all tests
  - /\_\_mocks\_\_/: Contains mock files for testing. Imported with `@mocks`
- ./src/: Contains the entirety of the app
  - /api/: Contains API-related files. Imported with `@api`
  - /app/: Contains the main application files. Imported with `@app`
  - /assets/: Contains static assets such as images and fonts. Imported with `@assets`
  - /components/: Contains reusable UI components. Imported with `@components`
  - /hooks/: Contains custom React hooks. Imported with `@hooks`
  - /typeDefs/: Contains TypeScript type definitions. Imported with `@typeDefs`
  - /utils/: Contains utility functions and helper files. Imported with `@utils`

## Customization

Adding additional dependencies should be done using `expo`. For example, to add `expo-battery`, you can run:

`npx expo install expo-battery`

If you need to add a development dependency, you can add the `-- --save-dev` flag:

`npx expo install axios-mock-adapter -- --save-dev`
