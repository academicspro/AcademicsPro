# Use Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the frontend code
COPY . .

# Build the frontend
RUN npm run build

# Serve the frontend with a simple web server
CMD ["npx", "serve", "-s", "dist"]

# Expose frontend port
EXPOSE 3000
