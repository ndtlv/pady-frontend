FROM node:18-alpine as base

# Dependency installer stage 
FROM base as installer 

WORKDIR /app

COPY package.json package-lock.json .

RUN npm update && npm install

# Builder stage 
FROM base as builder 

WORKDIR /app

COPY . .
COPY --from=installer /app/node_modules ./node_modules

RUN npm run build

# Run stage
FROM base as runner

WORKDIR /app

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
