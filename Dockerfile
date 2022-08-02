FROM node:16.15.1 as base

# Add package file
COPY package.json ./
COPY yarn.lock ./
COPY scripts/dev.sh ./scripts/dev.sh
COPY scripts/nginx.conf ./scripts/nginx/nginx.conf
# COPY scripts/key.sh ./scripts/key.sh

# Install deps
RUN yarn install

# Copy source
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY openapi.json ./openapi.json

# Build dist
RUN yarn build

# Start production image build
FROM gcr.io/distroless/nodejs:16

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist

# Copy static files
COPY src/public dist/src/public

# Start KeyGen
RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install openssl
RUN openssl genrsa -des3 -out private.pem 2048
RUN openssl rsa -in private.pem -outform PEM -pubout -out public.pem

# Expose port 3000
EXPOSE 3000
CMD ["dist/src/server.js"]
