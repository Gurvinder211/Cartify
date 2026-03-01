# 🛒 Cartify — v1.0

Cartify is a complete e‑commerce prototype. The frontend, admin panel, and backend are finished and integrated for local development and deployment.

Key features:
- Product management (create, update, delete, list)
- Shopping cart with persisted sessions
- Secure checkout and order management
- User authentication (JWT)
- Cloud image uploads via Cloudinary
- Admin dashboard for store operations

See the sections below for setup, local run instructions, and deployment notes.

## 🚧 Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Cloud uploads:** Cloudinary
- **Deployment:** Vercel (configs included)

## 📁 Project Structure

Below is a high-level view of the repository layout and where to find main functionality.

```
Cartify/
├─ README.md                # Project overview (this file)
├─ admin/                   # Admin panel (React + Vite)
│  ├─ public/
│  └─ src/
│     ├─ components/
│     └─ pages/
├─ backend/                 # Node.js + Express API
│  ├─ config/               # DB and cloud configs
│  ├─ controllers/          # Route handlers
│  ├─ middleware/           # Auth, upload, etc.
│  ├─ models/               # Mongoose schemas
│  └─ routes/               # Express routes
├─ frontend/                # Shop frontend (React + Vite)
│  ├─ public/
│  └─ src/
│     ├─ components/
│     ├─ context/           # app state (shopContext)
│     └─ pages/
└─ package.json (root tooling or scripts)
```

For implementation details, see the `src` folders inside each major directory.


