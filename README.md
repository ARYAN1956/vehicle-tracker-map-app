# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# 🚗 Vehicle Tracker Map App

A modern React-based web application that simulates real-time movement of multiple vehicles on a map using Leaflet. Built with a clean UI, dark mode support, and dummy JSON location data.

---

## 🔥 Features

- 📍 Real-time vehicle tracking
- 🌗 Dark mode toggle
- 🧭 Live Leaflet map integration
- 🚗 Multiple vehicle markers
- 📊 Speed & timestamp display
- 🛣️ Route path drawing with animation
- ⚡ Lightweight and responsive design

---

## 🖥️ Demo
 <img width="1891" height="864" alt="Demo screenshot" src="https://github.com/user-attachments/assets/67d86c8b-c1e5-4c90-8795-a5b097127c22" />


🟢 Live on Netlify: [https://your-netlify-link.netlify.app](https://vehicle-tracker-map-app.netlify.app/)  
📦 GitHub Repo: [https://github.com/ARYAN1956/vehicle-tracker-map-app](https://github.com/ARYAN1956/vehicle-tracker-map-app)

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/ARYAN1956/vehicle-tracker-map-app.git
cd vehicle-tracker-map-app

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev
Then open: http://localhost:5173/


# Sample Location JSON Format

[
  {
    "latitude": 17.385044,
    "longitude": 78.486671,
    "timestamp": "2024-07-20T10:00:00Z"
  },
  {
    "latitude": 17.386000,
    "longitude": 78.487000,
    "timestamp": "2024-07-20T10:01:00Z"
  }
]
