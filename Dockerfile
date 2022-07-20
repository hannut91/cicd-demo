FROM node:16.14.2

COPY app.js app.js
COPY node_modules node_modules

ENTRYPOINT ["node", "app.js"]
