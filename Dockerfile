FROM node:22.14-alpine
WORKDIR /app
COPY package.json ./
RUN npm install -g pnpm@9.15.4
RUN pnpm install
COPY . .
ENV NODE_ENV=production
RUN pnpm run build
CMD ["pnpm", "start"]
EXPOSE 3000