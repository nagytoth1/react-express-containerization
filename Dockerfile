FROM node:18 AS builder
# builder stage: goal is to build frontend
WORKDIR /app

# copy dependencies (less regularly changing)
COPY frontend/package.json .

# install production dependencies
RUN npm install

# copy source code (more regularly changing)
COPY frontend/ ./

# build frontend from source
RUN npm run build

FROM node:16.18-alpine3.16
WORKDIR /app
# this is the backend stage (and the stage hosting frontend & backend )
# apk update might be needed
RUN apk add --no-cache nginx
# add custom Nginx configuration if needed
COPY nginx.conf /etc/nginx/http.d/default.conf
COPY backend/package.json .
# install backend dependencies & clear cache and package files
RUN npm install --omit=dev && \
    npm cache clean --force && \
    rm -rf /root/.npm
COPY --from=builder /app/dist /usr/share/nginx/html

COPY backend/ ./
EXPOSE 80

CMD [ "./entrypoint.sh" ]
