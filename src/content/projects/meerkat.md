---
title: "Meerkat — WhatsApp Business Platform"
description: "A WhatsApp messaging platform built with Laravel 13 and Laravel Sail, containerized with Postgres 16, Redis, Horizon, and Mailpit."
year: "2026"
category: "Platform"
featured: true
stack: ["Laravel", "PHP", "PostgreSQL", "Redis", "Horizon", "Docker", "Sail"]
highlights:
  - "Containerized end to end with Laravel Sail, Postgres 16, Redis and Horizon"
  - "Queue-driven architecture with Horizon workers"
  - "18-test suite with a clean health endpoint"
---

# Meerkat — WhatsApp Business Platform

Meerkat is a WhatsApp business messaging platform I built with Laravel 13. It manages conversations, contacts, and campaign messaging, with a queue-driven architecture running on Laravel Horizon.

I containerized the whole backend with Laravel Sail, which meant getting Postgres 16, Redis, Horizon, and Mailpit all working together in compose, and doing it without losing the existing database volume. That migration taught me the Sail-specific gotchas, like the WWWUSER and WWWGROUP environment variables the sail script exports, and why a bare docker compose build fails without them.

The app runs an 18-test suite and exposes a health endpoint that checks the database and Redis, so the stack can be verified end to end with one command.
