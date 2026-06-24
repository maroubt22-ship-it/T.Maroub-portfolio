# Taoufiq-Maroub-CV

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-6b438gak)

## Contact form

The contact form sends messages through a small Node mailer service. To enable it locally, copy `.env.example` to `.env` in the project root and set the Gmail SMTP values there. The recipient defaults to `taoufiq.maroub25@gmail.com`.

Use these Gmail values in `.env`:

- `CONTACT_SMTP_HOST=smtp.gmail.com`
- `CONTACT_SMTP_PORT=587`
- `CONTACT_SMTP_USER=taoufiq.maroub25@gmail.com`
- `CONTACT_SMTP_PASS=<your Gmail App Password>`

To generate the App Password:

1. Turn on 2-Step Verification for the Gmail account.
2. Open Google Account settings, then Security.
3. Create an App Password for Mail.
4. Paste the generated 16-character password into `CONTACT_SMTP_PASS` in `.env`.

Run the app with `npm run dev`. That starts both the Vite frontend and the API server.

If you only start the frontend, contact submissions will not work because the browser also needs the API endpoint running.
