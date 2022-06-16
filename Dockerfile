FROM node:lts-slim as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx parcel build --public-url /app

FROM nginx:1.20-alpine
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html/app
