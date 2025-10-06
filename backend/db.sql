CREATE DATABASE todo_db;
USE todo_db;
CREATE TABLE dbo.task (
  id INT IDENTITY(1,1) PRIMARY KEY,
  title NVARCHAR(255) NOT NULL,
  description NVARCHAR(MAX),
  created_at DATETIME2 NOT NULL DEFAULT SYSUTCDATETIME(),
  completed BIT NOT NULL DEFAULT 0
);
CREATE LOGIN todo_user WITH PASSWORD = 'StrongPassword123!';
USE todo_db;
CREATE USER todo_user FOR LOGIN todo_user;
ALTER ROLE db_owner ADD MEMBER todo_user;
