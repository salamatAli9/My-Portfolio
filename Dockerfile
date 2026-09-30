FROM node:22-alpine

WORKDIR /app

# 1. Install dependencies first (for caching)
COPY package*.json ./
RUN npm install

# 2. Copy EVERYTHING (index.html, vite.config.js, etc.)
# Ensure you have a .dockerignore to skip node_modules!
COPY . .

# 3. Build and cleanup
RUN npm install -g serve@latest \
    && npm run build \
    && rm -rf node_modules

# Vite builds to 'dist', not 'build'
EXPOSE 3000
CMD [ "serve", "-s", "dist", "-l", "3000" ]