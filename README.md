# TaskManager
A full-stack web application to manage tasks using: - .NET Core Web API (C#) - SQL Server (EF Core) - HTML, CSS, JavaScript, TypeScript





git init

## 🔗 Add Remote Repository
```bash
git remote add origin https://github.com/avinashj387/TaskManager.git
```

## 🚧 Stage and Commit Changes
```bash
git add .
git commit -m "Initial commit: Task Manager project structure"
```

## 🚀 Push Initial Commit (Set main branch)
```bash
git branch -M main
git push --set-upstream origin main
```

## 🔁 Pull Remote Repo If It Already Has Files
```bash
git pull origin main --allow-unrelated-histories
```

## 🔁 Set Tracking Information
```bash
git push --set-upstream origin main
```

## 🌱 Create and Switch to New Branch
```bash
git checkout -b feature/branch-name
```

## 🚀 Push New Branch to GitHub
```bash
git push --set-upstream origin feature/branch-name
```

## 🔄 Switch Between Branches
```bash
git checkout main                     # Go to main
git checkout feature/branch-name     # Go to feature branch
```

## 📜 List Branches
```bash
git branch           # local
git branch -r        # remote
git branch -a        # all
```

## ❌ Delete Branch
```bash
git branch -d branch-name                 # delete local
git push origin --delete branch-name     # delete remote
```

## 💡 Example: Create, Commit and Push New Branch
```bash
git checkout -b bugfix/login-issue
# (make changes)
git add .
git commit -m "Fix login bug"
git push --set-upstream origin bugfix/login-issue
```
