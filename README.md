# My Node.js API Project

**Overview**

This project is a Node.js application that fetches and serves dummy JSON data. The application uses Express.js to create an API endpoint that supports data retrieval, filtering, and sorting. The data is initially fetched from a URL and stored locally in a JSON file. The project also includes API documentation created using Postman.

# Features

- Fetches and stores dummy JSON data from a remote URL.
- Provides an API endpoint to retrieve data.
- Supports filtering and sorting of data based on query parameters.
- Includes API documentation accessible via Postman.
  
# Getting Started

**Prerequisites**

- Node.js and npm (Node Package Manager) installed. You can download them from nodejs.org.
  
**Project Setup**

- Clone the Repository:

      git clone git@github.com:sgnhyperion/Rocketium-Project_Backend.git
      cd your-repository
  
**Install Dependencies:**

- Navigate to the project directory and install the required npm packages:

      npm install
  

The project will fetch data from the remote URL and store it in data/dummyData.json if the file does not already exist. You can manually trigger this data fetch by running:

**Running the Server**
- Start the Server:

**Run the following command to start the server:**

    npm start
The server will start on port 3000 by default. You can change the port by setting the PORT environment variable.

**Access the API:**

- Retrieve Data:

      GET http://localhost:3000/api/data
- Filter Data:

You can filter the data by adding query parameters:

    GET http://localhost:3000/api/data?filterfield=name&filter=John
- Sort Data:

You can sort the data by adding the sortby query parameter:

    GET http://localhost:3000/api/data?sortby=name
- Filter and Sort Data:

Combine filtering and sorting:


    GET http://localhost:3000/api/data?filterfield=name&filter=John&sortby=age
    
# API Documentation
API documentation is available via Postman. You can view it here.
https://documenter.getpostman.com/view/33537265/2sA3kdBJPe

# **Folder Structure**

- data/: Contains the dummyData.json file.
- controllers/: Contains the data controller (dataController.js).
- routes/: Contains API routes (dataRoutes.js).
- fetchData.js: Script to fetch and save data.
- server.js: Main entry point for the application.
- package.json: Contains project metadata and dependencies.
- 
# Contributing
- Fork the Repository:

- Click the "Fork" button on GitHub to create your own copy of the repository.
- Create a Branch:


      git checkout -b feature/your-feature
- Commit Your Changes:


git add .
git commit -m "Add your message"
Push to Your Fork:

git push origin feature/your-feature
Create a Pull Request:
