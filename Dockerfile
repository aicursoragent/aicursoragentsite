# Використовуємо офіційний Node.js образ
FROM node:18-alpine

# Встановлюємо робочу директорію
WORKDIR /app

# Копіюємо package.json та package-lock.json
COPY package*.json ./

# Встановлюємо залежності
RUN npm install --production

# Копіюємо всі файли проєкту
COPY . .

# Відкриваємо порт
EXPOSE 3000

# Встановлюємо змінну середовища
ENV NODE_ENV=production

# Запускаємо додаток
CMD ["npm", "start"]
