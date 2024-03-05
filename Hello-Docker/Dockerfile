# Pull official node base image
FROM node:21 AS build

EXPOSE 3000

# Set working directory
WORKDIR /app

# Copies package.json to Docker container
COPY . .

# Installs node packages
RUN npm i -g npm
RUN npm install 

# Run the application
CMD [ "npm", "run", "start" ]