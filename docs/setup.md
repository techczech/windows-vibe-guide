# Getting Started with AI-Powered Coding on Windows 🚀

Welcome! This guide will take you from zero to building and publishing your own websites—all by having a conversation with an AI.

No coding experience required. If you can chat, you can build.

---

## Why Antigravity?

**Antigravity** is a free coding tool from Google that lets you work with an AI "agent." Instead of writing code yourself, you describe what you want in plain English, and the agent does the work for you.

Why we chose it:
- **Free**: No subscription, no credit card.
- **Easy**: Works like a chat interface—just type what you want.
- **Powerful**: The agent can write code, run commands, organize files, open websites, and even deploy your projects to the internet.

Think of it as having a tireless assistant who knows how to code.

---

## Step 1: Download and Install Antigravity

1. Go to the [Antigravity website](https://antigravity.dev) and download the installer for Windows.
2. Run the installer and follow the prompts.
3. Once installed, open Antigravity. It looks like a code editor with a chat panel on the side.

---

## Step 2: Create Your First Project

1. Create a new folder somewhere on your computer (e.g., `C:\Users\YourName\my-first-project`).
2. In Antigravity, click **File → Open Folder** and select that folder.
3. Now you have a workspace. This is where the agent will create files for you.

---

## Step 3: Meet Your Agent

Look at the sidebar on the right. This is where you talk to the agent.

**What can the agent do?**
- Write and edit code files
- Create folders and organize your project
- Run terminal commands (build, test, deploy)
- Open a browser and interact with websites
- Install software and developer tools
- Push your code to GitHub
- Deploy your website to the internet

**How do you use it?**
Just type what you want. For example:
> *"Create a simple website with a dark theme and a welcome message."*

The agent will start working. You'll see it creating files, writing code, and sometimes running commands. When it's done, it will tell you how to preview your work.

---

## How This Website Was Built

The website you're reading right now was made entirely through conversation with an AI agent. Here's what happened:

1. **The user said:** "Create a documentation website for setting up Windows for AI coding."
2. **The agent:** Created a React project, designed a dark-themed interface, wrote all the documentation, and set up the build process.
3. **The user said:** "Deploy it to Cloudflare."
4. **The agent:** Configured the deployment, but hit some Windows-specific issues. It searched online for solutions, tried different approaches, and eventually guided the user to run the final command themselves.
5. **The user said:** "Create a GitHub repository."
6. **The agent:** Used the GitHub CLI to create a public repo and push all the code.

The entire process was a back-and-forth conversation. When the agent got stuck, the user just said, "Try something else" or "Search online for a solution." That's the workflow.

---

## What Else You Might Need

The agent can do most things for you, but some tools need to be installed first. Here's what you might need, depending on what you want to build:

### For Version Control and Backup (Git + GitHub)
If you want to save your work online, track changes, or collaborate with others, you'll need:
- **Git**: The version control system. The agent can often install this for you, or you can download it from [git-scm.com](https://git-scm.com).
- **GitHub Account**: Free. Sign up at [github.com](https://github.com).
- **GitHub CLI (`gh`)**: A command-line tool to interact with GitHub. Tell the agent: *"Install the GitHub CLI for me."*

### For Publishing Websites (Cloudflare + Wrangler)
If you want to put your website on the internet (like this one), you'll need:
- **Cloudflare Account**: Free. Sign up at [cloudflare.com](https://cloudflare.com).
- **Wrangler**: The tool that publishes to Cloudflare. Tell the agent: *"Install Wrangler for me."*

### For Some Projects (Developer Tools)
Some projects require additional tools like:
- **Node.js and npm**: For web projects. The agent can install these via Volta.
- **Python**: For data science or automation projects.

The good news: **The agent can usually install these for you.** Just ask it. If it can't, it will tell you what to do.

---

## When You Need the Terminal

Sometimes the agent will ask you to run a command in your "terminal." Here's what that means:

1. Open **Windows Terminal** (search for "Terminal" in the Start menu).
2. The agent will give you a command to copy and paste.
3. Press **Enter** to run it.

This usually happens for:
- Installing global tools
- Final deployment steps
- Fixing permission issues

The agent will explain why and tell you exactly what to type.

---

## Advanced: WSL (Windows Subsystem for Linux)

If you're on a Surface Pro or another ARM-based Windows device, some tools won't work natively. The solution is **WSL**, which gives you a Linux environment inside Windows.

To install it:
```powershell
wsl --install
```

Then you can run commands inside WSL by typing `wsl` in your terminal. The agent can guide you through this if needed.

**But remember:** Most of the time, you won't need this. The agent will let you know if and when it's necessary.

---

## The Golden Rule

**Just keep asking.**

If something doesn't work, tell the agent. If you don't understand something, ask. If you want something changed, describe it.

The agent is patient and tireless. It might make mistakes, but it will keep trying. You are the director; the agent is the executor.

If you can chat, you can build.
