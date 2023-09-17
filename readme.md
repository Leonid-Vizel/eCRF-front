# ECRF - Project

A brief description of your React application.

## Table of Contents
- [Rules](#Rules)
- [Usage](#Usage)


## Rules

### types 
    - Наименование интерфейсов без префикса I
    - Интерфейсы для реакт компонентов должны называться как компонент с постфиксом Props
### exports 
    **Используется методалогия feature sliced design**
    - Все импорты внутри сущности должны быть относительными
        пример: **../component/component**
    - Все импорты вне сущности должны быть **АБСОЛЮТЫНМИ** и экспортироваться через publicApi 
        пример **features/component**
    - shared слой НЕ ИСПОЛЬЗУЕТ publicApi, используется только абсолютный импорт

## Usage

Запуск проекта

# Run the development server
npm run start:dev

# Build the production in development mode
npm run build:dev