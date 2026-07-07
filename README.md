# Aama Homestay

**A custom direct-booking website for Aama Homestay, Kurseong — built for a real mountain property to take bookings without third-party OTA commissions.**

## Highlight

Direct booking site for a mountain homestay in the Darjeeling Hills — WhatsApp enquiries, SEO sitemap, zero OTA fees.

## Tech Stack

<div align="center">

**Frontend**

![Next.js 14](https://img.shields.io/badge/Next.js_14-000000?style=for-the-badge&logo=nextdotjs&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

**Deployment**

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

<!-- Portfolio sync reads the bullet list below -->
- Next.js 14
- React
- TypeScript
- Tailwind CSS
- Docker
- Vercel

## Features

- **Hero** — full-width landing with property overview and call-to-action
- **Rooms** — Deluxe, Family, and Suite showcases with photos
- **Services** — listed amenities and offerings
- **Location** — directions and area information for Kurseong
- **Reviews** — guest testimonials
- **WhatsApp** — sticky direct-contact button for booking enquiries
- **SEO** — auto-generated sitemap and robots.txt

## Getting Started

```bash
git clone https://github.com/subodhadhikari2023/aama-homestay.git
cd aama-homestay
cp .env.example .env
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker

```bash
docker build -t aama-homestay .
docker run -p 3000:3000 --env-file .env aama-homestay
```

---

## Screenshots

Place screenshots in `docs/screenshots/` — the portfolio sync picks them up automatically.

**Suggested names:** `hero.png`, `rooms.png`, `location.png`, `reviews.png`
