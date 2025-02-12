FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate --schema=/app/prisma/schema.prisma

# Copy the rest of the project files
COPY . .

# Expose backend port
EXPOSE 5000

# Start backend server
CMD ["npm", "run", "dev"]
