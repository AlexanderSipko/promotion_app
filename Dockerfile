# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . .

# Install the application dependencies
RUN npm install

# Build the React application using Vite
RUN npm run build

# Expose port 3000
EXPOSE 4173

# Define the entry point for the container to run Vite preview
CMD ["npm", "run", "preview"]
