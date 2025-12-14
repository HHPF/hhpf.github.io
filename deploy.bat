@echo off
echo Deploying HHPF website...
echo.

:: Add all changes
echo 1. Adding all changes...
git add .

:: Use default commit message
echo 2. Committing changes...
git commit -m "Update website content" || echo Warning: No changes to commit

:: Push to remote
echo 3. Pushing to remote repository...
git push origin main

:: Deployment completed
echo.
echo Deployment completed!
echo Local access: http://localhost:5173/
echo Remote access: https://hhp.foundation
echo.
pause