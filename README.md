# YouTub_Clone
---

## 📦 Installed Packages & Tools

This project is a **YouTube Clone** built using **React**, with a clean and responsive UI, video playback, and dynamic content fetched from a video API. Below is a detailed explanation of the packages used:

---

### 🧰 Core Dependencies

| Package               | Purpose                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **react / react-dom** | Core libraries for building and rendering the React application.                                                                                  |
| **react-router-dom**  | Used for client-side routing. It enables seamless navigation between pages like Home, Video Detail, Channel, etc., without reloading the browser. |
| **axios**             | A promise-based HTTP client used to send requests to the YouTube API and fetch video or channel data.                                             |
| **react-player**      | A powerful React component for playing YouTube videos. It handles video embedding and player controls out of the box.                             |

---

### 🎨 UI & Styling

| Package                              | Purpose                                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **@mui/material**                    | Material UI (MUI) components for building a responsive and modern-looking user interface.                                                      |
| **@mui/icons-material**              | Provides ready-to-use icons (like search, menu, play, etc.) following Material Design.                                                         |
| **@emotion/react & @emotion/styled** | Required peer dependencies for styling with MUI v5. These allow for dynamic styling using styled components and the Emotion CSS-in-JS library. |

---

### 🧪 Testing (CRA Default)

| Package                         | Purpose                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------- |
| **@testing-library/react**      | Helps test React components in a user-centric way.                                      |
| **@testing-library/jest-dom**   | Extends Jest with custom matchers for better assertions (e.g., `.toBeInTheDocument()`). |
| **@testing-library/user-event** | Simulates user actions like clicks and typing in tests.                                 |

---

### 📊 Performance & Optimization

| Package        | Purpose                                                                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **web-vitals** | Used to measure performance metrics like First Contentful Paint, Largest Contentful Paint, etc. Useful for tracking app performance. |

---

### 📜 NPM Scripts

```bash
npm start       # Runs the app in development mode at http://localhost:3000
npm run build   # Builds the app for production to the /build folder
npm test        # Launches the test runner
npm run eject   # Ejects from CRA setup (Not recommended unless necessary)
```

---
