##Hello Docker
- docker build . -t hello-docker:1.0.0
- docker image ls
- docker run -p 3000:3000 -d --name hello-docker -e NODE_ENV=production hello-docker:1.0.0
- docker ps

##Todo App

- docker build . -t todo-app:1.0.0
- docker build . -f Dockerfile.Multistage -t todo-app:2.0.0
- docker run -p 3000:3000 -d --name todo-app todo-app:1.0.0
- docker ps
- docker ps -a
- docker run -p 8080:3000 -d --name todo-app todo-app:1.0.0

##Exmaple Voting App
- docker-compose build
- docker-compose up -d