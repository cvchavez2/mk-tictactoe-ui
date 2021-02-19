FROM node:current as build
WORKDIR /workspace
COPY . .
RUN npm ci
RUN npm run build
EXPOSE 4200
CMD [ "npm", "start" ]
