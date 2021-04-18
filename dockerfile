FROM nginx:stable-alpine

COPY ./dist /usr/share/nginx/html

EXPOSE 8080

# It checks itself status returning 1 or 0
# we can se if it is "healthy" or "unhealthy" in docker status
HEALTHCHECK --interval=1m --timeout=10s CMD curl --fail http://localhost:80 || exit 1

CMD ["npm", "run", "start"]