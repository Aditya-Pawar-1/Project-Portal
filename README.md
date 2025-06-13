# 📚 Project-Portal - College Project Submission System

**Project-Portal - College Project Submission System** is a web-based platform built to simplify and digitise academic project submission, management, and evaluation. It allows students to upload project materials, teachers to manage and grade submissions, and administrators to control system access. This project demonstrates modern web development practices with secure authentication and scalable design.


## Features

- 🧑‍🎓 **Student Panel**: Upload GitHub links, documents, presentations, and images.
- 👩‍🏫 **Teacher Panel**: Create assignments, monitor progress, and grade submissions.
- 👨‍💼 **Admin Panel**: Manage users and system roles.
- 🔐 **Secure Login**: Role-based access control using JWT.
- 📂 **File Upload Support**: Supports document, PDF, image, and code file uploads via Multer.
- 📊 **Interactive UI**: Responsive design using modern frontend libraries.

---

## Technologies

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **File Uploads**: Multer
- **State Management**: Context API

---

## Setup Instructions

### Prerequisites

Make sure the following are installed on your system:

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)
- **MongoDB** (local or cloud-based)

---

### Clone the Repository

```
git clone https://github.com/Aditya-Pawar-1/Project-Portal.git
cd Project-Portal
````

---

### Backend Setup

```bash
cd server
npm install
```

#### Create `.env` File

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the server:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd client
npm install
npm start
```

The frontend will run at `http://localhost:5173`
The backend will run at `http://localhost:5000`

---

## Usage

1. **Admin** logs in to manage teacher and student accounts.
2. **Teacher** logs in to create project assignments and grade them.
3. **Student** logs in to submit project materials (GitHub link, presentation, etc.)
4. Files are securely stored and assigned to respective teachers for evaluation.

---

## Folder Structure

```
college-project-submission-system/
├── client/                   # React frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── public/
│
├── server/                   # Node backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   └── app.js
│
├── .env
├── README.md
└── package.json
```

---

## Website Images

### Login
![Screenshot 2025-06-13 184407](https://github.com/user-attachments/assets/7ec9d709-dd98-4fee-96a6-556e381fced2)

### Register
![Screenshot 2025-06-13 184812](https://github.com/user-attachments/assets/89ecb56b-c6e6-43cd-8fd2-fb55d598c84b)

### Student Dashboard
![Screenshot 2025-06-13 190950](https://github.com/user-attachments/assets/0e3d01ac-8fc9-4392-9dc6-156837f3bc78)

### Student Project Submission
![Screenshot 2025-06-13 190943](https://github.com/user-attachments/assets/ed9c4753-25db-4185-88c5-f8a2dd28df5d)

### Teacher Dashboard
![Screenshot 2025-06-13 190819](https://github.com/user-attachments/assets/4928985e-0ce1-4dcf-95fc-50ef1a48f93c)

## Author

**Aditya Pawar**
📧 [aditya.pawar.dev@outlook.com](mailto:aditya.pawar.dev@outlook.com)
🌐 [pawaraditya.com](https://pawaraditya.com)
🔗 [LinkedIn](https://linkedin.com/in/aditya-pawar-dev)
