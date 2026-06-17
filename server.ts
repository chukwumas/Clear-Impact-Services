/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3000;

// Initialize Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

app.use(express.json());

// API route for live chat (Low-Latency Gemini-powered Support Agent)
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;
    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid messages array.' });
    }

    // Filter/prepare conversation history for Gemini contents parameter format
    const contents = messages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : m.role,
      parts: [{ text: m.content || '' }]
    }));

    if (!process.env.GEMINI_API_KEY) {
      console.warn('GEMINI_API_KEY is not defined in the environment.');
      return res.status(500).json({ error: 'Support representative is currently offline.' });
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents,
      config: {
        systemInstruction: `You are Kemi, a friendly, extremely professional customer support agent for "Clear Impact Services Limited" in Port Harcourt and Owerri, Nigeria. 
We specialize in:
- Educational Technologies: WAEC E-Study, digital mock tests, and physical CBT centers.
- Capacity Building & Training: Professional courses, certified skill paths, leadership programs (e.g. British Council TKT).
- Cybersecurity Solutions & consulting.
- Project & Event Management.

Registered Address: Plot 114 Rumuosi Road, Near Airport Road Intersection, Rumuosi, Rivers State.
Active Contacts: 0803 776 2620 OR 0812 345 6789.
Inquiry/Operational Hours: Monday - Friday, 08:00 AM - 05:00 PM (GMT+1).

Keep responses professional, concise (1-3 sentences maximum), and completely tailored to Nigeria's public & private education/training landscape. Address clients with respect. Speak as a real human representative on duty. Always stay in character as Kemi.`
      }
    });

    res.json({ reply: response.text });
  } catch (err: any) {
    console.error('Gemini Chat Error:', err);
    res.status(500).json({ error: 'Failed to process chat response.' });
  }
});

// Setup Vite Dev server middleware or serve production assets
async function setupVite() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
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
});
