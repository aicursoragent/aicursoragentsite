#!/usr/bin/env python3
"""
Простий HTTP сервер для презентації "Розумні дані з Cursor AI"
"""

import http.server
import socketserver
import os
import webbrowser
from urllib.parse import urlparse

class PresentationHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Парсимо URL
        parsed_path = urlparse(self.path)
        path = parsed_path.path
        
        # Якщо запит на корінь, показуємо головну сторінку
        if path == '/' or path == '':
            self.path = '/index.html'
        
        # Обробляємо API запити
        elif path == '/api/info':
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            
            info = {
                "title": "Розумні дані з Cursor AI",
                "version": "1.0.0",
                "description": "Презентація про використання штучного інтелекту в розробці",
                "slides": 9,
                "features": [
                    "HTML презентація",
                    "Slidev версія", 
                    "Адаптивний дизайн",
                    "Клавіатурна навігація",
                    "Тестові набори"
                ],
                "server": "Python HTTP Server"
            }
            
            import json
            self.wfile.write(json.dumps(info, ensure_ascii=False, indent=2).encode('utf-8'))
            return
        
        # Викликаємо батьківський метод для обробки статичних файлів
        super().do_GET()
    
    def end_headers(self):
        # Додаємо CORS заголовки
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def start_server(port=8000):
    """Запускає HTTP сервер"""
    try:
        with socketserver.TCPServer(("", port), PresentationHandler) as httpd:
            print(f"🚀 Презентація запущена на порту {port}")
            print(f"📱 Відкрийте http://localhost:{port} для перегляду")
            print(f"🧪 Тести: http://localhost:{port}/test_presentation.html")
            print(f"📄 Slidev: http://localhost:{port}/slides.md")
            print(f"🔧 API: http://localhost:{port}/api/info")
            print("\nНатисніть Ctrl+C для зупинки сервера")
            
            # Автоматично відкриваємо браузер
            try:
                webbrowser.open(f'http://localhost:{port}')
            except:
                pass
            
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n👋 Сервер зупинено")
    except OSError as e:
        if e.errno == 98:  # Address already in use
            print(f"❌ Порт {port} вже використовується. Спробуйте інший порт.")
            start_server(port + 1)
        else:
            print(f"❌ Помилка запуску сервера: {e}")

if __name__ == "__main__":
    import sys
    
    # Перевіряємо аргументи командного рядка
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Невірний номер порту. Використовується порт 8000.")
    
    start_server(port)
