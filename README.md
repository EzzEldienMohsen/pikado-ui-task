# Pikado UI Task

A simple and responsive dashboard layout built with React, TypeScript, and Tailwind CSS.

## Overview

This project is a responsive dashboard layout that demonstrates a clean UI using React functional components, TypeScript, and Tailwind CSS. It features:

- A collapsible sidebar (optimized for mobile responsiveness)
- A top navigation bar with a title and a user avatar
- A main content area displaying a static table with mock data

Optionally, it includes a light/dark mode toggle implemented using React Context API.

## Features

- **Responsive Layout:**

  - Collapsible sidebar on mobile devices
  - Adaptive design ensuring usability across devices

- **UI Components:**

  - **Sidebar:** Contains navigation links and collapses on smaller screens
  - **Top Navigation Bar:** Displays the project title and a user avatar
  - **Main Content:** Showcases a static table with mock data for demonstration

- **Technical Implementation:**
  - Developed with React functional components and hooks
  - TypeScript is used for strong typing and component interfaces
  - Styling is fully handled by Tailwind CSS without inline styles
  - (Optional) Light/Dark mode toggle via React Context API

## Installation

To run the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EzzEldienMohsen/pikado-ui-task.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd pikado-ui-task
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser:**
   Navigate to http://localhost:3000 to view the project.

## Project Structure

├── src
│ ├── components
│ │ ├── Sidebar.tsx
│ │ ├── TopNav.tsx
│ │ └── Table.tsx
│ ├── context
│ │ └── ThemeContext.tsx (if light/dark mode is implemented)
│ ├── pages
│ │ └── Dashboard.tsx
│ └── App.tsx
├── tailwind.config.js
├── tsconfig.json
└── package.json

## Approach

UI Implementation:
The dashboard is built using modular React components. The sidebar is responsive and collapsible, while the top navigation bar includes key elements such as the project title and user avatar.

Responsive Behavior:
Tailwind CSS utility classes are used to ensure the layout adapts to different screen sizes, providing an optimal experience on both desktop and mobile devices.

TypeScript and Code Quality:
Strongly typed props and interfaces ensure code clarity and maintainability. React Hooks manage state and behavior in a clean, functional style.

Bonus Feature:
(If implemented) The light/dark mode toggle leverages React Context API to manage theme changes across the application.

## Deployment

The project is deployed on Vercel and is accessible at:
https://pikado-ui-task.vercel.app/

## Future Enhancements

Adding interactive functionalities to the table (e.g., sorting and filtering)
Integrating with a backend for dynamic data
Further refining UI/UX based on user feedback
