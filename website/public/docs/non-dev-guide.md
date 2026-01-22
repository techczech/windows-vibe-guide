# The Non-Developer's Guide to AI Web Building on Windows 🤖✨

**Welcome!** This guide is designed for anyone who wants to build, publish, and share websites on Windows using AI, *without* needing to understand complex code or terminal commands.

If you can chat, you can build.

---

## 🛑 The "Secret" Strategy: Persistence & Partnership

Building with AI isn't magic; it's a partnership. Throughout this project, we learned that the AI (Antigravity) is powerful but can get stuck on Windows-specific issues.

**Your Role:**
1.  **Don't Give Up:** If the AI tries a command and it fails, simply tell it "That didn't work, try something else."
2.  **Use Search:** Often, the AI needs a nudge. Asking it to "search online for a solution" is a superpower.
3.  **Switch Models:** If one AI "brain" feels stuck, try switching options (like moving from one model to another in your settings) to get a fresh perspective.
4.  **Read the Logs:** You don't need to understand them. Just copy the error message you see and paste it back to the AI.

---

## 🛠️ The One-Time Setup (Do This First)

To let the AI build for you on Windows, you need four tools. You only need to install these once.

### 1. The "Magic Manager" (Volta)
Windows handles files differently than other computers, which often confuses coding tools. **Volta** fixes this.

*   **Download:** Go to [volta.sh](https://volta.sh/) and download the Windows installer.
*   **Install:** Run the file and click "Next" until it's done.

### 2. The "Brain" (Node.js)
This is the engine that runs the code the AI writes.

*   **The Command:** Open your computer's **Terminal** (search for "Terminal" in your Start menu) and run:
    ```powershell
    volta install node@22
    ```

### 3. The "Publisher" (Wrangler)
This tool sends your website to the internet (Cloudflare).

*   **The Command:** In the same Terminal, run:
    ```powershell
    volta install wrangler
    ```

### 4. The "Sharer" (GitHub CLI)
This lets you share your code with the world without clicking through complex websites.

*   **Install:** In the same Terminal, run:
    ```powershell
    winget install GitHub.cli
    ```
*   **Authenticate:** After installing, restart your terminal and run:
    ```powershell
    gh auth login
    ```
    *   Select **GitHub.com** -> **HTTPS** -> **Yes** -> **Login with a web browser**.
    *   Copy the one-time code it shows you.
    *   Press **Enter** to open the browser, paste the code, and click **Authorize**.

---

## ⚡ Pro Mode: Use WSL (Recommended)

If you have a Surface Pro X or any **ARM-based Windows laptop**, or just want the smoothest experience, use **WSL (Windows Subsystem for Linux)**.

1.  Open Terminal and run: `wsl --install`
2.  This gives you a "Linux brain" inside Windows, which is what most AI tools prefer.
3.  All the commands below work even better inside the WSL terminal.

---

## 🚀 How to Build, Share & Publish (The "Vibe" Workflow)

Now you are ready. Here is the exact loop we used to build this site:

### Step 1: Start the Agent
Open your AI coding tool (VS Code with Antigravity).

### Step 2: Speak in Plain English
Tell the agent what you want.
> *Example: "Make a portfolio website for my photography. Use a dark theme with blue accents."*

### Step 3: Let It Work (and Watch)
The agent will write code. It might try to run commands.
*   **If it works:** Great! You'll see green checkmarks.
*   **If it fails:** It's common on Windows. The agent might say "EPERM" or "File Locked."
    *   **Your Move:** Tell it: *"I see a file lock error. Please give me the command to run in my own terminal."*

### Step 4: Share Your Code (GitHub)
When your project is ready, you don't need to go to github.com. Just use the agent or the terminal:
```powershell
gh repo create my-website --public --source=. --remote=origin --push
```
*   *This one command creates the online folder, links it, and uploads your code.*

### Step 5: Publish to the World (Cloudflare)
When you want to go live, tell the agent: *"I want to publish this to Cloudflare."*

On Windows, the agent usually cannot publish it alone because of security permissions. **You have to be the closer.**

1.  Open your **Terminal** (drag the folder of your website into the terminal window).
2.  Run this "Magic Command":
    ```powershell
    npx wrangler pages deploy ./dist
    ```
3.  A browser window will open. Click "Allow" to log in to Cloudflare.
4.  **Done!** Your site is now live on the internet.

---

## 💡 Troubleshooting Cheat Sheet

*   **Error: "File Locked" or "EPERM"**
    *   *Solution:* This means Windows Defender or another program is holding onto a file. Close any other VS Code windows and try again.
*   **Error: "Command not found"**
    *   *Solution:* You might need to restart your computer after installing Volta or GitHub CLI.
*   **Agent gets stuck looping?**
    *   *Solution:* Tell it: *"Stop everything. Search online for this specific error message."* or switch the model you are using.

---

**Remember:** You are the Director. The AI is the Cameraman. If the shot is blurry, you don't grab the camera—you just tell them to focus.
