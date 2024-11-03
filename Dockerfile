FROM node:20-alpine as BUILDER

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Затем используем nginx для обслуживания собранного статического приложения
FROM nginx:1.21.0-alpine

COPY --from=BUILDER /app/dist /usr/share/nginx/html
# Копируем наш конфигурационный файл nginx
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]