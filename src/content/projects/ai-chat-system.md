---
title: "AI Chat System for Customer Inquiries"
description: "Built from scratch at SellAnyCar.com: an agentic system that handles customer inquiries across chat channels, with multi-model routing via OpenRouter."
year: "2025"
category: "AI / Agents"
featured: true
stack: ["Python", "OpenRouter", "LLM Agents", "Prompt Engineering", "Chat APIs", "WhatsApp"]
highlights:
  - "Replaced human-only chat support with AI agents handling inquiries end to end"
  - "Multi-model routing so each conversation uses the right model for the job"
  - "Daily monitoring loop to find failing conversations and fix them"
---

# AI Chat System for Customer Inquiries

While at SellAnyCar.com, I built the AI chat system that now handles customer inquiries across the chat channels. Until it shipped, every chat inquiry went to a human agent.

The system is mine end to end: the architecture, the agent logic, and the integrations. It routes conversations through multiple models on OpenRouter, so a simple question doesn't burn a frontier model and a hard one doesn't get answered by a small one.

The hard part was quality. Early versions went in circles or gave wrong answers, so I built a daily loop of reviewing escalated conversations, fixing the prompts and flows, and redeploying. Over time the escalation rate came down and most inquiries resolved without a human in the loop.
