# Get started with eLearing app 

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [git](https://git-scm.com/download/win)
- [MongoDB](https://www.youtube.com/watch?v=gB6WLkSrtJk&ab_channel=ProgrammingKnowledge)

### Installation Steps
1. **Create an empty folder and open in Vs code**.
2. **Open your terminal or command prompt**.
3. **Clone the repository**:
    ```bash
    git clone https://github.com/Avinash365/eLearning1.git
    ```
4. **Navigate to the project directory**:
    ```bash
    cd eLearning1
    ```
5. **create a folder with name  .env  in eLearing1 floder and past it**:
    ```bash
        PORT = 8000
        MONGO_DB_URI =  'mongodb://localhost:27017/eLearning'    // repalce with your mogodb url make sure you create database with same name.. 
        w = majority 
        JWT_SECRET=Lrvsv73oj+fimFogoFPxDaNY01VoOdfqR237XG1CzrU=
        NODE_ENV = development
    ```

6. **Install requried module**:
    ```bash
    npm install 
    ```
7. **Run the backend server**:
   ```bash
   npm run server
   ``` 
7. **Open new terminal and Navigate to the frontend directory**:
    ```bash
    cd frontend  || if not working than try cd eLearing1/frontend 
    ```
8. **Install requried  frontend module**:
   ```bash
    npm install 
    ```
9. **Now see the app**:
    ```bahs
    npm start
    ```
   
Make sure to replace the placeholder `...` with the appropriate values for your environment. This `.env` file will contain configuration settings for your application. Once you've set up your `.env` file, you can build and start the app using the provided npm commands.
