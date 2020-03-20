cd /home/data/vue-blog-index
echo 开始执行
git pull && docker stop blog_front && docker rm blog_front && docker build -t yumancang/blog_front . && docker run -itd --name=blog_front -p 80:80 -p 8080:8080 yumancang/blog_front /bin/sh
echo 执行完毕