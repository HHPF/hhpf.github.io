@echo off
echo Deploying HHPF website...
echo.

:: Add all changes
echo 1. Adding all changes...
git add .

:: Ask for commit message with default value
echo 2. Committing changes...
set "commit_msg=Update website content"
set /p commit_msg=Enter commit message (default: %commit_msg%): 

:: Use user input or default message
git commit -m "%commit_msg%" || echo Warning: No changes to commit

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