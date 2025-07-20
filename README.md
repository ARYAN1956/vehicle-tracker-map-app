# 🚗 Vehicle Tracker Map App

A responsive, real-time vehicle tracking web app built using **React** and **Leaflet**. It supports multiple vehicle markers, route simulation, speed calculation, and dark mode toggle — optimized for all device sizes.

![Demo Screenshot](./screenshot.png)
<img width="1891" height="864" alt="Demo screenshot" src="https://github.com/user-attachments/assets/fc68e4fc-fc0b-4636-b5d3-3637e99f16ac" />

## 🧰 Features

- 📍 Real-time marker movement
- 🛣️ Route path visualization
- 🕹️ Start/Pause controls with animation
- 🌑 Light/Dark mode toggle
- 🚗 Multiple vehicle support
- ⚡ Speed display per vehicle
- 📱 Fully responsive (mobile/tablet/desktop)

## 🗺️ Demo

Live Site 👉 [https://your-netlify-site.netlify.app](https://your-netlify-site.netlify.app)

## 🛠️ Technologies Used

- [React.js](https://reactjs.org/)
- [React Leaflet](https://react-leaflet.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

## 🧪 Local Development

1. **Clone the Repo**

```bash
git clone https://github.com/your-username/vehicle-tracker.git
cd vehicle-tracker
```

2. **Install Dependencies**

```bash
npm install
```

3. **Run Locally**

```bash
npm run dev
```

> Runs on `http://localhost:5173` (or as printed)

---

## 🚀 Deploy on Netlify

1. **Push your code to GitHub**

```bash
git init
git remote add origin https://github.com/your-username/vehicle-tracker.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Connect GitHub to Netlify**  
   Go to [netlify.com](https://netlify.com) → Import from GitHub → Set build as:

   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`

3. **Deploy and Get a Live URL!**

---

## 📦 Sample Vehicle Data Format

```json
[
  { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" },
  { "latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z" }
]
```

Place in: `src/data/vehicles.json`

---

## 🙌 Credits

- Map tiles by [OpenStreetMap](https://www.openstreetmap.org/)
- Icons by [Lucide.dev](https://lucide.dev/)

