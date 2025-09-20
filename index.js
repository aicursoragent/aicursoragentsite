// Головний файл для Render - Express сервер
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

console.log('🚀 Запуск презентації "Розумні дані з Cursor AI"');

// Налаштування статичних файлів
app.use(express.static(path.join(__dirname)));

// Головний маршрут - відкриваємо презентацію
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Маршрут для презентації
app.get('/presentation', (req, res) => {
    res.sendFile(path.join(__dirname, 'presentation.html'));
});

// Маршрут для тестів
app.get('/test', (req, res) => {
    res.sendFile(path.join(__dirname, 'test_presentation.html'));
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
            'Адаптивний дизайн',
            'Клавіатурна навігація',
            'Тестові набори',
            'API ендпоінти'
        ],
        server: 'Express.js',
        status: 'running'
    });
});

// Health check для Render
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`📱 Презентація запущена на порту ${PORT}`);
    console.log(`🌐 Відкрийте http://localhost:${PORT} для перегляду`);
    console.log(`🧪 Тести: http://localhost:${PORT}/test`);
    console.log(`🔧 API: http://localhost:${PORT}/api/info`);
    console.log(`❤️ Health: http://localhost:${PORT}/health`);
});
