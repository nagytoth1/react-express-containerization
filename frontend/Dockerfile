FROM node:18 AS builder
# builder stage: goal is to build frontend
WORKDIR /app

# copy dependencies (less regularly changing)
COPY ./package.json .

# install production dependencies
RUN npm install --omit=dev

# copy source code (more regularly changing)
COPY . .

# build frontend from source
RUN npm run build

FROM nginx:stable-alpine3.20-slim
COPY --from=builder /app/dist /usr/share/nginx/html
# add custom Nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD [ "nginx", "-g", "daemon off;" ]
