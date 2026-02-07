FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --ignore-scripts

COPY . .

RUN npm run build

# ルートにさせない
RUN addgroup -S app && adduser -S app -G app
RUN chown -R app:app /app  
USER app

#ENV NODE_ENV=production

EXPOSE 3000

#CMD ["npm","run","start"]
