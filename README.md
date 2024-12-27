# Timer and Stopwatch Website

Welcome to **Tze Foong Timer**, a React-based web application that functions as both a timer and a stopwatch. This app is perfect for managing countdowns or timing events like exams, workouts, practice sessions, or any activity requiring precise timing.

## Features

### Timer
- **URL-Based Timer Configuration**: Automatically set the timer via the URL. For example:
  - `tzefoongtimer.pages.dev/1h30m` sets a 1-hour and 30-minute timer.
  - `tzefoongtimer.pages.dev/30s` sets a 30-second timer.
  - `tzefoongtimer.pages.dev/1h` sets a 1-hour timer.
- **Simple Start/Stop Functionality**: Once the timer is set, press the start button to begin the countdown.
- **Auto Flash on Completion**: The page will flash red when the countdown hits zero.

### Stopwatch
- Start and stop the stopwatch to time your activities.
- Reset functionality to clear and start over.

### Editing Timer
- Click on the timer digits to manually edit hours, minutes, or seconds.
- Adjust the timer on the fly without stopping the countdown.

## Usage

### Quick Setup via URL
To use the timer quickly, include the desired duration in the URL:

1. Open the website in your browser.
2. Append the desired time to the URL in the format:
   - `h` for hours
   - `m` for minutes
   - `s` for seconds

Examples:
- `tzefoongtimer.pages.dev/1h30m30s` sets the timer to 1 hour, 30 minutes, and 30 seconds.
- `tzefoongtimer.pages.dev/45s` sets the timer to 45 seconds.
- `tzefoongtimer.pages.dev/2h` sets the timer to 2 hours.

### Manual Timer Adjustment
1. Click on the timer digits to enter edit mode.
2. Enter the desired numbers for hours, minutes, or seconds.
3. Press "Start" to begin the countdown.

### Stopwatch
1. Open the website without specifying a duration in the URL.
2. Toggle to stopwatch to start, stop, or reset the timer.

## Installation

If you'd like to run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/tzefoong-timer.git
   ```

2. Navigate to the project directory:
   ```bash
   cd tzefoong-timer
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open the app in your browser at `http://localhost:3000`.

## Technologies Used

- **React**: Front-end framework for building the user interface.
- **CSS**: Custom styles for the timer and stopwatch.
- **React Router**: To handle URL-based timer configurations.