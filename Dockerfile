FROM node as builder
WORKDIR /app
COPY . /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install react-scripts -g --silent 
RUN npm run build 

FROM httpd 
WORKDIR /var/www/html
COPY --from=builder /app/build /usr/local/apache2/htdocs/
