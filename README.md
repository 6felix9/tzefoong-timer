# Tze Foong Timer

## Tired of Tedious Timers?

Ever wanted to set a timer for practice papers or other tasks, but found the process too annoying?  
No more endless clicking—now you can start a timer instantly with just a single URL!

**Live Demo:** [tzefoongtimer.pages.dev](https://tzefoongtimer.pages.dev)

---

## Features

### Timer
- **URL-Based Configuration:**  
  Instantly set timers via the URL.  
  _Example:_ Want a 1h30m timer? Just enter:  
  `https://tzefoongtimer.pages.dev/1h30m`
  - `/1h30m` → 1 hour 30 minutes
  - `/30s` → 30 seconds
  - `/2h15m30s` → 2 hours 15 minutes 30 seconds
- **Interactive Digit Editing:** Click any digit to edit the time (while timer is stopped)
- **Visual Flash Alert:** Full-screen red flash animation when time’s up
- **Document Title Updates:** Remaining time shows in the browser tab

### Interface
- Toggle between Timer and Stopwatch modes
- Responsive design for all devices
- Clean UI with Tailwind CSS

## How It Works

The application uses React Router to capture duration from URL paths and convert them to timer values. The Timer component supports interactive digit editing with complex state management to handle inline editing while preserving original values. When the timer reaches zero, it triggers a global flash animation and shows a "STOP" overlay.

## Local Development

### Prerequisites
- Node.js 18+ 
- npm

### Installation

```bash
git clone https://github.com/6felix9/tzefoong-timer.git
cd tzefoong-timer
npm install
npm run dev
```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Tech Stack

- React 18.3+
- Vite 6.0+
- Tailwind CSS 4.1+
- React Router 7.1+