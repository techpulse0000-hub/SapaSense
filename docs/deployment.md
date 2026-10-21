# Deployment notes

Do not expose Ollama directly to the internet. A cloud Next.js deployment cannot reach Ollama running on a developer laptop at `localhost`. For public use, use an authenticated inference service or host the application and Ollama together behind the application, add persistent rate limits, and document data handling.
