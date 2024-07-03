FROM node:20.15.0-slim as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npx parcel build --public-url /

FROM node:20.15.0-slim
RUN npm i -g http-server
COPY --from=builder /usr/src/app/dist /dist
EXPOSE 8080
CMD [ "http-server", "dist" ]