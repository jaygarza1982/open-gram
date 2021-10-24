#Build frontend web server
FROM node:14-alpine as build

WORKDIR /app

COPY . .

RUN yarn install && yarn build

#Build web server with built react app
FROM nginx:1.19

COPY --from=build /app/build /usr/share/nginx/html