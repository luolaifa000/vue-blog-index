FROM hkccr.ccs.tencentyun.com/yumancang/node_nginx_vue_base

MAINTAINER laifaluo@126.com

WORKDIR /home/user00/

ADD ./ /home/user00/web/
ADD ./docker/nginx.conf /etc/nginx/
ADD ./docker/blog-front.conf /etc/nginx/conf.d/
ADD ./docker/bin/*.sh ./

RUN chown -R user00:user00 ./
RUN chmod 774 ./*.sh

#启动服务
ENTRYPOINT /bin/bash /home/user00/web-queue-server.sh


#docker build -t yumancang/blog_front .
#docker run -itd --name=blog_front -p 80:80 -p 8080:8080 yumancang/blog_front /bin/sh
