# Working with AI Agents: Best Practices 🚀

This guide covers how to get the best results when working with AI coding agents like Antigravity.

---

## The Core Workflow

### 1. Describe What You Want
Be clear about your goal. You don't need technical language—plain English works great.

**Good prompts:**
- "Create a website that shows weather forecasts"
- "Add a dark mode toggle to the header"
- "Fix the error I'm seeing in the terminal"

**Less effective prompts:**
- "Make it better" (too vague)
- "Do the thing" (what thing?)

### 2. Let the Agent Work
The agent will:
- Create and edit files
- Run commands
- Install dependencies
- Start servers

Watch what it's doing. You'll learn from seeing the process.

![Example of adding a feature with Antigravity](/images/toc-feature-example.png)

### 3. Test and Verify
After major changes:
- Check your browser (refresh if needed)
- Look for errors in the terminal
- Make sure things work as expected

### 4. Iterate
If something isn't right:
- Describe what's wrong
- Ask for changes
- Be specific about what you want different

---

## When Things Go Wrong

### The Agent Gets Stuck
Say: *"Try a different approach"* or *"Search online for a solution"*

### Commands Fail on Windows
Windows often has permission issues. Common solutions:
- Close other programs using the files
- Run the command in your own terminal
- Use WSL for deployment (especially on ARM devices)

### The Agent Makes Mistakes
It happens. AI models sometimes:
- Hallucinate URLs that don't exist
- Use outdated information
- Make incorrect assumptions

**Your response:** Correct them. Say *"That URL doesn't exist, look up the correct one"* or *"That's not right, try again."*

### You're Not Sure What Happened
Ask: *"What did you just do?"* or *"Explain what that command does."*

---

## Tips for Better Results

### Be the Director
You don't write the code—you direct the work. Think of yourself as a film director: you describe the shot, the cinematographer operates the camera.

**Remember:** If the shot is blurry, you don't grab the camera—you tell them to focus.

### Start Simple, Then Expand
Begin with a basic version, then add features one at a time.

1. "Create a simple to-do list app"
2. "Add the ability to mark items as complete"
3. "Add a search box to filter items"
4. "Make it save to local storage so it persists"

### Use Search When Needed
If the agent doesn't know something current, ask it to search:
- *"Search online for how to deploy to Cloudflare in 2026"*
- *"Look up the current syntax for that command"*

### Switch Models If Stuck
Different AI models have different strengths. If one model keeps failing at a task, try switching to another in your settings. A fresh perspective often helps.

---

## Common Tasks

### Starting a New Project
> *"Create a React website with a dark theme and a welcome page"*

### Running a Local Server
> *"Start the development server"*

The agent will run `npm run dev` or equivalent and tell you the localhost URL.

### Making Changes
> *"Change the header color to blue"*
> *"Add a footer with my name"*
> *"Make the text larger on mobile"*

### Deploying
> *"Deploy this to Cloudflare Pages"*

On ARM Windows, you may need to use WSL. The agent will guide you.

### Saving to GitHub
> *"Create a GitHub repository and push this code"*

The agent will use `gh` (GitHub CLI) to create and push.

---

## The Golden Rules

1. **Just keep asking.** The agent is patient and tireless.
2. **Be specific.** Clear prompts get better results.
3. **Verify results.** Check that things work after changes.
4. **Correct mistakes.** The agent learns from your feedback.
5. **Use search.** When the agent doesn't know, ask it to look it up.

You are the director. The AI executes. Together, you can build anything.

---

*Last updated: January 22, 2026*
