# Deployment and review

This app needs a Node web service: React/Vite serves the website and Express serves `/api/chat`. A static-only host will not run chat.

## Run and verify locally

Use Node 22 LTS. Run:

```sh
npm ci
npm run lint
npm run build
npm test
npm start
```

Open http://localhost:3000. `npm start` always serves the production build. For development use `npm run dev`. The server honors `PORT` (default 3000). Optional local secrets belong in `.env.local`; never commit a key.

## Inquiries and Zoho Mail

`info@cisl.africa` is the existing Zoho mailbox. All inquiry forms prepare an email draft addressed to it. The visitor must open the draft and send it in their email app. The website cannot confirm delivery. It does not store submissions or offer an administrator inbox. Read and reply to incoming inquiries in Zoho.

Resource requests also prepare an email; no downloadable documents are included in this repository. Direct phone and WhatsApp are alternatives for visitors without a configured email app.

Automatic form-to-inbox delivery would require a server-side email integration (such as Zoho SMTP or an email API), credentials kept on the host, delivery error handling, and spam protection. It is not enabled by this change.

## Deploy on Render

1. Review and merge the fixes PR into `main`.
2. Sign in to https://dashboard.render.com and choose **New > Web Service**.
3. Connect GitHub and select `chukwumas/Clear-Impact-Services`.
4. Set these values:

| Setting | Value |
| --- | --- |
| Branch | `main` |
| Language | Node |
| Root directory | Leave empty |
| Build command | `npm ci --include=dev && npm run lint && npm run build && npm test` |
| Start command | `npm start` |
| Health check path | `/api/health` |
| Environment variable | `NODE_ENV=production` |

5. Choose the hosting plan after reviewing Render's current pricing. Free web services sleep after 15 minutes of inactivity; use an always-on paid instance if that delay is unsuitable for the client.
6. Deploy and first open the assigned `https://<service>.onrender.com` URL. Test navigation, mobile layout, inquiry drafts, WhatsApp, and `/api/health` before DNS changes.
7. Chat is optional. To enable it, add `GEMINI_API_KEY` as a secret in Render and redeploy. Never put it in a `VITE_` variable or GitHub. `GEMINI_MODEL` optionally overrides the default `gemini-3.1-flash-lite`. Without a key the site still starts; chat falls back to office contact details. A real API response needs a valid key and model access and was not tested without credentials. The app limits chat to 20 requests per minute per process; also set provider-side quotas appropriate for the client.

## Connect www.cisl.africa while preserving Zoho

1. In Render, open the service's **Settings > Custom Domains**, add **www.cisl.africa** and save. Render also adds `cisl.africa` and redirects it to `www`.
2. In Namecheap, open **Domain List > Manage > Advanced DNS**. First save a copy of the current DNS records. If Namecheap is not the authoritative DNS provider, edit records at the provider named by the existing nameservers instead. Do not switch nameservers just to deploy the website.
3. Preserve all Zoho MX records and email-related TXT/CNAME records, including SPF, DKIM, DMARC, and Zoho verification. Do not change Mail Settings or nameservers. If email uses an A record for a `mail` host, preserve that too.
4. Set the website host records as shown below. Replace the example service hostname with the exact hostname from your Render service (no `https://` and no path).

| Type | Host | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `216.24.57.1` | 1 minute or Automatic |
| CNAME | `www` | `<your-service>.onrender.com` | 1 minute or Automatic |

Replace conflicting website parking/redirect/A/CNAME records for `@` and `www`, and remove website AAAA records at those hosts, following Render's instructions. Preserve unrelated hosts and email records. If Zoho's MX target is unusually `cisl.africa` itself, resolve that mail dependency before changing the root A record.

5. Return to Render and click **Verify** for both domains. Allow DNS propagation and certificate issuance. Render manages HTTPS and redirects HTTP automatically.
6. Confirm `https://www.cisl.africa` loads, `https://cisl.africa` redirects to it, inquiry drafts target `info@cisl.africa`, and an independently sent email still reaches Zoho. Reply from Zoho to confirm outbound mail too.

## Before client handover

Confirm the published contact details, service prices, news, gallery images, and partnership/accreditation claims with the business owner. The repository contains marketing content that code checks cannot substantiate. Supply real resource documents before offering downloads.

## References

- Render Express deployment: https://render.com/docs/deploy-node-express-app
- Render custom domains and HTTPS: https://render.com/docs/custom-domains
- Render's Namecheap DNS guide: https://render.com/docs/configure-namecheap-dns
- Render free-service behavior: https://render.com/docs/free
