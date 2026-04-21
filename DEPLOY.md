# Vercel Deployment

## Steps to Deploy

### 1. Go to Vercel Dashboard
- Visit https://vercel.com and sign in

### 2. Import Project
- Click "Add New..." → "Project"
- Import: `amkyawdev/recap-pro-app`

### 3. Configure
- Framework Preset: Next.js
- Build Command: `npm run build`
- Output Directory: `frontend/.next`
- Install Command: `cd frontend && npm install`

### 4. Environment Variables
Add in Vercel settings:
```
NEXT_PUBLIC_API_URL=https://your-backend.vercel.app
NEXTAUTH_SECRET=change-this-to-random-string-min-32-chars
NEXTAUTH_URL=https://your-app.vercel.app
```

### 5. Deploy
- Click "Deploy"

## Alternative: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## Note
Code pushed to main branch. GitHub Actions will trigger automatically if Vercel is connected in dashboard.