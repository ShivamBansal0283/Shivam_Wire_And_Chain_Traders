# Shivam Wire Traders – Frontend

This is the frontend codebase for the Shivam Wire Traders website and internal inquiry system. It is built with React, Vite, and TypeScript, using Bootstrap for styling.

## 🌐 Live Website

[https://shivamwire.com](https://shivamwire.com)

## 🛠️ Tech Stack

- React
- Vite
- TypeScript
- Bootstrap 5
- React Router
- Custom Hooks & Context

## 📦 Project Setup

1. **Clone the repository**
   ```bash
   git clone <REPO_URL>
   cd frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

The app will be running at `http://localhost:5173`

## 📁 Folder Structure

```
frontend/
├── public/             # Static assets and favicon
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # Reusable UI components
│   ├── config/         # Company info constants
│   ├── hooks/          # Custom hooks (e.g., use-toast)
│   ├── pages/          # Route components
│   ├── services/       # API calls and JWT logic
│   ├── App.tsx         # App layout and routing
│   ├── main.tsx        # Entry point
├── index.html
├── vite.config.ts
```

## 🔐 Environment Variables

Create a `.env` file in the root with:

```
VITE_API_URL=http://localhost:3000
```

## 📞 Contact

**Company:** Shivam Wire Traders  
**Website:** [shivamwire.com](https://shivamwire.com)
