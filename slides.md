---
theme: default
background: https://source.unsplash.com/1920x1080/?technology,ai
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Розумні дані з Cursor AI
  Презентація про використання штучного інтелекту в розробці
drawings:
  persist: false
transition: slide-left
title: Розумні дані з Cursor AI
---

# Розумні дані з Cursor AI

Сучасні підходи до розробки з використанням штучного інтелекту

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Почнемо презентацію <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
layout: default
---

# Що таке Cursor AI?

<div class="grid grid-cols-2 gap-4">

<div>

## Основні можливості

- **Автодоповнення коду** - розумні пропозиції на основі контексту
- **Рефакторинг** - автоматичне покращення структури коду
- **Генерація коду** - створення функцій та компонентів
- **Аналіз помилок** - виявлення та виправлення багів

</div>

<div>

## Переваги

- 🚀 **Швидкість розробки** - збільшення продуктивності в 2-3 рази
- 🎯 **Точність** - високоякісні пропозиції коду
- 🔄 **Інтеграція** - робота безпосередньо в IDE
- 📚 **Навчання** - адаптація до стилю розробника

</div>

</div>

---
layout: image-right
image: https://source.unsplash.com/800x600/?coding,programming
---

# Як працює Cursor AI?

## Принцип роботи

Cursor AI використовує передові моделі машинного навчання для:

- **Аналізу контексту** - розуміння поточного коду та завдання
- **Генерації рішень** - створення відповідного коду
- **Оптимізації** - покращення існуючих рішень

## Технології

- GPT-4 та інші великі мовні моделі
- Спеціалізовані моделі для коду
- Інтеграція з популярними IDE

---
layout: two-cols
---

# Практичні приклади

## Автодоповнення

```javascript
// Починаєте писати функцію
function calculateTotal(items) {
  // Cursor AI запропонує:
  return items.reduce((sum, item) => 
    sum + item.price * item.quantity, 0
  );
}
```

## Рефакторинг

```javascript
// Старий код
if (user.age >= 18) {
  return "adult";
} else {
  return "minor";
}

// Cursor AI запропонує:
return user.age >= 18 ? "adult" : "minor";
```

::right::

## Генерація компонентів

```vue
<template>
  <div class="user-card">
    <img :src="user.avatar" :alt="user.name" />
    <h3>{{ user.name }}</h3>
    <p>{{ user.email }}</p>
  </div>
</template>

<script setup>
defineProps({
  user: Object
})
</script>
```

## Аналіз помилок

```javascript
// Cursor AI виявить проблему:
const users = await fetchUsers();
users.forEach(user => {
  console.log(user.name); // Можлива помилка, якщо user.name undefined
});
```

---
layout: center
class: text-center
---

# Статистика використання

<div class="grid grid-cols-3 gap-8 mt-8">

<div>
  <div class="text-6xl font-bold text-blue-500">85%</div>
  <div class="text-lg">Розробників використовують AI</div>
</div>

<div>
  <div class="text-6xl font-bold text-green-500">3x</div>
  <div class="text-lg">Збільшення швидкості</div>
</div>

<div>
  <div class="text-6xl font-bold text-purple-500">90%</div>
  <div class="text-lg">Задоволені результатом</div>
</div>

</div>

---
layout: default
---

# Найкращі практики

<div class="grid grid-cols-2 gap-6">

<div>

## ✅ Рекомендації

- **Чіткі коментарі** - пояснюйте контекст для AI
- **Поступове впровадження** - починайте з простих завдань
- **Перевірка коду** - завжди рев'юйте згенерований код
- **Навчання команди** - інвестуйте в підготовку розробників

</div>

<div>

## ❌ Помилки

- **Сліпе довіряння** - не перевіряти згенерований код
- **Нечіткі запити** - неконкретні інструкції для AI
- **Ігнорування безпеки** - не враховувати аспекти безпеки
- **Відсутність тестування** - не тестувати AI-генерований код

</div>

</div>

---
layout: image-left
image: https://source.unsplash.com/800x600/?future,technology
---

# Майбутнє розробки

## Тренди

- **Автоматизація** - більше рутинних завдань буде автоматизовано
- **Спеціалізація** - AI стане експертом у конкретних доменах
- **Інтеграція** - глибша інтеграція з інструментами розробки
- **Колаборація** - AI як повноцінний член команди

## Вплив на професію

Розробники зосередяться на:
- Архітектурних рішеннях
- Креативних завданнях
- Комунікації з командою
- Стратегічному плануванні

---
layout: center
class: text-center
---

# Висновки

<div class="text-left max-w-2xl mx-auto">

## Ключові моменти

1. **Cursor AI** - це потужний інструмент для сучасного розробника
2. **Продуктивність** - значне збільшення швидкості розробки
3. **Якість** - покращення якості коду та зменшення помилок
4. **Майбутнє** - AI стає невід'ємною частиною розробки

## Рекомендації

- Почніть використовувати AI-інструменти вже сьогодні
- Інвестуйте в навчання команди
- Розробіть стратегію впровадження
- Будьте готові до змін у процесах розробки

</div>

---
layout: end
class: text-center
---

# Дякую за увагу!

<div class="pt-12">
  <span class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Питання та обговорення
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <a href="https://cursor.sh" target="_blank" alt="Cursor AI"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>
