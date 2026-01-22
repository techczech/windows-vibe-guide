# Powering Your Webapps with AI 🧠

Building a website *with* AI is one thing. Building a website that *uses* AI is another.

Imagine a "smart to-do list" that automatically organizes tasks, or a "poem generator" that writes poetry for you. You can build these by connecting your webapp to an AI model.

---

## The Easiest Way: Google AI Studio API

To give your website an AI brain, you need an **API Key**. This is like a password that lets your website talk to advanced models like Gemini.

1. **Go to [Google AI Studio](https://aistudio.google.com)**
2. **Get an API Key** (it's often free for basic use)
3. **Ask Antigravity**: *"Build a simple app that uses my Google API key to summarize text"*

**Warning on Cost**: While many keys start free, if your site goes viral or you use it heavily, you may need to pay. Always check the pricing limits.

---

## How It Works

It's a conversation between computers:

1. **User types** something in your app ("Summarize this article...")
2. **Your App sends** it to Google's servers (using the Key)
3. **Google's AI thinks** and sends back the answer
4. **Your App displays** the answer

Antigravity can write all the code to make this happen.

---

## Complexity & Risks

Asking an agent to "add AI features" is powerful, but tricky.

### 1. Outdated Information
AI models change fast. The agent building your site might know about "Gemini 1.5" but not the brand new "Gemini 2.0 Flash."
* **Solution**: You might need to paste the latest documentation into the chat so the agent learns the new way.

### 2. Testing is Critical
AI isn't perfect. Your "smart to-do list" might hallucinate a task you never added.
* **Advice**: Carefully test everything yourself. Don't assume it works just because the code runs.

### 3. Security
**NEVER put your API key directly in your frontend code.** If you do, anyone visiting your site can steal it and use your quota.
* **Solution**: Ask the agent: *"How do I securely hide my API key using environment variables (.env)?"*

---

## Antigravity's AI vs. Your Webapp's AI

It's important to distinguish between the two:

| **Antigravity's AI** | **Your Webapp's AI** |
|----------------------|----------------------|
| Runs inside your editor | Runs inside your website |
| Can edit files, run commands | Can answer user questions, generate text |
| Powers the *building* process | Powers the *user experience* |
| Has access to your computer | Should NOT have access to your computer |

Antigravity is the builder. The Google AI Studio API is the engine you put inside the car it builds.

---

## Getting Started Safely

1. **Get a Key**: Get a free API key from Google AI Studio.
2. **Start Local**: Build a simple prototype running on `localhost`.
3. **Ask the Agent**: *"Create a React app that uses the Gemini API. I have a key."*
4. **Learn More**: Before you publish to the world, read about "API security" and "rate limits."

Adding AI to your apps transforms them from static pages into intelligent tools. Just proceed with care.

---

*Last updated: January 22, 2026*
