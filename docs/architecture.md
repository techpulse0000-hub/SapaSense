# Architecture

The browser owns editable plan state and runs the same pure `calculateBudget` function used by the server. All money is integer kobo. `POST /api/coach` validates the raw plan with Zod, recalculates it, then attempts a server-only Ollama request. A timeout, unavailable model, or invalid model response returns labelled rule-generated tips while leaving the calculations usable.

The endpoint accepts only budget objects, limits expense rows to 20, limits request length, sends `Cache-Control: no-store`, and never accepts a user-supplied inference URL.
