# Shivam Wire Traders – Monorepo

This repository contains the complete web platform for **Shivam Wire Traders**, a leading manufacturer and supplier of mild steel HB wire. The monorepo includes:

- 🌐 **Frontend Website** – Public-facing website with contact form
- 📊 **Leads Dashboard** – Internal admin dashboard to manage inquiries
- 🔧 **Backend API** – Express server with PostgreSQL database and JWT authentication

---

## 📁 Project Structure

```
shivam-wire-traders/
├── frontend/          # Public company website (React + Vite + Bootstrap)
├── backend/           # REST API (Express + Prisma + PostgreSQL)
├── leads-dashboard/   # Admin portal to view/manage inquiries
├── .gitignore
├── README.md
```

---

## 📦 Tech Stack

- React + Vite + TypeScript
- Bootstrap 5
- Node.js + Express
- PostgreSQL (hosted on Neon)
- Prisma ORM
- JWT-based authentication
- Zod for input validation
- Toast notifications for UX feedback

---

## 🚀 How to Run the Full Project

### 1. Backend (API Server)
```bash
cd backend
npm install
npx prisma db push
npm run dev
```

### 2. Frontend Website
```bash
cd frontend
npm install
npm run dev
```

### 3. Leads Dashboard (Admin Portal)
```bash
cd leads-dashboard
npm install
npm run dev
```

---

## 🔐 Environment Variables

Each project has its own `.env` file.

At minimum:

```env
DATABASE_URL=your_postgres_connection_string
JWT_SECRET=your_random_secret
VITE_API_URL=your_api_link
```

---

## 🧩 Features

- Inquiry form for customers
- Admin login (email + password)
- View all inquiries with timestamps
- Mark inquiries as "attended"
- Filter & sort by status
- Health check endpoint
- Secure and token-protected APIs

---

## 🏢 Company Info

**Company:** Shivam Wire Traders  
**Website:** [https://shivamwire.com](https://shivamwire.com)

---

## 📝 License

This project is private and proprietary to Shivam Wire Traders. All rights reserved.
