@echo off
echo Остановка процессов Node.js...
taskkill /F /IM node.exe 2>nul
timeout /t 3 /nobreak >nul

echo Перегенерация Prisma Client...
call npx prisma generate

echo Запуск сервера на порту 3001...
call npm run dev -- -p 3001

sleep 5

