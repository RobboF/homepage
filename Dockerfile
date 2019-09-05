FROM node as builder
WORKDIR /app
COPY ./data /app
ENV PATH /app/node_modules/.bin:$PATH
RUN npm install --silent
RUN npm install react-scripts -g --silent 
RUN npm run build 

FROM httpd 
COPY add.txt /usr/local/apache2/add.txt
RUN sed -i "/\<Directory.*htdocs\>/r /usr/local/apache2/add.txt" /usr/local/apache2/conf/httpd.conf


COPY --from=builder /app/build /usr/local/apache2/htdocs/
