# ULK Sports League

A modern web application for managing and showcasing the ULK Sports League, featuring fixtures, results, galleries, league tables, and more. Built with Next.js, React, and Tailwind CSS.

## Features

- 📅 Fixtures & Results: View upcoming and past matches for football, basketball, volleyball, and tennis.
- 🏆 League Tables: Track departmental and international league standings.
- 🖼️ Gallery: Browse photos and videos from league events.
- 🏫 Departments & Countries: Explore academic departments and international representation.
- 📊 Statistics: See top scorers, team stats, and upcoming events.
- 🎨 Modern UI: Responsive, accessible, and themeable interface.

- 🔐 Email/Password Authentication
- 🔄 OAuth with Google and other providers
- ✉️ Email verification
- 🔄 Password reset functionality
- 👥 Role-based access control
- 🛡️ Secure session management

## Tech Stack

- Framework: Next.js (App Router, TypeScript)
- UI: React, Tailwind CSS, Radix UI
- Icons: Lucide React
- Forms & Validation: React Hook Form, Zod
- State & Theme: next-themes

- [Better Auth](https://better-auth.com)
- [Prisma](https://www.prisma.io/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)
- [Nodemailer](https://nodemailer.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)

## ⚠️ Package Note

- @node-rs/argon2: This package is required for password hashing. It is a native package and may not work on all systems. If you encounter any issues, please refer to the [Better Auth documentation](https://better-auth.com/docs).
- nodemailer: This package is required for email verification and password reset. It is a dependency of [Better Auth](https://better-auth.com).
- pnpm add -D @types/nodemailer nodemailer
- pnpm add @node-rs/argon2

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- MongoDB database

### Installation

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
# Database
DATABASE_URL="mongodb://localhost:27017/better-auth"

# Authentication
BETTER_AUTH_SECRET=your-secret-here
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Email (for password reset and verification)
NODEMAILER_USER=your-email@example.com
NODEMAILER_APP_PASSWORD=your-app-password-form-google-account

# OAuth Providers
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret

GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
```
