# RepoPilot

An event-driven GitHub Automation Bot that listens to GitHub repository events, executes configurable automation workflows, and provides a real-time dashboard for monitoring repository activity.

---

# GitHub Automation Bot

## Overview

RepoPilot is a full-stack GitHub automation platform that enables developers to automate repetitive repository tasks. It integrates with GitHub Webhooks, GitHub OAuth, and Slack to perform actions such as automatically labeling issues, posting comments, sending Slack notifications, and tracking all automation activities through a centralized dashboard.

---

## Features

- GitHub OAuth Authentication
- GitHub Repository Integration
- GitHub Webhook Handling
- Automatic Issue Labeling
- Automatic Issue Commenting
- Slack Notifications
- Dashboard Analytics
- Repository Management
- Activity Monitoring
- User Settings
- JWT Authentication
- Protected Routes
- MongoDB Database
- Responsive UI

---

## Tech Stack

### Frontend
- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Axios
- React Query
- Lucide Icons

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Passport GitHub OAuth
- JWT Authentication

### Integrations
- GitHub OAuth
- GitHub REST API
- GitHub Webhooks
- Slack Incoming Webhooks

### Deployment
- Vercel (Frontend)
- Vercel (Backend)
- MongoDB Atlas

---

## Project Structure

```text
RepoPilot
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── utils
│   │   ├── webhooks
│   │   ├── app.ts
│   │   └── server.ts
│   └── package.json
│
└── README.md
```

---

## Application Workflow

1. User signs in using GitHub OAuth.
2. JWT token is generated.
3. User connects a GitHub repository.
4. GitHub Webhook is registered automatically.
5. GitHub sends webhook events.
6. RepoPilot processes incoming events.
7. Automation rules are executed.
8. Labels and comments are added to GitHub.
9. Slack notifications are sent.
10. Dashboard updates with automation history.

---

## Supported GitHub Events

- Issues Opened
- Pull Requests
- Push Events

---

## Automation Actions

- Add Labels
- Add Comments
- Slack Notifications
- Event Logging
- Activity Tracking

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/RepoPilot.git
```

---

### Backend

```bash
cd server
npm install
npm run dev
```

---

### Frontend

```bash
cd client
npm install
npm run dev
```

---

## Environment Variables

### Backend

```env
PORT=

MONGO_URI=

JWT_SECRET=

CLIENT_URL=

GITHUB_CLIENT_ID=

GITHUB_CLIENT_SECRET=

GITHUB_CALLBACK_URL=

GITHUB_WEBHOOK_SECRET=

SLACK_WEBHOOK_URL=
```

### Frontend

```env
VITE_API_URL=
```

---

## API Endpoints

### Authentication

```
GET /api/auth/github
GET /api/auth/github/callback
GET /api/auth/me
```

### Dashboard

```
GET /api/dashboard/stats
GET /api/dashboard/events
GET /api/dashboard/actions
GET /api/dashboard/repositories
```

### Repository

```
GET /api/repositories
POST /api/repositories/connect
```

### Webhooks

```
POST /api/webhooks/github
```

---

## Screens

- Landing Page
- Dashboard
- Repository Management
- Activity Logs
- Settings
- Authentication

---

## Future Improvements

- Custom Automation Rules
- AI-Based Issue Classification
- Microsoft Teams Integration
- Discord Notifications
- Email Notifications
- Repository Analytics
- Multiple Workspace Support
- Scheduled Automations
- Audit Logs
- Role-Based Access Control

---

## Deployment

### Frontend

- Vercel

### Backend

- Vercel

### Database

- MongoDB Atlas

---

## Author

**Mohan Kumar**

GitHub: https://github.com/mohankumar01012005

---

## License

This project is licensed under the MIT License.
