# Use a Node.js base image
FROM node:16 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port used by React's dev server
EXPOSE 3000

# Run React's development server
CMD ["npm", "start"]
