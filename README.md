# ASSIGNMENT II - SUMMARY JS and React


## Assignment II - Contents
- [JavaScript & The DOM](#javascript--the-dom)
- [Why React?](#why-react)
- [The Virtual DOM (Speed)](#the-virtual-dom-speed)
- [Components](#components)
- [React Hooks Cheat Sheet](#react-hooks-cheat-sheet)

---

## JavaScript & The DOM
At its core, making a webpage dynamic means manipulating HTML elements. We do this through the **DOM (Document Object Model)**, which creates a tree-like map of the page that scripts can understand.

### How we target elements
JavaScript can grab elements in a few ways:
* **By ID:** Usually the preferred method because it's fast and targets a unique item.
* **By Tag Name, Class Name, or CSS Selectors:** Useful, but these often return collections of elements that you have to handle individually.

**The Document Object:** The `document` object is the "root" of the webpage. It gives JavaScript complete control to locate elements, change text, style things, or even delete/add content.

---

## Why React?
React is a **JavaScript library** (not a framework) focused entirely on building User Interfaces. Because it's a library, it doesn't force a strict structure on your whole app—you can mix it with other tools.

### The "Declarative" Approach
In standard JavaScript, you manually change the DOM step-by-step. React is **declarative**, meaning you just describe what the UI should look like based on the current data.
* The UI is driven by **State** (data that changes over time).
* When you update the state, React automatically updates the display for you.
* You don't worry about the manual DOM manipulation; you just focus on the final result.

---

## The Virtual DOM (Speed)
Directly changing the browser's actual DOM is slow and can hurt the user experience. React solves this with the **Virtual DOM**.

1.  **Memory Copy:** React keeps a lightweight copy of the UI in memory.
2.  **Diffing:** When data changes, React compares the new data against the old data in this virtual copy.
3.  **Reconciliation:** It calculates exactly what changed and only updates those specific parts in the real DOM.

Without React, you might accidentally re-render large chunks of the page unnecessarily. With React, everything else remains untouched.

---

## Components
React apps are built out of **Components**, which are essentially reusable JavaScript functions.
* They accept inputs called **Props** and output UI.
* They manage their own internal **State**.
* Smaller components are combined to build complex applications.

The name "React" literally comes from the fact that these components *react* to data changes and update the view automatically.

---

## React Hooks Cheat Sheet
Hooks allow function components to handle state, side effects, and performance optimization cleanly.

| Hook | What it does |
| :--- | :--- |
| **useState** | Adds memory to a component. It gives you a state variable and a "setter" function to update it. |
| **useEffect** | Handles "side effects" like fetching data or DOM events. It runs after renders, and you can control when it runs via a dependency array. |
| **useRef** | Creates a reference to a value or DOM node that persists without triggering re-renders (great for focusing inputs). |
| **useCallback** | Boosts performance by caching functions so they aren't recreated on every single render. |
| **useMemo** | Similar to useCallback, but it caches the *result* of an expensive calculation. |
| **useContext** | Solves "prop drilling" by letting you share data (like themes or auth) globally without passing props down manually. |
| **useReducer** | An alternative to useState for complex logic, managing updates through a reducer function. |

---



# ASSIGNMENT 1 - December Project Setup

## Project Overview
Using Vite to set up using React which is the foundation for this December Project.

### What is NPM?
**NPM (Node Package Manager)** stands for Node Package Manager and it is the default package manager for the JavaScript runtime environment Node.js. It serves two main purposes:
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
