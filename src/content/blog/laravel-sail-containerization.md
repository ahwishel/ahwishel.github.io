---
title: "Containerizing a Laravel app with Sail, the honest version"
description: "Postgres 16, Redis, Horizon, and Mailpit in one compose file, without losing a database volume. The Sail gotchas I hit so you don't have to."
pubDate: 2026-06-18
tags: ["Laravel", "Docker", "Sail", "DevOps"]
---

I containerized the Meerkat backend, a Laravel app, with Laravel Sail, and it took longer than it should have. The official docs are fine. The gaps are in the details, and one of them nearly cost me a database volume.

## Use the sail script, not docker compose

The first thing that bit me was running `docker compose build` directly. It failed at the `groupadd` step because `$WWWGROUP` was empty. The sail script exports `WWWUSER` and `WWWGROUP` from your local user automatically, and the Dockerfile needs both. Use `./vendor/bin/sail build`, and the values are there. It looks like a convenience wrapper. It is actually part of the build contract.

## Check your volume before you switch images

The scariest part of the whole migration was whether a `postgres:16-alpine` image could open the existing volume created by the Debian-based `postgres:16`. I started just the database service first, pointed it at the old volume, and checked the table count before touching anything else. It came up clean with all the data intact. The collation warning was benign, normal when switching image variants.

## The hostname trap

Inside compose, services resolve each other by name. `REDIS_HOST=redis` works in the container and nowhere else. If you ever run the app on the host for debugging, it will connect to whatever publishes localhost:6379, which may not be your Redis at all. I traced a mystery traffic flood this way. It was host-side Horizon processes connected to a completely different project's Redis.

## Verify the whole stack, not just the app

The meaningful checks for a containerized Laravel app are the test suite and a live boot. I wrote a checklist that confirms every container is up, a health endpoint returns 200 with the database and Redis passing, migrations are all run, and the test suite passes. That checklist is what tells you the migration actually worked, instead of assuming it did.
