# Migrating from Google AI Studio to Your Computer 🚀

Google AI Studio is a great place to prototype AI-powered apps. But at some point, you'll want to:
- Run your app on your own computer
- Make deeper customizations
- Deploy it to the internet for others to use

This guide shows you how to take your AI Studio project and continue developing it locally with Antigravity.

---

## The Key Difference

**Google AI Studio**: Has a built-in preview. You can see your app running right in the browser.

**Antigravity**: No built-in preview. Instead, it runs your app on **localhost**—a local server on your computer. You view it in your regular browser. This is more powerful because:
- You can use any browser
- You can test on your phone (if on the same network)
- You have full control over the environment

---

## Step 1: Create Your Prototype in Google AI Studio

Build your app in [Google AI Studio](https://aistudio.google.com). Get it working the way you want. This is your playground—experiment freely.

When you're happy with it, move to the next step.

---

## Step 2: Download the Code

In Google AI Studio, look for the **Download** button. Your project will download as a single `.zip` file containing all the code.

Save this file somewhere you can find it (like your Downloads folder).

---

## Step 3: Unzip to a Folder

1. Find the downloaded `.zip` file
2. Right-click and select **Extract All** (on Windows)
3. Choose a location, like `C:\Users\YourName\my-ai-app`
4. Click **Extract**

You now have a folder with all your project files.

---

## Step 4: Open the Folder in Antigravity

1. Open Antigravity
2. Go to **File → Open Folder**
3. Navigate to your extracted folder and select it
4. Your project is now loaded in Antigravity

You'll see all the files from your AI Studio project in the file explorer on the left.

---

## Step 5: Ask Antigravity to Help You Run It

This is where the magic happens. Just ask the agent:

> *"Help me run this project locally"*

The agent will:
1. Look at your project structure
2. Install any required dependencies (like Node.js packages)
3. Start a local development server
4. Tell you the URL to open in your browser (usually `http://localhost:5173` or similar)

### If Node.js Isn't Installed

The agent might say something like "Node.js is not installed." Just reply:

> *"Install Node.js for me"*

It will guide you through installing Node.js (often using Volta for clean management).

---

## Step 6: Make Changes

Now comes the fun part. You can ask the agent to modify your app:

- *"Change the background color to dark blue"*
- *"Add a button that clears the conversation"*
- *"Make the text larger"*
- *"Add a loading spinner while waiting for the AI response"*

The agent will edit the code. Your local server will usually **hot-reload**—meaning changes appear in your browser almost instantly without restarting.

---

## Step 7: Deploy to Cloudflare

When you're ready to share your app with the world:

> *"Deploy this to Cloudflare Pages"*

The agent will:
1. Build your project for production
2. Guide you through Cloudflare authentication (if needed)
3. Deploy your app to a public URL

If you're on ARM Windows (like a Surface Pro), you may need to use WSL for the deployment step. The agent will guide you.

---

## What You Gain by Going Local

| Google AI Studio | Local Development |
|-----------------|-------------------|
| Quick prototyping | Full customization |
| Limited to browser | Works offline |
| Google's servers | Your computer |
| Preview built-in | localhost (more flexible) |
| Can't deploy | Deploy anywhere |
| Limited file access | Full file system access |

---

## Troubleshooting

### "I don't see a preview"
That's normal. Antigravity doesn't have a built-in preview like AI Studio. Instead, open `http://localhost:XXXX` in your browser (the agent will tell you the exact URL).

### "The server won't start"
Ask the agent: *"Why won't the server start? Check for errors."*

### "I get a permission error"
This is common on Windows. Ask the agent: *"I'm getting a permission error. What should I do?"* It may suggest running a command in your terminal or using WSL.

### "My changes don't appear"
Try refreshing your browser. If that doesn't work, ask: *"Restart the development server."*

---

## Summary

1. **Prototype** in Google AI Studio
2. **Download** the zip file
3. **Unzip** to a folder
4. **Open** in Antigravity
5. **Ask** the agent to run it locally
6. **Modify** by talking to the agent
7. **Deploy** to Cloudflare (or wherever you want)

You've just leveled up from prototyping to real development—all by chatting.

---

*Last updated: January 22, 2026*
