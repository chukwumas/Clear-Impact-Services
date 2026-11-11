/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config({ path: ['.env.local', '.env'] });

const app = express();
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production');
if (isProduction) app.set('env', 'production');
const PORT = Number(process.env.PORT || 3000);

// Initialize Gemini Client
const ai = process.env.GEMINI_API_KEY ? new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    timeout: 20_000,
    headers: {
      'User-Agent': 'clear-impact-support',
    }
  }
}) : null;

app.disable('x-powered-by');
app.use(express.json({ limit: '32kb' }));
app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

// Bound paid API usage per process, including requests already in flight.
let chatRequests = 0;
const chatBudget = setInterval(() => { chatRequests = 0; }, 60_000);
chatBudget.unref();

// API route for live chat (Low-Latency Gemini-powered Support Agent)
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body || {};
    if (!Array.isArray(messages) || messages.length === 0 || messages.length > 30 ||
        messages.some((m: any) => !m || !['user', 'assistant'].includes(m.role) ||
          typeof m.content !== 'string' || !m.content.trim() || m.content.length > 2000) ||
        messages.at(-1).role !== 'user') {
      return res.status(400).json({ error: 'Invalid messages array.' });
    }

    // Filter/prepare conversation history for Gemini contents parameter format
    const contents = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : m.role,
      parts: [{ text: m.content || '' }]
    }));

    if (!ai) {
      console.warn('GEMINI_API_KEY is not defined in the environment.');
      return res.status(503).json({ error: 'Support representative is currently offline.' });
    }

    if (chatRequests >= 20) return res.status(429).json({ error: 'Chat is busy. Please try again later.' });
    chatRequests += 1;

    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL || 'gemini-3.1-flash-lite',
      contents,
      config: {
        maxOutputTokens: 512,
        systemInstruction: `You are Kemi, a friendly, extremely professional customer support agent for "Clear Impact Services Limited" in Port Harcourt and Owerri, Nigeria. 
We specialize in:
- Educational Technologies: WAEC E-Study, digital mock tests, and physical CBT centers.
- Capacity Building & Training: Professional courses, certified skill paths, leadership programs (e.g. British Council TKT).
- Cybersecurity Solutions & consulting.
- Project & Event Management.

Registered Address: Plot 114 Rumuosi Road, Near Airport Road Intersection, Rumuosi, Rivers State.
Active Contacts: 0803 776 2620 OR 0902 014 7466.
Inquiry/Operational Hours: Monday - Friday, 08:00 AM - 05:00 PM (GMT+1).

Keep responses professional, concise (1-3 sentences maximum), and tailored to Nigeria's education/training landscape. Identify yourself as an AI assistant. Do not invent prices, accreditations, appointments, or guarantees. Refer unconfirmed details to the office.`
      }
    });

    if (!response.text) return res.status(502).json({ error: 'No chat response available.' });
    res.json({ reply: response.text });
  } catch (err: any) {
    console.error('Gemini Chat Error:', err);
    res.status(500).json({ error: 'Failed to process chat response.' });
  }
});

app.use('/api', (_req, res) => res.status(404).json({ error: 'API route not found.' }));

// Setup Vite Dev server middleware or serve production assets
async function setupVite() {
  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist', 'client');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}

setupVite().then(() => {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Server startup failed:', error);
  process.exitCode = 1;
});
