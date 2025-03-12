# Automatic Toll Dashboard

## Overview
This project is an **Automatic Toll Dashboard** built using **Vue.js** (with Pinia for state management) and **Express.js**. The dashboard provides real-time monitoring and control of an automatic toll booth, allowing users to:

- View the number of cars currently in different lanes.
- Change the digital display text of the booths.
- Open or close a booth dynamically.

The backend is powered by an **Express.js server** using an in-memory database, while the frontend is a **Vue.js application** located in a separate directory.

## Project Structure
```bash
.
├── services/            # Backend (Express server with in-memory DB)
├── vue-client/         # Frontend (Vue.js application with Pinia)
├── README.md          # Project documentation
```

## Installation
To set up the project, follow these steps:

### 1. Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### 2. Install Dependencies & Running
#### Backend (Express.js)
cd into services/toll-service directory
```bash
npm install
npm run dev
```

#### Frontend (Vue.js)
cd into vue-client directory
```bash
npm install
npm run dev
```

## Features
- **Custom Display Messages:** Change the text displayed on digital boards.
- **Live Monitoring:** Displays the number of cars in different lanes.
- **Booth Control:** Open or close booths dynamically.
- **State Management:** Uses **Pinia** for efficient data handling.

## Technologies Used
- **Frontend:** Vue.js, Pinia, Vite, TypeScript, Tailwind
- **Backend:** Express.js
- **State Management:** Pinia
- **Database:** In-memory database (for simplicity)

## Future Improvements
- Persist data using a database (e.g., MongoDB, PostgreSQL).
- Implement real-time updates using WebSockets.
- Add authentication and role-based access.
