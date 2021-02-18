FROM node:slim

# Create app directory
WORKDIR /alicia

# Install app dependencies
COPY package.json .

RUN npm update -g

RUN ["npm", "install"]

# Bundle app source
COPY . .

EXPOSE 8080
CMD npm run start
