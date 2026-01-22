# How Webapps Run on Your Computer 🖥️

Before you can build websites, it helps to understand how they actually work. Don't worry—this is simpler than it sounds.

---

## What is a Web Browser, Really?

A web browser (Chrome, Firefox, Edge) is just a **viewer for HTML files**.

That's it. When you visit a website:
1. Your browser asks a server: "Give me your HTML file"
2. The server sends the HTML (plus CSS for styling, JavaScript for interactivity)
3. Your browser displays it

The key insight: **The server can be anywhere**—including your own computer. Or you can skip the server entirely for simple apps.

---

## The Simplest Web App: Just an HTML File

You can build a simple web app with just a text file. Here's how:

1. Create a file called `counter.html`
2. Put some HTML and JavaScript in it
3. Double-click the file
4. It opens in your browser—no server needed!

This works for simple things like:
- A word counter
- A calculator
- A to-do list
- A simple form

The browser opens the file directly from your computer. No internet, no server, no setup.

**Ask the agent:** *"Create a simple word counter app as a single HTML file"*

It will create a file you can double-click to use.

### When Simple HTML Isn't Enough

The double-click approach breaks down when you need:
- Multiple pages that share data
- Complex state management
- Fetching data from the internet
- Large applications with many features

For anything beyond a simple tool, you'll want something more powerful.

---

## React: Building Real Applications

**React** is one of the best ways to build applications that run in a browser.

You don't need to know what React is or how it works. Just know:
- It's used by Facebook, Instagram, Airbnb, Netflix, and millions of other sites
- It's designed for building complex, interactive applications
- Antigravity is excellent at writing React code for you

When you ask Antigravity to build a website, it will often use React because:
- The code is organized and maintainable
- The app can grow without becoming a mess
- Changes are easy to make
- It handles complexity well

Just describe what you want:
> *"Build an app that lets me upload a CSV file and shows a chart of the data"*

The agent will create a React application. You don't need to understand the code—you just use the result.

---

## What is Localhost?

**Localhost** means "this computer." When you see `http://localhost:5173`, it means:
- `http://` — Use the web protocol
- `localhost` — Talk to this same computer
- `:5173` — On port 5173 (like a specific door number)

Your computer becomes both the server (sending files) and the client (viewing them).

This is how developers test websites before putting them on the internet.

---

## What is Node.js?

**Node.js** is a program that lets your computer run JavaScript outside of a browser.

Why does that matter?

1. **It powers your local server.** When you run a development server, Node.js makes it work.
2. **It processes your code.** Modern websites use tools that transform your code before the browser sees it.
3. **It manages packages.** Node.js comes with `npm` (Node Package Manager), which downloads and manages code libraries.

Think of Node.js as the engine that makes everything work behind the scenes.

### How to Install Node.js

Ask the agent:
> *"Install Node.js for me using Volta"*

Or install Volta manually, then run:
```powershell
volta install node
```

---

## Simple vs. Complex: When Do You Need What?

| What You Want | What You Need |
|--------------|---------------|
| Word counter | Single HTML file (double-click) |
| Calculator | Single HTML file |
| Personal blog | React + Node.js + local server |
| Data dashboard | React + Node.js + local server |
| E-commerce site | React + Node.js + database + hosting |

The agent will choose the right approach based on what you ask for.

---

## How It All Fits Together

For React applications, here's what happens:

```
Your Request → Agent writes React code → Node.js runs the server → Browser displays the app
```

1. **You describe what you want**
2. **The agent writes the code**
3. **Node.js starts a development server** at localhost
4. **Your browser shows the app**
5. **Changes appear automatically** (hot reloading)

---

## What Antigravity Does for You

The great news: **Antigravity handles all of this automatically.**

When you say *"Create a website"*, it:
1. Chooses the right approach (simple HTML or React)
2. Sets up the project
3. Installs required packages
4. Starts the server (if needed)
5. Opens your browser

When you say *"Make the header blue"*, it:
1. Finds the right file
2. Changes the code
3. Saves it
4. Your browser refreshes automatically

You never have to think about the technical details unless something goes wrong.

---

## Common Scenarios

### Building a Simple Tool
> *"Create a word counter as a single HTML file"*

You'll get a file you can double-click.

### Building a Real App
> *"Create a note-taking app with search"*

You'll get a React project with a development server.

### Running an Existing Project
> *"Install the dependencies and run the development server"*

The agent will run `npm install` and `npm run dev`.

### Deploying
> *"Deploy to Cloudflare Pages"*

The agent will push your app to the internet.

---

## Summary

- **Browser**: Displays HTML files (either from a server or locally)
- **Simple apps**: Just an HTML file you can double-click
- **Complex apps**: Use React, which needs Node.js and localhost
- **Localhost**: Your computer acting as a server
- **Node.js**: The engine that runs your development environment
- **Antigravity**: Handles all of this for you—just describe what you want

---

*Last updated: January 22, 2026*
