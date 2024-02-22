# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Build the application
RUN npm run build

# Use an official Nginx runtime as a parent image for the runtime stage
FROM nginx:stable-alpine

# Copy the build output to replace the default Nginx contents.
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 on the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

