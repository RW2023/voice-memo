# Voice Recorder Application

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Overview

The Voice Recorder Application allows users to:
- Record voice notes directly in the browser.
- Save audio recordings as files.
- Upload and store audio files in [Supabase](https://supabase.io) storage.
- Play back saved recordings.

This project uses:
- [Next.js](https://nextjs.org) for the frontend.
- [Tailwind CSS](https://tailwindcss.com) and [DaisyUI](https://daisyui.com) for styling.
- [Supabase](https://supabase.io) for backend database and storage.

---

## Getting Started

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app in action.

### Key Features in Development
- Start editing the main page in `app/page.tsx`. The app will auto-update as you edit the file.
- Tailwind CSS and DaisyUI are pre-configured for responsive and modern UI components.

---

## Recording and Storage

This project uses the **Web Audio API** to record audio and **Supabase** for storing recordings.

### How It Works:
1. Click "Record" to start recording audio.
2. Stop recording to preview the audio.
3. Save the audio note, which will upload the file to Supabase storage.

---

## Learn More

To dive deeper into the technologies used in this project, check out:
- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [DaisyUI Documentation](https://daisyui.com)

---

## Deploy on Vercel

The easiest way to deploy this application is through [Vercel](https://vercel.com). Follow the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for step-by-step guidance.

---
