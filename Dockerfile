# Use a Node.js base image to build the application
FROM node:20-alpine AS BUILDER

WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application
RUN npm run build

# Use Nginx to serve the built application
FROM nginx:1.21.0-alpine

# Copy the build output from the builder stage to Nginx
COPY --from=BUILDER /app/dist /usr/share/nginx/html

# Copy the Nginx configuration file
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 443

# Command to run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
