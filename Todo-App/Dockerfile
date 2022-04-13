# Pull official node base image
FROM node:16.14.2 AS build

# Exposes the port
EXPOSE 3000

# Set working directory
WORKDIR /app

# Copies package.json to Docker container
COPY package.json ./

# Installs node packages
RUN npm install 

# Copies everything over to Docker container
COPY . ./

# Builds the application
RUN npm run build

# The entry point of the container and the command and parameters ran on startup 
ENTRYPOINT ["npm", "start"]