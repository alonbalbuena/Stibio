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

# It checks itself status returning 1 or 0
# we can se if it is "healthy" or "unhealthy" in docker status
HEALTHCHECK --interval=1m --timeout=10s CMD curl --fail http://localhost:8080 || exit 1     

CMD ["npm", "run", "start"]
