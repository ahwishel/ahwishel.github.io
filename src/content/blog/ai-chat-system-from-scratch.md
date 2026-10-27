---
title: "How I built an AI chat system from scratch"
description: "Every chat inquiry at SellAnyCar used to go to a human agent. I built the system that changed that, and the daily loop that made it good enough to keep."
pubDate: 2026-08-10
tags: ["AI Agents", "LLM", "Production", "SellAnyCar"]
---

A year ago, every chat inquiry at SellAnyCar went to a human agent. Today, AI agents handle a real share of those conversations, and I built the system that does it.

## The brief

The goal was simple to state and hard to deliver. Customers write in across our chat channels, and the system should resolve their inquiries end to end, with a human only stepping in when the agent knows it is out of its depth.

## What I built

The architecture, the agent logic, and the integrations are all mine. The system routes each conversation through a model that fits the job, using OpenRouter for multi-model routing. A simple question does not burn a frontier model, and a hard one does not get answered by a small one.

On top of the routing sits the agent layer. Each agent gets a prompt built by a modular prompt service, so designing a new agent does not mean hand-writing a wall of text every time. That service alone increased how fast we could produce prompts for our agents by 50%.

## The part nobody talks about

The first versions were not good. Some agents handled things cleanly, others went in circles or gave wrong answers. That is normal, and it is not a reason to give up on the system. It is a reason to build a loop.

I tracked how often an agent had to escalate and I reviewed the conversations that went wrong. Every day I fixed what failed and redeployed. The escalation rate came down, and the share of inquiries resolving on their own went up. Success did not look like a demo. It looked like AI handling a real share of customer conversations, with quality that held up against human-led ones.

## What I'd tell my past self

Build the monitoring before you need it. The difference between a gimmick and a production system is knowing, on any given day, which conversations went badly and why. If you cannot answer that question, you cannot improve the agents, and you definitely cannot convince a business to scale them.
