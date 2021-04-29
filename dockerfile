FROM nginx:stable-alpine

COPY . /usr/share/nginx/html

# It checks itself status returning 1 or 0
# we can se if it is "healthy" or "unhealthy" in docker status
HEALTHCHECK --interval=1m --timeout=10s CMD curl --fail http://localhost:80 || exit 1

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]