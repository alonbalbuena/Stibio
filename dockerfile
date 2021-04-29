FROM httpd:2.4.46-alpine

WORKDIR /usr/local/apache2/htdocs/

# Remove default static assets
RUN rm -rf ./*

COPY . ./Stibio

# It checks itself status returning 1 or 0
# we can se if it is "healthy" or "unhealthy" in docker status
HEALTHCHECK --interval=1m --timeout=10s CMD curl --fail http://localhost:80 || exit 1
