# 🕐 Tze Foong Timer

A modern, responsive React-based timer and stopwatch web application designed for productivity, studying, workouts, and precise time management.

🌐 **Live Demo**: [tzefoongtimer.pages.dev](https://tzefoongtimer.pages.dev)

## ✨ Features

### 🎯 Timer
- **📋 URL-Based Configuration**: Set timers instantly via URL
  - `tzefoongtimer.pages.dev/1h30m` → 1 hour 30 minutes
  - `tzefoongtimer.pages.dev/30s` → 30 seconds  
  - `tzefoongtimer.pages.dev/2h15m30s` → 2 hours 15 minutes 30 seconds
- **✏️ Interactive Digit Editing**: Click any digit to edit time while timer is stopped
- **🚨 Visual Flash Alert**: Full-screen red flash animation when timer reaches zero
- **📱 Document Title Updates**: See remaining time in browser tab
- **🎮 Intuitive Controls**: Start, stop, and reset with clean button interface

### ⏱️ Stopwatch  
- **▶️ Count-Up Timing**: Track elapsed time with precision
- **🔄 Full Control**: Start, stop, and reset functionality
- **📊 Live Updates**: Real-time display with smooth transitions

### 🎨 User Experience
- **🌓 Toggle Interface**: Seamlessly switch between Timer and Stopwatch modes
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **⚡ Modern UI**: Clean design with Tailwind CSS styling
- **🎯 Accessibility**: Keyboard navigation and screen reader support

## 🚀 Quick Start

### URL Timer Setup
Simply add your desired duration to the URL:

| Format | Example | Result |
|--------|---------|--------|
| `Xh` | `/2h` | 2 hours |
| `Xm` | `/45m` | 45 minutes |
| `Xs` | `/30s` | 30 seconds |
| `XhYm` | `/1h30m` | 1 hour 30 minutes |
| `XhYmZs` | `/1h15m45s` | 1 hour 15 minutes 45 seconds |

### Manual Setup
1. Visit [tzefoongtimer.pages.dev](https://tzefoongtimer.pages.dev)
2. Click on timer digits to edit
3. Set your desired time
4. Click "Start" to begin countdown

## 🛠️ Local Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/6felix9/tzefoong-timer.git

# Navigate to project directory
cd tzefoong-timer

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173 in your browser
```

### Available Scripts

```bash
npm run dev      # Start development server with Vite
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint for code quality
```

## 🏗️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend framework | 18.3+ |
| **Vite** | Build tool & dev server | 6.0+ |
| **Tailwind CSS** | Utility-first styling | 4.1+ |
| **React Router** | URL-based routing | 7.1+ |
| **PropTypes** | Runtime type checking | 15.8+ |

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Timer.jsx        # Main timer component with editing
│   ├── Stopwatch.jsx    # Stopwatch functionality  
│   ├── Toggle.jsx       # Timer/Stopwatch mode switch
│   └── StartReset.jsx   # Control buttons
├── pages/
│   └── HomePage.jsx     # Main application page
├── utils/
│   └── getTime.jsx      # URL duration parsing logic
├── index.css           # Global styles & animations
└── main.jsx           # Application entry point
```

## 🎨 Key Features Deep Dive

### Interactive Timer Editing
- Click any digit (except colons) to enter edit mode
- Input validation ensures proper time formatting
- Visual feedback with digit highlighting during editing
- Preserves original values if edit is cancelled

### URL-Based Timer Configuration  
- Regex-powered parsing supports flexible formats
- Automatic validation and error handling
- Seamless integration with React Router
- Bookmark-friendly URLs for repeated use

### Visual Flash Animation
- Full-screen red flash when timer reaches zero
- CSS keyframe animations for smooth transitions
- Click-anywhere-to-dismiss functionality
- Non-intrusive overlay design

## 🚀 Deployment

The application is deployed on Cloudflare Pages with automatic deployments from the main branch.

### Build Commands
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern React patterns and hooks
- Styled with Tailwind CSS for rapid development
- Deployed on Cloudflare Pages for global performance