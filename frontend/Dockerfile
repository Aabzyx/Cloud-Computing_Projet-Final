#We use node image available on Dockerhub
FROM node:18-alpine
#we define our work directory
WORKDIR /usr/src/app
#We copy our application and dependencies in the container
COPY . .
#We install the packages
RUN ["npm", "install"]
#we build the application 
RUN ["npm", "run", "build"]
#We run our application on container start
CMD ["npm", "run", "preview"]