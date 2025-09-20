// Простий сервер для презентації
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Налаштування статичних файлів
app.use(express.static(path.join(__dirname, '..')));

// Головний маршрут - відкриваємо презентацію
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'presentation.html'));
});

// Маршрут для Slidev версії
app.get('/slides', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'slides.md'));
});

// Маршрут для тестів
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'test_presentation.html'));
});

// API маршрут для інформації про презентацію
app.get('/api/info', (req, res) => {
    res.json({
        title: 'Розумні дані з Cursor AI',
        version: '1.0.0',
        description: 'Презентація про використання штучного інтелекту в розробці',
        slides: 9,
        features: [
            'HTML презентація',
            'Slidev версія',
            'Адаптивний дизайн',
            'Клавіатурна навігація',
            'Тестові набори'
        ]
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`🚀 Презентація запущена на порту ${PORT}`);
    console.log(`📱 Відкрийте http://localhost:${PORT} для перегляду`);
    console.log(`🧪 Тести: http://localhost:${PORT}/test`);
    console.log(`📄 Slidev: http://localhost:${PORT}/slides`);
});
