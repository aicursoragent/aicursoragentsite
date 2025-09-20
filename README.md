# 🚀 Розумні дані з Cursor AI

Презентація про використання штучного інтелекту в розробці з Cursor AI.

## 📋 Опис

Ця презентація розповідає про:
- Що таке Cursor AI та його можливості
- Як працює штучний інтелект в розробці
- Практичні приклади використання
- Найкращі практики та рекомендації
- Майбутнє розробки з AI

## 🛠️ Технології

- **Express.js** - веб-сервер
- **HTML/CSS/JavaScript** - фронтенд
- **Node.js** - серверна частина
- **Python** - альтернативний сервер

## 🚀 Запуск локально

### Node.js версія
```bash
# Встановлення залежностей
npm install

# Запуск сервера
npm start
# або
npm run dev
```

### Python версія
```bash
# Запуск Python сервера
python server.py
```

## 📁 Структура проєкту

```
├── src/
│   └── index.js           # Express сервер
├── presentation.html      # HTML презентація
├── test_presentation.html # Тестовий набір
├── index.html            # Головна сторінка
├── server.py             # Python сервер
├── package.json          # Node.js залежності
├── render.yaml           # Конфігурація Render
└── Dockerfile            # Docker конфігурація
```

## 🌐 Деплой

### Render.com
1. Підключіть GitHub репозиторій
2. Render автоматично виявить конфігурацію
3. Деплой відбудеться автоматично

### Docker
```bash
# Збірка образу
docker build -t cursor-ai-presentation .

# Запуск контейнера
docker run -p 3000:3000 cursor-ai-presentation
```

## 📊 Доступні маршрути

- `/` - головна сторінка
- `/presentation.html` - HTML презентація
- `/test_presentation.html` - тести
- `/api/info` - API інформація

## 🧪 Тестування

Відкрийте `/test_presentation.html` для автоматичних тестів функціональності.

## 📄 Ліцензія

MIT
