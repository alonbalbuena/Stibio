FROM node:15.8.0-alpine3.13

# Create app directory
WORKDIR /alicia

# Install app dependencies
COPY package.json .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD npm run start
