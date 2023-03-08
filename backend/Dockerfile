#We use the node image available on container
FROM node:latest

WORKDIR /app
#We copy our dependencies 
COPY ./package*.json ./
#We install the packages
RUN npm install
#We copy our application
COPY . .
#We expose the port 3000(default port of our application)
EXPOSE 3000
#We start our backend on container start
CMD ["npm", "start"]