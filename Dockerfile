FROM node:14.19-alpine3.16

ENV NODE_ENV=production \
  LOG_NAME=farm-service \
  LOG_LEVEL=info \
  NODE_PORT=3000 \
  NODE_HOST=0.0.0.0

WORKDIR /var/app

RUN apk update && \
  apk upgrade && \
  apk add git

RUN set -exo pipefail \
  && apk add --no-cache --virtual .gyp python3 make g++

COPY package.json package-lock.json /var/app/

RUN npm ci \
  && npm cache clean --force \
  && rm -rf .npmrc \
  && apk del .gyp

COPY . /var/app/

EXPOSE 3000

CMD ["npm", "start"]
