# Pull official node base image
FROM node:16.14.2 AS build

# Set working directory
WORKDIR /app

# Copies package.json to Docker container
COPY . .

# Installs node packages
RUN npm i -g npm

RUN npm install 

# Builds the application
RUN npm run build

CMD [ "node", "server.js" ]