FROM alpine/git:v2.52.0
RUN apk update && \
    apk add --no-cache bash sudo nodejs pnpm

RUN adduser -D -h /home/dev dev
USER dev
WORKDIR /home/dev

# ENTRYPOINT [ "bash" ]