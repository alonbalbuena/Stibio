FROM httpd:2.4.46-alpine

WORKDIR /var/www/html

# Remove default static assets
RUN rm -rf ./*

RUN ls .

COPY . .

# It checks itself status returning 1 or 0
# we can se if it is "healthy" or "unhealthy" in docker status
HEALTHCHECK --interval=1m --timeout=10s CMD curl --fail http://localhost:80 || exit 1

CMD [“/usr/sbin/httpd”, “-D”, “FOREGROUND”]
