FROM nginx:1.19.2-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY ./build /www

CMD ["nginx", "-g", "daemon off;"]
