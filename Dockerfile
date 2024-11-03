# Use a Node.js base image to build the application
FROM node:20-alpine AS BUILDER

WORKDIR /app

COPY package*.json ./

RUN npm install --save --legacy-peer-deps

COPY . ./

# Собираем приложение
RUN npm run build

# Затем используем nginx для обслуживания собранного статического приложения
FROM nginx:1.21.0-alpine

# Убедитесь, что вы копируете файлы из правильного места
COPY --from=BUILDER /app/dist /usr/share/nginx/html
# Копируем наш конфигурационный файл nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 8080

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
