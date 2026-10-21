# SapaSense

SapaSense helps Nigerian students make a realistic plan for the money already available to them. It is a forward-looking planner, not an expense tracker.

## Run locally

```bash
npm install
copy .env.example .env.local
npm run dev
```

Open `http://localhost:3000`. The calculator works without an AI model. For Gemma coaching, install Ollama, pull a compatible Gemma model, and start Ollama before clicking **Explain my plan**. If the model is unavailable, the app returns labelled rules-based tips.

## Checks

```bash
npm run typecheck
npm test
npm run build
```

## Privacy and limits

Plans stay in browser memory. The coaching request is sent only to the server route and, if configured, the local Ollama endpoint. SapaSense is not financial advice and does not record payments.

Original SapaSense code is licensed under Apache-2.0. Model weights are obtained separately and remain subject to their applicable license.
