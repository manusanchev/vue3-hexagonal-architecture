FROM node:22-alpine AS base
RUN npm install -g pnpm

FROM base AS build-stage
WORKDIR /app

COPY package*.json ./
RUN pnpm install

COPY . .
RUN pnpm run build

FROM nginx:stable-alpine AS production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
