# Stage 1 - build
FROM node:9 as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN ["yarn", "install"]
COPY . ./
ENV CI=true
RUN ["yarn", "test"]
RUN ["yarn", "build"]

# Stage 2 - serve
FROM node:9
RUN ["yarn", "global", "add", "serve"]
COPY --from=build /app/build /app
EXPOSE 5000
CMD ["serve", "-s", "/app"]