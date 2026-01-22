# Getting Started with AI-Powered Coding on Windows 🚀

Welcome! This guide will take you from zero to building and publishing your own websites—all by having a conversation with an AI.

No coding experience required. If you can chat, you can build.

---

## What is Antigravity?

**Antigravity** is an agentic AI coding tool from Google. Its tagline is "Build the new way."

Unlike simple code assistants that just suggest code, Antigravity is an **agent** that can take actions on your behalf:

- Write and edit code files
- Run terminal commands
- Open websites and interact with them
- Install software and tools
- Deploy websites to the internet
- Create and manage GitHub repositories

You talk to it in plain English, and it does the work.

---

## Step 1: Download Antigravity

Go to the official download page:

**[https://antigravity.google/download](https://antigravity.google/download)**

Follow the installation instructions for Windows. Once installed, you'll have access to the Antigravity interface with a chat sidebar where you can give commands to the agent.

---

## Step 2: Create Your First Project

1. Create a new folder somewhere on your computer (e.g., `C:\Users\YourName\my-first-project`).
2. Open this folder in Antigravity.
3. Now you have a workspace. This is where the agent will create files for you.

---

## Step 3: Start Talking to the Agent

Just type what you want. For example:
> *"Create a simple website with a dark theme and a welcome message."*

The agent will start working. You'll see it creating files, writing code, and sometimes running commands. When it's done, it will tell you how to preview your work.

**What can you ask it to do?**
- "Make a portfolio website for my photography"
- "Install Git for me"
- "Create a GitHub repository and push my code"
- "Deploy this website to Cloudflare"
- "Search online for how to fix this error"

---

## How This Website Was Built

The website you're reading right now was made entirely through conversation with an AI agent. Here's the actual workflow:

1. **User:** "Create a documentation website for setting up Windows for AI coding."
2. **Agent:** Created a React project, designed a dark-themed interface, wrote all the documentation.
3. **User:** "Deploy it to Cloudflare."
4. **Agent:** Hit Windows-specific issues (file locks). Searched online for solutions. Guided the user through using WSL.
5. **User:** "Create a GitHub repository."
6. **Agent:** Installed GitHub CLI, authenticated, created a public repo, pushed the code.

When the agent got stuck, the user said "Try something else" or "Search online for a solution." That's the workflow.

---

## Tools You Might Need

The agent can install most things for you. Just ask. But here's what you might need:

### For Version Control and Backup
- **Git**: [git-scm.com](https://git-scm.com) — Track changes to your files
- **GitHub Account**: [github.com](https://github.com) (free) — Store your code online
- **GitHub CLI**: Ask the agent to install it, or run `winget install GitHub.cli`

### For Publishing Websites
- **Cloudflare Account**: [cloudflare.com](https://www.cloudflare.com) (free) — Host your website
- **Wrangler**: Ask the agent to install it — The tool that deploys to Cloudflare

### For Web Development
- **Node.js**: The agent can install this for you via Volta
- **Volta**: Manages Node.js versions cleanly

---

## When You Need the Terminal

Sometimes the agent will ask you to run a command yourself. Here's how:

1. Open **Windows Terminal** (search "Terminal" in Start menu)
2. Copy the command the agent gives you
3. Paste it and press **Enter**

This happens for:
- Installing global tools
- Final deployment steps
- Permission issues the agent can't bypass

---

## Advanced: WSL for ARM Windows

If you're on a Surface Pro or ARM-based Windows device, some tools (like Wrangler) don't work natively. The solution:

```powershell
wsl --install
```

This installs a Linux environment inside Windows. The agent will guide you if you need this.

---

## The Golden Rule

**Just keep asking.**

- If something fails, tell the agent
- If you don't understand, ask for an explanation
- If you want it different, describe what you want
- If the agent is stuck, say "search online for a solution"

The agent is patient. It will keep trying. You are the director; the agent executes.

If you can chat, you can build.

---

*Last updated: January 22, 2026*
