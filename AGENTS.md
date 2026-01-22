# AGENTS.md

This is a guide and website documenting how to use AI coding agents on Windows for non-developers.

## Project Overview
- **Purpose**: Help non-technical users build and deploy websites using AI agents on Windows
- **Target Audience**: Non-developers, researchers, data scientists who want to use AI for coding
- **Tech Stack**: Vite + React, Markdown documentation, Cloudflare Pages deployment

## Build and Test Commands
```powershell
# Website development
cd website
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:5173)
npm run build       # Build for production (output: dist/)

# Documentation is in /docs and copied to website/public/docs
```

## Deployment
- **WSL Required for Wrangler on ARM Windows**: Use `wsl -e bash -c "cd ~/vibe-deploy && npx wrangler pages deploy ./dist"`
- **Repository**: https://github.com/techczech/windows-vibe-guide

## Code Style
- Use vanilla CSS (no Tailwind unless requested)
- Premium dark-mode design with glassmorphism
- Icons from lucide-react
- Markdown files should be accessible and jargon-free for non-developers

## Documentation Guidelines
- **Tone**: Conversational, encouraging, non-condescending
- **Audience**: People with zero coding experience
- **Philosophy**: "If you can chat, you can build"
- **Key Principle**: Emphasize the partnership between human (director) and AI (executor)

## Common Pitfalls on Windows
1. **File Locks (EPERM)**: npm install often fails due to Windows Defender. Solution: WSL or retry with delays
2. **ARM64 Support**: Wrangler doesn't work natively on Windows ARM. Must use WSL.
3. **Path Issues**: Always use forward slashes in code, backslashes in PowerShell commands

## Testing Instructions
- Verify all documentation renders correctly in the website (`npm run dev`)
- Test that all navigation links work
- Ensure GitHub repo link is correct
- Build should complete without errors

## When Adding New Documentation
1. Create .md file in `/docs`
2. Copy to `website/public/docs/`
3. Add entry to `docs` array in `website/src/App.jsx`
4. Import any new icons from lucide-react
5. Rebuild and redeploy
