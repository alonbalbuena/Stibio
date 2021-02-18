FROM node:slim

# Create app directory
WORKDIR /alicia

# Install app dependencies
COPY package.json .

RUN npm update -g

RUN ["npm", "install", "--production"]

# Bundle app source
COPY . .

EXPOSE 8080
CMD npm run start
