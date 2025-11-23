# BMSA Platform - Black Market Supplement Advisor

A subscription-based AI supplement advisor platform built with React, Shadcn-UI, and Chatbase integration.

## Features

- **Homepage**: Landing page with Memberstack authentication
- **Subscription Plans**: Monthly ($12) and Yearly ($99) with Stripe checkout
- **AI Chat**: Chatbase-powered supplement advisor for subscribers
- **Authentication**: Memberstack integration with content gating
- **Responsive Design**: Mobile-friendly interface

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: Shadcn-UI, Tailwind CSS
- **Authentication**: Memberstack
- **Payments**: Stripe
- **AI Backend**: Chatbase API
- **Deployment**: Vercel

## Quick Start

1. **Install Dependencies**
   ```bash
   pnpm install
   ```

2. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Add your CHATBASE_API_KEY
   ```

3. **Development**
   ```bash
   pnpm run dev
   ```

4. **Build**
   ```bash
   pnpm run build
   ```

## Deployment

### Vercel (Recommended)

1. **Connect Repository**
   - Push code to GitHub/GitLab
   - Import project in Vercel dashboard

2. **Environment Variables**
   - Add `CHATBASE_API_KEY` in Vercel settings

3. **Deploy**
   - Vercel will auto-deploy on push

### Manual Deployment

1. **Build Project**
   ```bash
   pnpm run build
   ```

2. **Deploy `dist/` folder** to your hosting provider

3. **API Routes**: Ensure your host supports Node.js serverless functions

## Configuration

### Memberstack
- Public Key: `pk_2c1c20e41e6f0df52f76`
- Plan: `underground-supplement-advisor`
- Redirects: Signup → `/subscribe`, Login → `/subscription-ai`

### Stripe
- Monthly Plan: https://buy.stripe.com/3cI6oI6OpdwS2qqfMjeME04
- Yearly Plan: https://buy.stripe.com/dRm6oIgoZ3Wi1mm57FeME05

### Chatbase
- Agent ID: `wrwekBGANyh3g9xMKtmFR`
- API Endpoint: `/api/bmsa-chat`

## Routes

- `/` - Homepage
- `/subscribe` - Subscription plans
- `/subscription-ai` - AI chat (subscribers only)

## Project Structure

```
src/
├── components/
│   ├── ui/           # Shadcn-UI components
│   ├── Hero.tsx      # Homepage hero section
│   └── Navigation.tsx # Site navigation
├── pages/
│   ├── Index.tsx     # Homepage
│   ├── Subscribe.tsx # Subscription plans
│   └── SubscriptionAI.tsx # AI chat interface
└── App.tsx           # Main app component

api/
└── bmsa-chat.js      # Chatbase API integration
```

## Support

For technical issues or questions about the BMSA platform, please contact support.