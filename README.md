# Project Name

A web application built with **Laravel (Backend)** and **Node.js Frontend** using **SQLite** as the database.

---

## 🚀 Tech Stack

### Backend
- Laravel
- PHP 8.2
- SQLite

### Frontend
- ReactJS
- Tailwind CSS

---

## 📋 Requirements

Make sure the following tools are installed on your machine:

- PHP >= 8.2
- Composer
- Node.js
- SQLite

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/aldialhafidzi/astronacci-skill-test-fs
cd astronacci-skill-test-fs
```

---

# 🖥 Backend Setup

1. Go to backend directory

```bash
cd backend
```

2. Install dependencies

```bash
composer install
```

3. Copy environment file

```bash
cp .env.example .env
```

4. Generate application key

```bash
php artisan key:generate
```

5. Run migration

```bash
php artisan migrate
```

6. Start backend server

```bash
php artisan serve
```

Backend will run at:

```
http://localhost:8000
```

---

# 🎨 Frontend Setup

1. Open a new terminal and go to frontend directory

```bash
cd frontend
```

2. Install dependencies

```bash
npm install
```

3. Run development server

```bash
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

*(depending on your dev server configuration)*

---

# 🗄 Database

This project uses **SQLite**.

Run migration to create the database schema:

```bash
php artisan migrate
```

You can open the SQLite database using:

- DBeaver
- DB Browser for SQLite

---

# 📂 Project Structure

```
project-root
│
├── backend
│   ├── app
│   ├── routes
│   ├── database
│   └── ...
│
├── frontend
│   ├── src
│   ├── public
│   └── ...
│
└── README.md
```

---

# 🧪 Development

Run backend:

```bash
cd backend
php artisan serve
```

Run frontend:

```bash
cd frontend
npm run dev
```

---

# 📜 License

This project is licensed under the MIT License.