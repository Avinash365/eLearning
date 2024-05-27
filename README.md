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
5. **Open .env file and Edit it**:
    ```bash
    PORT=...              # Replace ... Keep it same.
    MONGO_DB_URI=...      # Replace ... with your MongoDB URI,  make sure you have create database with same name..
    JWT_SECRET=...        # Replace ... keep it same. 
    NODE_ENV=...          # Replace ... keep it same. 
    ```

6. **Build the app**:
    ```bash
    npm run build 
    ```

7. **Start the app**:
    ```bash
    npm start 
    ```

Make sure to replace the placeholder `...` with the appropriate values for your environment. This `.env` file will contain configuration settings for your application. Once you've set up your `.env` file, you can build and start the app using the provided npm commands.
