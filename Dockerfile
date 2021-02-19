#FROM node:current as build
#WORKDIR /workspace
#COPY . .
#RUN npm ci
#RUN npm run build
#CMD [ "npm", "start" ]

FROM node:current as build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:current as prod-stage
COPY --from=build /app/dist/dockerangular /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "deamon off;"]
