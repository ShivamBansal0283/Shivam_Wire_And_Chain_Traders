# Shivam Wire Traders – Backend API

This is the backend server for Shivam Wire Traders' internal lead and inquiry management system. It handles form submissions from the website, secure admin access via JWT, inquiry status updates, and stores all data in a PostgreSQL database using Prisma ORM.

---

## 🛠️ Tech Stack

- **Node.js** (Express)
- **TypeScript**
- **PostgreSQL** (hosted on Neon)
- **Prisma ORM**
- **Zod** for validation
- **JWT** for admin authentication
- **CORS**, **Helmet**, **Rate Limiting**

---

## 📦 Setup Instructions

1. **Clone the repository**

```bash
git clone <REPO_URL>
cd backend
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root:

```
DATABASE_URL=postgresql://<username>:<password>@<host>/<db_name>?sslmode=require
```

4. **Push schema & migrate database**

```bash
npx prisma db push
```

5. **Start the server**

```bash
npm run dev
```

---

## 🧩 Features

- Public API to receive inquiries from the contact form
- Admin JWT login 
- Protected routes for dashboard 
- Inquiry status update: mark as attended/pending
- Inquiry filtering by status or sort
- Zod-based input validation
- Rate limiting on public inquiry endpoint

---

## 📁 Folder Structure

```
backend/
├── prisma/            # Prisma schema
├── routes/            # API route handlers
├── middleware/        # JWT auth, rate limiter
├── utils/             # Utility functions
├── index.ts           # App entry point
├── ReadMe.md
```

---

## 🔐 Authentication

- Admins authenticate with email + password (stored in `users` table)
- JWT token is issued on login and required for protected endpoints

---

## 🩺 Health Check

```http
GET /api/health
```

Returns:
```json
{ "status": "ok" }
```

---

## 📞 Contact

**Company:** Shivam Wire Traders  
**Website:** [shivamwire.com](https://shivamwire.com)
