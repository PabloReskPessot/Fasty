FROM postgres:15

RUN apt-get update && apt-get install -y curl

COPY wait/wait-for-it.sh /wait/
COPY seed/ /seed/
COPY seed.sh /seed.sh

RUN chmod +x /wait/wait-for-it.sh \
    && chmod +x /seed.sh \
    && cp /usr/share/zoneinfo/America/Argentina/Buenos_Aires /usr/share/zoneinfo/America/Buenos_Aires
