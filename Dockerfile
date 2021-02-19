# stage 1 -> build img to generate dist folder which contains every deployable file
FROM node:latest as build
WORKDIR /app
COPY . .
# ^ copy everything into the /app directory
RUN npm install
RUN npm run build --prod

#stage 2 -> running the application, nginx is optimize for production
FROM nginx:latest as prod-stage
COPY --from=build /app/dist/TicTacToeUI /usr/share/nginx/html
EXPOSE 80
