FROM node:16.18-alpine3.16
# builder stage: goal is to build frontend
WORKDIR /app

# copy dependencies (less regularly changing)
COPY ./package.json .

# install production dependencies
RUN npm install --omit=dev

# copy sources
COPY . .

# run server
CMD [ "node", "server.js" ]