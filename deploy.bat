@echo off

:: 简化版本的部署脚本，不使用颜色代码避免乱码

:: 检查是否在git仓库中
if not exist ".git" (
    echo 错误：当前目录不是git仓库！
    pause
    exit /b 1
)

:: 拉取远程仓库最新更改
echo 1. 拉取远程仓库最新更改...
git pull origin main
if %errorlevel% neq 0 (
    echo 错误：拉取远程仓库失败！
    pause
    exit /b 1
)

:: 添加所有更改到暂存区
echo 2. 添加所有更改到暂存区...
git add .
if %errorlevel% neq 0 (
    echo 错误：添加更改到暂存区失败！
    pause
    exit /b 1
)

:: 检查是否有更改
git status --porcelain > temp_changes.txt
set "has_changes="
for /f "tokens=*" %%i in (temp_changes.txt) do set has_changes=1
del temp_changes.txt 2>nul

if not defined has_changes (
    echo 警告：没有发现任何更改！
    pause
    exit /b 0
)

:: 提交更改
echo 3. 提交更改...
git commit -m "自动更新文档内容"
if %errorlevel% neq 0 (
    echo 错误：提交更改失败！
    pause
    exit /b 1
)

:: 推送到远程仓库
echo 4. 推送到远程仓库...
git push origin main
if %errorlevel% neq 0 (
    echo 错误：推送远程仓库失败！
    pause
    exit /b 1
)

echo === 部署成功！===
echo 本地访问地址：http://localhost:5173/
echo 远程访问地址：https://hhp.foundation
pause
