# Webpack Advanced Configuration Guide

Детальний посібник по використанню розширеної конфігурації Webpack для цього проекту.

## 📋 Зміст

1. [DevServer](#devserver)
2. [CSS/SCSS/LESS](#preprocessorsy)
3. [TypeScript](#typescript)
4. [Babel](#babel)
5. [ESLint](#eslint)
6. [Bundle Analyzer](#bundle-analyzer)

---

## DevServer

### Що таке DevServer?

DevServer - це вбудований веб-сервер Webpack, що забезпечує автоматичне перезавантаження сторінки при змінах у коді.

### Конфігурація в webpack.config.js

```javascript
devServer: {
  static: {
    directory: path.join(__dirname, 'dist'),
  },
  port: 3000,
  hot: true,                    // Hot Module Replacement
  open: true,                   // Автоматично відкрити браузер
  compress: true,               // Gzip compression
  historyApiFallback: true,     // Перенаправлення для SPA
  client: {
    overlay: {
      errors: true,             // Показувати помилки
      warnings: false,          // Не показувати попередження
    },
  },
}
```

### Використання

```bash
npm start
```

Запускає dev server на `http://localhost:3000`. При збереженні файлів:
- Страница автоматично перезавантажується
- Hot Module Replacement зберігає стан застосунку
- Помилки відображаються в браузері

---

## Препроцесори

### CSS

**Як це працює:**
- CSS файли імпортуються в JavaScript
- `css-loader` обробляє `@import` та `url()`
- `style-loader` (dev) вставляє CSS у DOM
- `MiniCssExtractPlugin` (prod) витягує CSS в окремі файли

**Приклад:**

```javascript
// src/index.js
import './styles/style.css';
```

```css
/* src/styles/style.css */
body {
  font-family: Arial, sans-serif;
  background: #f0f0f0;
}
```

### SCSS/Sass

**Особливості:**
- Вкладений синтаксис (nesting)
- Змінні та функції
- Примішки (mixins)
- Математичні операції

**Приклад:**

```scss
// src/styles/variables.scss
$primary-color: #667eea;
$spacing-md: 1.5rem;

@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// src/styles/components.scss
@import './variables';

.btn {
  @include flex-center;
  padding: $spacing-md;
  color: $primary-color;
  
  &:hover {
    background-color: darken($primary-color, 10%);
  }
}
```

**Використання в проекті:**

```javascript
// src/index.js
import './styles/variables.scss';
import './styles/components.scss';
```

### LESS

**Особливості:**
- Схожа на SCSS, але з деякими відмінностями
- Змінні з префіксом `@`
- Примішки без `@mixin`
- Guard expressions для логіки

**Приклад:**

```less
// src/styles/theme.less
@primary: #667eea;
@shadow-md: 0 4px 15px rgba(0, 0, 0, 0.1);

.shadow(@x: 0, @y: 4px) {
  box-shadow: @x @y @shadow-md;
}

.card {
  .shadow();
  color: @primary;
  
  &:hover {
    .shadow(0, 8px);
  }
}
```

**Компіляція:**

```bash
npm run build
```

---

## TypeScript

### Налаштування

**tsconfig.json** - конфігурація компілятора TypeScript:

```json
{
  "compilerOptions": {
    "target": "ES2020",           // Версія JavaScript
    "module": "ESNext",           // Формат модулів
    "lib": ["ES2020", "DOM"],     // Типи для DOM API
    "strict": true,               // Строгий режим типізації
    "esModuleInterop": true,      // Сумісність модулів
    "sourceMap": true,            // Вихідні карти
  }
}
```

### Приклад TypeScript файлу

**src/utils.ts:**

```typescript
interface Logger {
  log: (message: string) => void;
  error: (message: string) => void;
}

export const createLogger = (): Logger => ({
  log: (msg) => console.log(`[LOG] ${msg}`),
  error: (msg) => console.error(`[ERROR] ${msg}`),
});

export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US').format(date);
};
```

**Використання:**

```typescript
// src/index.js
import { createLogger, formatDate } from './utils';

const logger = createLogger();
logger.log('App started at ' + formatDate(new Date()));
```

### Типи для проекту

**src/types.ts** - визначення типів:

```typescript
export interface BuildInfo {
  timestamp: Date;
  version: string;
  mode: 'development' | 'production';
}

export interface AppConfig {
  apiUrl: string;
  debugMode: boolean;
}

export class AppError extends Error {
  constructor(
    public code: string,
    public statusCode: number = 500,
    message: string = 'An error occurred'
  ) {
    super(message);
    this.name = 'AppError';
  }
}
```

---

## Babel

### Що таке Babel?

Babel - це транспайлер, що перетворює сучасний JavaScript (ES6+) на сумісний з старшими браузерами код.

### Конфігурація (.babelrc)

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "useBuiltIns": "usage",
        "corejs": "3"
      }
    ],
    "@babel/preset-typescript"
  ]
}
```

### Приклади трансформацій

**Вхідний код (ES6+):**

```javascript
// Arrow functions
const add = (a, b) => a + b;

// Template literals
const greeting = `Hello, ${name}!`;

// Destructuring
const { x, y } = point;

// Default parameters
function greet(name = 'World') {
  console.log(`Hi, ${name}`);
}

// Async/await
async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}
```

**Вихідний код (ES5, сумісний з IE11):**

```javascript
var add = function(a, b) {
  return a + b;
};

var greeting = "Hello, " + name + "!";

var x = point.x, y = point.y;

function greet(name) {
  name = name === void 0 ? 'World' : name;
  console.log("Hi, " + name);
}
```

### Поліфіли

Babel автоматично додає поліфіли для:
- Array методів (map, filter, reduce, etc.)
- Promise
- Set/Map
- Інших ES6+ API

---

## ESLint

### Що таке ESLint?

ESLint - це інструмент для перевірки якості коду, що знаходить помилки та видає попередження.

### Конфігурація (.eslintrc.json)

```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": ["eslint:recommended"],
  "parser": "@typescript-eslint/parser",
  "rules": {
    "indent": ["error", 2],
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "no-console": "warn"
  }
}
```

### Правила в проекті

| Правило | Рівень | Опис |
|---------|--------|------|
| `indent` | error | 2 пробіли для відступів |
| `quotes` | error | Одинарні лапки для рядків |
| `semi` | error | Обов'язкова крапка з комою |
| `no-unused-vars` | error | Заборона невживаних змінних |
| `no-console` | warn | Попередження при console.log |

### Використання

```bash
# Перевірити весь код
npm run lint

# Автоматично виправити помилки
npx eslint src --fix
```

### Приклади помилок та виправлень

**Помилка: Невживана змінна**

```javascript
// ESLint error
const unusedVar = 42;
console.log('Hello');

// Виправлено
console.log('Hello');
```

**Помилка: Відсутня крапка з комою**

```javascript
// ESLint error
const name = 'John'
const age = 30

// Виправлено
const name = 'John';
const age = 30;
```

**Попередження: console.log**

```javascript
// ESLint warning
console.log('Debug message');

// Виправлено (для production)
// Видалити або замінити на logger
logger.debug('Debug message');
```

---

## Bundle Analyzer

### Що таке Bundle Analyzer?

Bundle Analyzer - це інструмент, що показує розмір та вміст вашого бандлу.

### Використання

```bash
# Linux/Mac
ANALYZE=true npm run build

# Windows PowerShell
$env:ANALYZE='true'; npm run build

# Windows CMD
set ANALYZE=true && npm run build
```

### Результати

Після будування буде автоматично відкритий файл `dist/report.html` з:
- Інтерактивною картою бандлу
- Розміром кожного модулю
- Можливістю пошуку та фільтрування
- Можливістю визначення великих залежностей

### Поради з оптимізації

1. **Видаліть неживі залежності**
   ```bash
   npm ls  # Список всіх залежностей
   ```

2. **Розділіть на chunks**
   ```javascript
   // Dynamic import для код-сплітингу
   const heavy = () => import('./heavy-module');
   
   heavy().then(module => {
     // Використання модулю
   });
   ```

3. **Замініть важку бібліотеку на легшу альтернативу**
   - moment.js → date-fns або dayjs
   - lodash → lodash-es (з tree-shaking)

---

## Повний робочий приклад

### 1. Створіть компонент з TypeScript

**src/components/Button.ts:**

```typescript
interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export class Button {
  private element: HTMLButtonElement;

  constructor(private props: ButtonProps) {
    this.element = document.createElement('button');
    this.element.textContent = props.text;
    this.element.className = props.className || 'btn';
    this.element.addEventListener('click', () => props.onClick());
  }

  render(): HTMLButtonElement {
    return this.element;
  }
}
```

### 2. Імпортуйте стилі

**src/styles/button.scss:**

```scss
@import './variables';

.btn {
  padding: $spacing-md;
  background: $primary-color;
  color: white;
  border: none;
  border-radius: $border-radius-md;
  cursor: pointer;
  transition: all $transition-normal;

  &:hover {
    background: darken($primary-color, 10%);
  }
}
```

### 3. Використайте в index.js

**src/index.js:**

```javascript
import './styles/button.scss';
import { Button } from './components/Button';

const button = new Button({
  text: 'Click me',
  onClick: () => alert('Clicked!'),
  className: 'btn'
});

document.body.appendChild(button.render());
```

### 4. Запустіть dev server

```bash
npm start
```

---

## Налагодження

### Разив Sourcemaps

У розробці:
```javascript
devtool: 'cheap-module-source-map'  // Швидкі карти для розробки
```

У production:
```javascript
devtool: 'source-map'  // Повні карти для налагодження
```

### Логування у консолі браузера

```javascript
// Використовуйте логер з utils.ts
import { createLogger } from './utils';

const logger = createLogger();
logger.log('Application state changed');
logger.error('Failed to load data');
logger.warn('Deprecated API used');
```

---

## Командови

```bash
# Запуск dev сервера
npm start

# Production будування
npm run build

# Development будування
npm run dev

# Перевірка коду
npm run lint

# Автоправка ESLint помилок
npx eslint src --fix

# Аналіз бандлу
ANALYZE=true npm run build
```

---

## Рекомендації та best practices

1. ✅ Завжди імпортуйте стилі в JS файли
2. ✅ Використовуйте TypeScript для критичного коду
3. ✅ Запускайте ESLint перед коммітом
4. ✅ Аналізуйте бандл регулярно
5. ❌ Не закоментовуйте код - видаліть його
6. ❌ Не використовуйте `var` - тільки `const` та `let`
7. ❌ Не ігноруйте попередження ESLint

---

**Важливо:** Цей посібник охоплює основи. Для більше інформації дивіться:
- [Webpack документація](https://webpack.js.org/concepts/)
- [Babel документація](https://babeljs.io/docs)
- [TypeScript документація](https://www.typescriptlang.org/docs/)
- [ESLint документація](https://eslint.org/docs/rules/)
