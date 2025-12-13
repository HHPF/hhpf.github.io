@echo off

echo 正在部署HHPF文档网站...
echo.

:: 检查Git是否可用
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo 错误：未找到Git命令！
    pause
    exit /b 1
)

:: 拉取最新代码
echo 1. 拉取远程仓库最新更改...
git pull origin main
if %errorlevel% neq 0 (
    echo 错误：拉取失败！
    pause
    exit /b 1
)

:: 添加所有更改
echo 2. 添加所有更改...
git add .
if %errorlevel% neq 0 (
    echo 错误：添加更改失败！
    pause
    exit /b 1
)

:: 提交更改
echo 3. 提交更改...
git commit -m "自动更新文档" || echo 警告：没有需要提交的更改

:: 推送更改
echo 4. 推送更改...
git push origin main
if %errorlevel% neq 0 (
    echo 错误：推送失败！
    pause
    exit /b 1
)

echo.
echo 部署成功！
echo 本地访问：http://localhost:5173/
echo 远程访问：https://hhp.foundation
echo.
pause