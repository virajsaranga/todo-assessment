# Todo Take-Home Assessment

## Overview
Simple To-Do SPA: create tasks (title + description), shows latest 5 tasks, mark Done hides the task. Frontend: React + MUI. Backend: Node.js + Express. DB: Microsoft SQL Server.

## Repo layout
- backend/ — Node.js backend (Express)
- frontend/ — React (Create React App) + MUI
- db.sql — SQL script to create DB/table/login
- docker-compose.yml — run full stack with Docker

## Local (no Docker) - quick start
1. Create DB and table in SSMS:
   - Open SSMS and run `db.sql`.
2. Update `backend/.env` (or create `.env` in `backend`):
  

  # . env example 
PORT=4000
DB_SERVER=localhost
DB_PORT=49725
DB_DATABASE=todo_db
DB_USER=todo_user
DB_PASSWORD=StrongPassword123!
DB_ENCRYPT=false