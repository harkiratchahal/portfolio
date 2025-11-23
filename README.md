# 🎵 3D Spotify-Inspired Portfolio

A fully responsive, visually stunning personal portfolio website inspired by Spotify's design aesthetic. Built with modern web technologies to deliver an immersive user experience with 3D elements, glassmorphism, and smooth animations.

🔗 **Live Demo:** [View Portfolio](https://69231af002ee42c32c5470bb--portfolio-harkirat-chahal.netlify.app/)

![Portfolio Preview](https://i.imgur.com/your-preview-image.png)
*(Note: You can replace this image link with a screenshot of your actual site)*

## ✨ Features

- **🎨 Premium Dark Theme**: Pitch black background with neon green highlights (`#00FF88`), inspired by Spotify's dark mode.
- **🧊 Glassmorphism UI**: Modern frosted glass effects on cards, sidebars, and panels.
- **🔮 3D Interactive Hero**: A floating, reactive 3D neon sphere built with **React Three Fiber**.
- **⚡ Smooth Animations**: Page transitions and micro-interactions powered by **Framer Motion**.
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices.
- **🎧 Spotify-Style Navigation**: Sticky sidebar navigation with an "album grid" layout for projects.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) / [Drei](https://github.com/pmndrs/drei)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

## 🚀 Getting Started

To run this project locally:

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```bash
├── app/                  # Next.js App Router pages
│   ├── globals.css       # Global styles & Tailwind config
│   ├── layout.tsx        # Main root layout
│   └── page.tsx          # Homepage with all sections
├── components/
│   ├── 3d/              # Three.js 3D scenes (HeroScene)
│   ├── layout/          # Layout components (Sidebar, MainLayout)
│   └── ui/              # Reusable UI components (Button, Card)
└── public/               # Static assets
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Designed & Built with 💚 by [Harkirat Chahal](https://69231af002ee42c32c5470bb--portfolio-harkirat-chahal.netlify.app/)
