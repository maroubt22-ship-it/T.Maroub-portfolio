import dotenv from 'dotenv';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const port = Number(process.env.PORT ?? 8787);
const recipientEmail = process.env.CONTACT_TO ?? 'taoufiq.maroub25@gmail.com';
const smtpHost = process.env.CONTACT_SMTP_HOST;
const smtpPort = Number(process.env.CONTACT_SMTP_PORT ?? 587);
const smtpUser = process.env.CONTACT_SMTP_USER;
const smtpPass = process.env.CONTACT_SMTP_PASS;
const fromAddress = process.env.CONTACT_FROM ?? smtpUser ?? 'portfolio@example.com';
const fromName = process.env.CONTACT_FROM_NAME ?? 'Portfolio Contact';
const isProduction = process.env.NODE_ENV === 'production';
const distDir = path.resolve('dist');
const hasClientBuild = fs.existsSync(distDir);

app.use(express.json({ limit: '32kb' }));

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function normalizeInput(value) {
  return value.trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildTransporter() {
  if (!smtpHost || !smtpUser || !smtpPass) {
    return null;
  }

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    requireTLS: smtpPort === 587,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
}

app.get('/health', (_req, res) => {
  res.json({ ok: true });
});

app.post('/api/contact', async (req, res) => {
  const name = normalizeInput(String(req.body?.name ?? ''));
  const email = normalizeInput(String(req.body?.email ?? ''));
  const message = normalizeInput(String(req.body?.message ?? ''));

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Tous les champs sont obligatoires.' });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ message: 'Adresse email invalide.' });
  }

  const transporter = buildTransporter();

  if (!transporter) {
    return res.status(500).json({
      message:
        'Le service de contact n\'est pas configuré. Renseignez CONTACT_SMTP_HOST, CONTACT_SMTP_PORT, CONTACT_SMTP_USER et CONTACT_SMTP_PASS dans .env.',
    });
  }

  const plainTextBody = [
    `Nom: ${name}`,
    `Email: ${email}`,
    '',
    message,
  ].join('\n');

  const htmlBody = `
    <h2>Nouveau message depuis le portfolio</h2>
    <p><strong>Nom:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
  `;

  await transporter.sendMail({
    from: `${fromName} <${fromAddress}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `Nouveau message depuis le portfolio - ${name}`,
    text: plainTextBody,
    html: htmlBody,
  });

  return res.json({ message: 'Message envoyé avec succès.' });
});

if (hasClientBuild) {
  app.use(express.static(distDir));

  app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api/')) {
      res.sendFile(path.join(distDir, 'index.html'));
      return;
    }

    next();
  });
}

app.listen(port, () => {
  const mode = isProduction ? 'production' : 'development';
  console.log(`Contact server running on http://localhost:${port} (${mode})`);
});