FROM oraclelinux:7-slim

RUN  yum -y install oracle-release-el7 oracle-nodejs-release-el7 && \
     yum-config-manager --disable ol7_developer_EPEL && \
     yum -y install oracle-instantclient19.3-basic nodejs && \
     rm -rf /var/cache/yum

WORKDIR /myapp
COPY ./ /myapp/
RUN npm install

CMD DEBUG=microservicios:* npm start
