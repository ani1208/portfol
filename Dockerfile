#1getting the node of the latest version
FROM node:latest

#2set maintainer
LABEL maintainer "miiro@getintodevops.com"

#set a health check 
HEALTHCHECK --interval=5s\  
            --timeout=5s\
            CMD curl -f http://127.0.0.1:8000 || exit 1

#tell docker the port id 
EXPOSE 8000