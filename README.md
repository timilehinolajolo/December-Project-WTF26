# December Project Setup

## Project Overview
This project is a React application set up using Vite. It serves as the foundation for the CourseHub project.

### What is NPM?
**NPM (Node Package Manager)** is the default package manager for the JavaScript runtime environment Node.js. It serves two main purposes:
* **Registry:** It acts as an online database (repository) of public and paid-for private packages, often called the "App Store for developers."
* **CLI Tool:** It is a command-line utility that developers use to interact with this repository. It allows us to install, update, and manage the external libraries (dependencies) our project needs to function.

### What is package.json?
The **package.json** file is the core configuration file (manifest) for any Node.js project. It holds metadata relevant to the project and handles the project's dependencies, scripts, and versions.
* **Dependencies:** It lists the packages installed in the project so that other developers can run `npm install` to download the exact same libraries.
* **Scripts:** It defines command shortcuts (like `npm run dev` or `npm run build`) to automate tasks like starting the server or building the app for production.
* **Metadata:** It contains the project name, version, author, and license information.

### What is Vite?
**Vite** (French for "quick") is a modern frontend build tool that significantly improves the frontend development experience.
* **Faster Development Server:** Unlike older tools (like Webpack) that bundle the entire application before starting, Vite uses native ES Modules to serve files on demand. This makes the server start almost instantly.
* **Hot Module Replacement (HMR):** Vite offers extremely fast HMR, meaning changes you make to the code are reflected in the browser instantly without a full page reload, regardless of how large the application grows.
*