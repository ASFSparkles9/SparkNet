# Остановка всех процессов Node.js
Write-Host "Остановка процессов Node.js..."
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 3

# Перегенерация Prisma Client
Write-Host "Перегенерация Prisma Client..."
Set-Location $PSScriptRoot
& node .\node_modules\prisma\build\index.js generate

# Запуск сервера
Write-Host "Запуск сервера на порту 3001..."
& node .\node_modules\next\dist\bin\next dev -p 3001

