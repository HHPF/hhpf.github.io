@echo off

:: 设置颜色
echo [1m[36m=== HHPF文档网站部署脚本 ===[0m

:: 检查是否在git仓库中
if not exist ".git" (
    echo [1m[31m错误：当前目录不是git仓库！[0m
    pause
    exit /b 1
)

:: 拉取远程仓库最新更改
echo [1m[32m1. 拉取远程仓库最新更改...[0m
git pull origin main
if %errorlevel% neq 0 (
    echo [1m[31m错误：拉取远程仓库失败！[0m
    pause
    exit /b 1
)

:: 添加所有更改到暂存区
echo [1m[32m2. 添加所有更改到暂存区...[0m
git add .
if %errorlevel% neq 0 (
    echo [1m[31m错误：添加更改到暂存区失败！[0m
    pause
    exit /b 1
)

:: 检查是否有更改
setlocal enabledelayedexpansion
for /f %%i in ('git status --porcelain') do set "has_changes=1"
if not defined has_changes (
    echo [1m[33m警告：没有发现任何更改！[0m
    pause
    exit /b 0
)

:: 提交更改
echo [1m[32m3. 提交更改...[0m
git commit -m "自动更新文档内容"
if %errorlevel% neq 0 (
    echo [1m[31m错误：提交更改失败！[0m
    pause
    exit /b 1
)

:: 推送到远程仓库
echo [1m[32m4. 推送到远程仓库...[0m
git push origin main
if %errorlevel% neq 0 (
    echo [1m[31m错误：推送远程仓库失败！[0m
    pause
    exit /b 1
)

echo [1m[32m=== 部署成功！===[0m
echo [1m[36m本地访问地址：[0m http://localhost:5173/
echo [1m[36m远程访问地址：[0m https://hhp.foundation
pause
