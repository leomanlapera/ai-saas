# 🧠 AI SaaS – Product Requirements Document (PRD)

## 🚀 Overview

**AI SaaS** is an AI-powered communication platform offering real-time video meetings with intelligent agent support, transcription, chat, and summaries. Designed for remote teams, SaaS businesses, and customer support, it features seamless integration with OpenAI, Stream SDKs, and a scalable subscription model.

---

## 🎯 Goals

- Enable intelligent, real-time video meetings
- Provide AI agents and live assistance
- Offer summaries, transcripts, and recordings
- Deliver a beautiful, responsive UI across all devices
- Support subscriptions and secure login
- Automate background jobs for post-meeting tasks

---

## 👤 Target Users

- Remote-first startups & teams
- AI developers & SaaS builders
- Sales and support teams
- Knowledge workers and consultants

---

## 🔑 Key Features

### ✅ Core

- 🤖 **AI-powered video calls** via **Stream Video SDK**
- 💬 **In-call & persistent chat** via **Stream Chat SDK**
- 🧠 **Custom real-time AI agents**
- 📞 **Video conferencing** with screen sharing, grid & speaker views
- 📝 **Auto summaries**, **transcripts**, **recordings**
- 📂 **Meeting history** with metadata & statuses
- 🔍 **Transcript search** with filters
- 📺 **Video playback** synced with transcript
- 💬 **AI meeting Q&A** (ask about call topics)
- 🧠 **OpenAI GPT-4 integration**

### ⚙️ Developer & Infra

- 🔐 **Better Auth login** (email, OAuth, magic links)
- 💳 **Polar subscriptions** + **Stripe** billing
- 📱 **Mobile responsive** UI
- 🌐 **Next.js 15** + **React 19**
- 🎨 **Tailwind CSS v4** + **Shadcn/ui**
- ⚙️ **Inngest** background jobs for summarization & indexing
- 🧑‍💻 **CodeRabbit PR reviews** integration

---

## 🧠 AI System

- GPT-4 agent assistance during calls
- Auto-generated summaries after calls
- Live transcript monitoring
- Token usage metering & optimization

---

## 💸 Payments

- Integrated with [Polar](https://polar.sh/)
- Plans: Free, Pro, Enterprise
- Stripe-hosted payment links
- Usage-based billing for AI features

---

## 🔐 Authentication

- "Better Auth" system
- Email/password + OAuth
- Role-based access (admin, member, guest)
- Magic link login supported

---

## 📱 UX & Accessibility

- Fully mobile responsive
- Keyboard navigable & screen reader support
- Dark/light mode with Tailwind & Shadcn

---

## 🧱 Tech Stack

| Layer      | Stack                      |
| ---------- | -------------------------- |
| Frontend   | Next.js 15, React 19       |
| Styling    | Tailwind CSS v4, Shadcn/ui |
| Video/Chat | Stream SDKs                |
| AI         | OpenAI GPT-4               |
| Auth       | Better Auth (or Auth.js)   |
| Background | Inngest                    |
| Billing    | Polar + Stripe             |
| Hosting    | Vercel                     |

---

## 📈 Success Metrics

- AI summary usage per meeting
- Transcript search engagement
- Average meeting duration
- Monthly active users (MAU)
- Subscription conversion rate

---

## 🗓️ Roadmap (90 Days)

| Month | Milestone                        |
| ----- | -------------------------------- |
| M1    | MVP: Video, transcript, summary  |
| M2    | Add chat, search, recording, Q&A |
| M3    | Add billing, auth, mobile UX     |
