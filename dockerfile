FROM nginx:stable-alpine

WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

RUN mkdir Stibio

RUN ls

COPY /dist/* ./Stibio/

# It checks itself status returning 1 or 0
# we can se if it is "healthy" or "unhealthy" in docker status
HEALTHCHECK --interval=1m --timeout=10s CMD curl --fail http://localhost:80 || exit 1

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]