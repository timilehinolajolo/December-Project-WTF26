# ASSIGNMENT II - SUMMARY JS and React

## Assignment II - Contents
- [JavaScript & The DOM](#javascript--the-dom)
- [Why React?](#why-react)
- [The Virtual DOM (Speed)](#the-virtual-dom-speed)
- [Components](#components)
- [React Hooks Cheat Sheet](#react-hooks-cheat-sheet)

---

## JavaScript & The DOM
[span_0](start_span)At its core, making a webpage dynamic means manipulating HTML elements[span_0](end_span). [span_1](start_span)We do this through the **DOM (Document Object Model)**, which creates a tree-like map of the page that scripts can understand[span_1](end_span).

### How we target elements
[span_2](start_span)JavaScript can grab elements in a few ways[span_2](end_span):
* **[span_3](start_span)By ID:** Usually the preferred method because it's fast and targets a unique item[span_3](end_span).
* **[span_4](start_span)By Tag Name, Class Name, or CSS Selectors:** Useful, but these often return collections of elements that you have to handle individually[span_4](end_span).

**[span_5](start_span)The Document Object** The `document` object is the "root" of the webpage[span_5](end_span). [span_6](start_span)It gives JavaScript complete control to locate elements, change text, style things, or even delete/add content[span_6](end_span).

---

## Why React?
[span_7](start_span)React is a **JavaScript library** (not a framework) focused entirely on building User Interfaces[span_7](end_span). [span_8](start_span)Because it's a library, it doesn't force a strict structure on your whole app—you can mix it with other tools[span_8](end_span).

### The "Declarative" Approach
In standard JavaScript, you manually change the DOM step-by-step. [span_9](start_span)React is **declarative**, meaning you just describe what the UI should look like based on the current data[span_9](end_span).
* [span_10](start_span)The UI is driven by **State** (data that changes over time)[span_10](end_span).
* [span_11](start_span)[span_12](start_span)When you update the state, React automatically updates the display for you[span_11](end_span)[span_12](end_span).
* [span_13](start_span)[span_14](start_span)You don't worry about the manual DOM manipulation; you just focus on the final result[span_13](end_span)[span_14](end_span).

---

## The Virtual DOM (Speed) 🚀
[span_15](start_span)Directly changing the browser's actual DOM is slow and can hurt the user experience[span_15](end_span). [span_16](start_span)React solves this with the **Virtual DOM**[span_16](end_span).

1.  **[span_17](start_span)Memory Copy:** React keeps a lightweight copy of the UI in memory[span_17](end_span).
2.  **[span_18](start_span)Diffing:** When data changes, React compares the new data against the old data in this virtual copy[span_18](end_span).
3.  **[span_19](start_span)Reconciliation:** It calculates exactly what changed and only updates those specific parts in the real DOM[span_19](end_span).

[span_20](start_span)Without React, you might accidentally re-render large chunks of the page unnecessarily[span_20](end_span). [span_21](start_span)With React, everything else remains untouched[span_21](end_span).

---

## Components
[span_22](start_span)React apps are built out of **Components**, which are essentially reusable JavaScript functions[span_22](end_span).
* [span_23](start_span)They accept inputs called **Props** and output UI[span_23](end_span).
* [span_24](start_span)They manage their own internal **State**[span_24](end_span).
* [span_25](start_span)Smaller components are combined to build complex applications[span_25](end_span).

[span_26](start_span)The name "React" literally comes from the fact that these components *react* to data changes and update the view automatically[span_26](end_span).

---

## React Hooks Cheat Sheet
[span_27](start_span)Hooks allow function components to handle state, side effects, and performance optimization cleanly[span_27](end_span).

| Hook | What it does |
| :--- | :--- |
| **useState** | Adds memory to a component. [span_28](start_span)[span_29](start_span)It gives you a state variable and a "setter" function to update it[span_28](end_span)[span_29](end_span). |
| **useEffect** | Handles "side effects" like fetching data or DOM events. [span_30](start_span)It runs after renders, and you can control when it runs via a dependency array[span_30](end_span). |
| **useRef** | [span_31](start_span)Creates a reference to a value or DOM node that persists without triggering re-renders (great for focusing inputs)[span_31](end_span). |
| **useCallback** | [span_32](start_span)Boosts performance by caching functions so they aren't recreated on every single render[span_32](end_span). |
| **useMemo** | [span_33](start_span)Similar to useCallback, but it caches the *result* of an expensive calculation[span_33](end_span). |
| **useContext** | [span_34](start_span)Solves "prop drilling" by letting you share data (like themes or auth) globally without passing props down manually[span_34](end_span). |
| **useReducer** | [span_35](start_span)An alternative to useState for complex logic, managing updates through a reducer function[span_35](end_span). |



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
