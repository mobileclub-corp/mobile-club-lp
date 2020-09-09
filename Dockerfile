# FROM node:13.12.0-alpine
FROM node:12.18.3-alpine

RUN apk add --no-cache python make g++ git
RUN apk add vips-dev fftw-dev \
    --no-cache --repository http://dl-3.alpinelinux.org/alpine/edge/community \
    --repository http://dl-3.alpinelinux.org/alpine/edge/main
RUN rm -fR /var/cache/apk/*

RUN mkdir /mobile-club-lp
ENV FRONT_ROOT /mobile-club-lp
WORKDIR $FRONT_ROOT

COPY ./package.json $FRONT_ROOT/package.json
COPY ./node_modules $FRONT_ROOT/node_modules
COPY ./yarn.lock $FRONT_ROOT/yarn.lock

RUN npm install -g gatsby-cli

ADD . $FRONT_ROOT

EXPOSE 8000