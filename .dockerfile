# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json внутрь контейнера
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы внутрь контейнера
COPY . .

# Собираем приложение
RUN npm run build

# Указываем команду для запуска приложения
CMD [ "npm", "start" ]
