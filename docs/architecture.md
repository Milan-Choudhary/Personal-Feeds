# Architecture

This document describes the architecture of the AI Content Platform monorepo.

## Overview

- `frontend/` - React application built with Vite.
- `backend/` - Node + Express API with MongoDB integration.
- `ai-engine/` - AI logic, prompt generation, summarization, and recommendation scaffolding.
- `shared/` - Shared utilities between packages.

## Data Flow

1. User interacts with the frontend.
2. Frontend requests content from backend APIs.
3. Backend accesses the database and AI engine for content generation and personalization.
4. AI engine generates articles, summaries, and recommendations.
