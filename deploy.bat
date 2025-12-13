@echo off
chcp 65001 >nul

echo 正在部署HHPF文档网站...
echo.

echo 1. 拉取最新代码...
git pull origin main
if errorlevel 1 (
    echo 错误：拉取失败！
    pause
    exit /b 1
)

echo 2. 添加所有更改...
git add .
if errorlevel 1 (
    echo 错误：添加更改失败！
    pause
    exit /b 1
)

echo 3. 提交更改...
git commit -m "自动更新"

echo 4. 推送更改...
git push origin main
if errorlevel 1 (
    echo 错误：推送失败！
    pause
    exit /b 1
)

echo.
echo 部署完成！
echo 本地访问：http://localhost:5173/
echo 远程访问：https://hhp.foundation
echo.
pause