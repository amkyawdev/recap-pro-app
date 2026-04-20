# Recap Pro

A modern movie recap application with Next.js frontend, FastAPI backend, and React Native mobile app.

## Features

- 📝 Create and share movie recaps
- 🌐 Multi-language translation (powered by Gemini AI)
- 🔊 Text-to-speech playback (ElevenLabs)
- 📱 Mobile-first PWA design
- ✨ Social app-style touch interactions

## Tech Stack

### Frontend
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- NextAuth.js
- Firebase

### Backend
- FastAPI
- MongoDB
- Redis
- Gemini AI
- Groq
- ElevenLabs

### Mobile
- React Native (Expo)
- React Navigation

## Getting Started

### Prerequisites

- Node.js 20+
- Python 3.11+
- Docker & Docker Compose
- MongoDB (optional, can use Docker)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
cp .env.example .env
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Docker Setup

```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Environment Variables

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_FIREBASE_API_KEY=...
```

### Backend (.env)
```
MONGODB_URL=mongodb://localhost:27017
GEMINI_API_KEY=...
GROQ_API_KEY=...
ELEVENLABS_API_KEY=...
```

## Project Structure

```
recap-pro-app/
├── frontend/          # Next.js PWA
├── backend/           # FastAPI
├── mobile/            # React Native
├── shared/            # Shared types & constants
└── .github/           # GitHub Actions
```

## License

MIT