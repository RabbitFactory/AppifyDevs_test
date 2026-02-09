Frontend Analytics Dashboard

## How to Run

Install dependencies and start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Recharts
- Zustand

## Project Structure
- app/: layout and page composition
- components/: UI components (sidebar, header, filters, KPI cards, charts)
- store/: Zustand global state
- lib/: data fetching helpers
- types/: TypeScript types
- public/: static assets and mock.json

## Assumptions
- No authentication, no backend
- Data comes from public/mock.json, filtered client-side
- Loading is simulated with setTimeout
- Error state is simulated randomly

## Deploy to Vercel
- Push this repo to GitHub
- Import to Vercel and deploy
- No environment variables required
