# Nexa Studio — Digital Agency Homepage

A modern, responsive digital agency homepage built with Next.js and Tailwind CSS. The project showcases a clean agency-style interface with sections for services, portfolio work, and client contact.

## 🚀 Live Demo

**Live Website:** https://nexa-studio-three.vercel.app/

**GitHub Repository:** https://github.com/Nirmalkumar29102000/nexa-studio

---

## 📌 Project Overview

Nexa Studio is a fictional digital agency website created as part of a Next.js Developer Internship assignment.

The website focuses on presenting a modern, professional, and responsive agency experience while demonstrating reusable React components, responsive design, image optimization, form handling, and basic SEO configuration.

---

## ✨ Features

* Responsive agency homepage
* Modern dark-themed UI
* Hero section with call-to-action buttons
* Services section with reusable service cards
* Portfolio section with project cards
* Optimized portfolio images using Next.js Image
* Contact form with required field validation
* Form submission success state
* Smooth scrolling navigation
* Responsive mobile, tablet, and desktop layouts
* SEO metadata
* Reusable React components
* Production deployment with Vercel

---

## 🧩 Website Sections

### 1. Hero

Introduces Nexa Studio with:

* Agency name
* Tagline
* Short description
* Call-to-action buttons
* Agency statistics
* Modern gradient background

### 2. Services

Displays four core services:

* UI/UX Design
* Web Development
* Branding
* Digital Marketing

Each service is presented using a reusable `ServiceCard` component.

### 3. Portfolio

Showcases six fictional projects:

* Luma Finance
* Aether Spaces
* Mono Architecture
* Nori Coffee
* Forma Studio
* Orbit Mobility

Each project uses a reusable `ProjectCard` component and optimized images through `next/image`.

### 4. Contact

Includes:

* Name field
* Email field
* Message field
* Required field validation
* Submit button
* Success message after submission

---

## 🛠️ Technologies Used

* **Next.js 16**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **HTML5**
* **CSS3**
* **Unsplash** for portfolio imagery
* **Vercel** for deployment
* **Git & GitHub** for version control

---

## 📁 Project Structure

```text
nexa-studio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── Portfolio.tsx
│   ├── ProjectCard.tsx
│   ├── ServiceCard.tsx
│   └── Services.tsx
│
├── public/
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* Git

### 1. Clone the repository

```bash
git clone https://github.com/Nirmalkumar29102000/nexa-studio.git
```

### 2. Navigate to the project

```bash
cd nexa-studio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 5. Create a production build

```bash
npm run build
```

### 6. Start the production server

```bash
npm start
```

---

## 🎨 Design Approach

The design follows a minimal and modern digital-agency aesthetic.

Key design decisions include:

* Dark visual theme
* High-contrast typography
* Violet accent gradients
* Rounded cards and buttons
* Subtle hover interactions
* Responsive grid layouts
* Clear visual hierarchy
* Consistent spacing and typography

The interface was designed from scratch rather than using a pre-built website template.

---

## 📱 Responsive Design

The website is designed to work across:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

Tailwind CSS responsive utilities are used to adapt layouts and typography according to screen size.

---

## 🧱 Component Architecture

The application is divided into reusable React components.

Examples:

* `Navbar` — Website navigation
* `Hero` — Hero/landing section
* `Services` — Services section
* `ServiceCard` — Reusable service card
* `Portfolio` — Portfolio section
* `ProjectCard` — Reusable portfolio card
* `Contact` — Contact form and submission state
* `Footer` — Website footer

This structure keeps the code organized, readable, and maintainable.

---

## 🔍 SEO

Basic SEO metadata has been configured using Next.js Metadata API.

The website includes:

* Page title
* Meta description
* HTML language configuration

---

## 🖼️ Images

Portfolio images are sourced from Unsplash and configured through Next.js remote image patterns.

Next.js `Image` is used for optimized image rendering.

---

## 📝 Assumptions

* Nexa Studio is a fictional digital agency created for this assignment.
* Portfolio projects are fictional showcase projects.
* The contact form demonstrates frontend validation and success-state handling. It does not send data to a backend service.
* Portfolio images are used for visual presentation purposes.
* No external CMS or database is required for this assignment.

---

## 🚀 Deployment

The project is deployed using Vercel.

**Production URL:**

https://nexa-studio-three.vercel.app/

---

## 👨‍💻 Developer

**Nirmalkumar M**

Built as part of a Next.js Developer Internship assignment.

---

## 📄 License

This project was created for educational and internship evaluation purposes.
