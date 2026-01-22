# AGENTS.md

A guide for AI coding agents working on this project.

## Project Overview
- **Purpose**: Help non-technical users build and deploy websites using AI agents on Windows
- **Target Audience**: Non-developers, researchers, data scientists
- **Philosophy**: "If you can chat, you can build"
- **Tech Stack**: Vite + React, Markdown documentation, Cloudflare Pages

## Build Commands
```bash
cd website
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production (output: dist/)
```

## Deployment
- Cloudflare Pages via Wrangler
- On ARM Windows, Wrangler requires WSL
- Production deployment: `wsl -e bash -c "cd ~/vibe-deploy && cp -r /mnt/c/.../website/dist . && npx wrangler pages deploy ./dist"`

## Repository
- GitHub: https://github.com/techczech/windows-vibe-guide

## Documentation Structure
- `/docs/` - Markdown source files
- `/website/public/docs/` - Copies for web (keep in sync)
- `/website/src/App.jsx` - Navigation config

## Code Style
- Vanilla CSS (dark theme, glassmorphism)
- Icons: lucide-react
- Documentation: conversational, encouraging, no jargon

## Adding New Documentation
1. Create .md in `/docs`
2. Copy to `/website/public/docs/`
3. Add to `docs` array in `App.jsx`
4. Rebuild and redeploy

## Common Windows Issues
1. **EPERM/File Locks**: Retry or use WSL
2. **ARM64**: Must use WSL for Wrangler
3. **Path issues**: Forward slashes in code, backslashes in PowerShell

## Agent Behavior Guidelines
- Always explain what you're doing in plain language
- If a command fails, try alternatives or search online
- Remind users they can ask you to install tools for them
- Guide users through terminal steps when necessary
- Be patient with non-technical users

---

## For Users

You can download this file and place it in your project folder. It helps AI agents understand your project and work more effectively.

**To use it:**
1. Save this file as `AGENTS.md` in your project's root folder.
2. Start chatting with the agent—it will read this file automatically.
3. Customize it with your own project's build commands and preferences.
