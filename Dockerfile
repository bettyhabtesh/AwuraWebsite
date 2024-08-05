# Step 1: Use the official Node.js image.
FROM node:18 AS build

# Step 2: Set the working directory.
WORKDIR /app

# Step 3: Copy package.json and package-lock.json.
COPY package*.json ./

# Step 4: Install dependencies.
RUN npm install

# Step 5: Copy the rest of the application code.
COPY . .

# Step 6: Build the React app.
RUN npm run build

# Step 7: Use a lightweight web server to serve the app.
FROM nginx:alpine

# Step 8: Copy the build folder to Nginx's default folder.
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80.
EXPOSE 80

# Step 10: Start Nginx.
CMD ["nginx", "-g", "daemon off;"]
