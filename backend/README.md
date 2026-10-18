# Ladd_r AI backend (not deployed)

The live GitHub Pages build currently provides an **offline interactive product demonstration**, not verified job recommendations or real user signup. This Cloudflare Worker is a reference backend for connecting OpenAI's Responses API with web_search for job discovery and model-assisted résumé/cover-letter drafting.

## Configuration
Create Supabase Auth, a Cloudflare Worker, and a Cloudflare KV namespace bound as RATE_KV.

Secrets: OPENAI_API_KEY, SUPABASE_ANON_KEY (public anon key but still set in Worker config), SUPABASE_URL, OPENAI_MODEL (optional), FRONTEND_ORIGIN=https://anthonylucio.github.io.

The Worker validates Supabase bearer tokens and limits individual beta users to eight calls/day. Do not deploy without further abuse protection, billing entitlements, source verification, and a privacy/security review.

POST /api/search body: { resume, role, location, arrangement, min_salary }
POST /api/packet body: { resume, job_title, company, job_description }

Web search is not a substitute for a licensed job database or guaranteed posting availability. Always verify employer apply URLs, dates and remote eligibility before recommending a specific opening. No OpenAI key belongs in public frontend source.
