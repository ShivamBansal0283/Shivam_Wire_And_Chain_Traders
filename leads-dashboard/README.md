# Shivam Wire Traders – Leads Dashboard

This is the admin-facing leads dashboard for Shivam Wire Traders. It allows authenticated administrators to view, filter, and manage customer inquiries submitted from the public website.

---

## 🛠️ Tech Stack

- React + Vite
- TypeScript
- Bootstrap 5
- React Router
- JWT-based Authentication
- Toast Notifications
- Secure API integration with Express backend

---

## 🧩 Features

- Admin login with email & password
- View customer inquiries submitted via contact form
- Filter inquiries by status (Pending / Attended)
- Mark inquiries as attended or pending
- Secure API access via JWT token
- Responsive UI with Bootstrap

---

## 📦 Setup Instructions

1. **Clone the repository**
```bash
git clone <REPO_URL>
cd leads-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the app locally**
```bash
npm run dev
```

The dashboard will be available at `http://localhost:5173`

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=
```

This should point to your backend server handling the API requests.

---

## 📁 Folder Structure

```
leads-dashboard/
├── src/
│   ├── components/     # UI components (Navbar, Table, etc.)
│   ├── pages/          # Login page, Dashboard page
│   ├── services/       # API & auth logic
│   ├── hooks/          # Custom hooks
│   ├── config/         # Company constants
│   ├── App.tsx
│   ├── main.tsx
├── public/
├── index.html
├── vite.config.ts
```

---

## 🔐 Authentication Flow

- Admins login via email/password
- JWT token is stored in local storage
- All protected routes require a valid token
- Token is automatically attached to outgoing API requests

---

## 📞 Contact

**Company:** Shivam Wire Traders  
**Website:** [shivamwire.com](https://shivamwire.com)
