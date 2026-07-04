# Digital Clock

> A responsive digital clock built with vanilla JavaScript that displays the current system time in a 12-hour format with automatic updates every second.

---

## Demo

---

## Tech Stack

| Technology       | Usage                           |
| ---------------- | ------------------------------- |
| HTML5            | Page structure                  |
| CSS3             | Styling, layout, animations     |
| JavaScript (ES6) | Real-time clock logic           |
| Date API         | Reading the current system time |
| setInterval()    | Updating the UI every second    |

---

## Features

- Real-time digital clock
- 12-hour time format
- AM/PM indicator
- Automatic updates every second
- Leading zero formatting
- Blinking separators
- Responsive layout
- No external libraries

---

## Project Structure

```text
digital-clock/
├── index.html
├── style.css
└── script.js
```

---

## How It Works

1. JavaScript creates a new `Date` object every second.
2. Hours, minutes, and seconds are extracted.
3. The hour is converted from 24-hour format to 12-hour format.
4. Leading zeros are added where necessary.
5. The DOM updates automatically every second using `setInterval()`.

---

## Core JavaScript Concepts

### Date API

The browser provides the current system date and time.

```javascript
const currentTime = new Date();
```

---

### setInterval()

Runs a function repeatedly at a fixed interval.

```javascript
setInterval(updateClock, 1000);
```

This keeps the displayed time synchronized with the system clock.

---

### DOM Manipulation

JavaScript updates the displayed values every second.

```javascript
hours.innerHTML = formattedHour;
```

---

### Conditional Formatting

The application converts:

- 24-hour → 12-hour format
- Single-digit numbers → Two-digit numbers
- Hours → AM/PM representation

---

## What I Learned

- How `setInterval()` repeatedly executes code
- How the JavaScript Date API works
- How to convert 24-hour time into 12-hour format
- How to format numbers using conditional expressions
- How to update the DOM continuously without refreshing the page

---

## License

MIT
