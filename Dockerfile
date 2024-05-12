# Use an official Node.js 20 image as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Transpile TypeScript to JavaScript
RUN npm run build

# Your application's port (adjust if it's different from what's declared in your environment variables)
EXPOSE 4000

# The command to run your application
CMD ["node", "app/index.js"]