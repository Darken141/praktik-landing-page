FROM node:latest

WORKDIR /app
COPY package*.json .
RUN npm install -g gatsby-cli
RUN npm install

ADD . .

EXPOSE 9000

RUN npm run build

CMD ["gatsby", "serve", "-H", "0.0.0.0"]


# GOOGLE_TRACKING_ID=G-GSR1MDE56B, FORM_HANDLER_API=https://us-central1-universal-sun-292721.cloudfunctions.net/formHandler TEST=thereIS