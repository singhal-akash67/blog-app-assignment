# base image
# imports node js and npm automatically
FROM node:10

# Create app directory
WORKDIR /usr/src/app


# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

#Bundle source code from my current folder into the docker image
COPY . .
#image will run app on 8080
EXPOSE 3000

ENTRYPOINT ["node"]

CMD ["./bin/www"]