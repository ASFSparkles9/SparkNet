# SparkNet

SparkNet — профессиональное MVP платформы для соединения авторов идей с исполнителями.

## Запуск

1. Установите Node.js LTS и npm.
2. Установите зависимости: `npm install`.
3. Настройте переменные окружения: создайте `.env` по примеру `.env.example`.
4. Сгенерируйте Prisma клиент и примените схему: `npm run prisma:generate` и `npm run db:push`.
5. Запустите dev: `npm run dev`.

## Технологии

- Next.js App Router (TS, Tailwind)
- NextAuth + PrismaAdapter (GitHub OAuth)
- Prisma + SQLite

## Фичи MVP

- Авторизация через GitHub
- Публикация идей, список идей, детальная страница
- Комментарии (базовые), теги


