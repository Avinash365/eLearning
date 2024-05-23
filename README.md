# eLearning

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation Steps

1. **Open your terminal or command prompt**.
2. **Navigate to the directory where you want to clone the repository**:
    ```bash
    cd /path/to/your/desired/directory
    ```

3. **Clone the repository**:
    ```bash
    git clone https://github.com/Avinash365/eLearning1.git
    ```

4. **Navigate to the project directory**:
    ```bash
    cd eLearning1
    ```

5. **Setup .env file**:
    ```bash
    PORT=...              # Replace ... with your desired port number
    MONGO_DB_URI=...      # Replace ... with your MongoDB URI
    JWT_SECRET=...        # Replace ... with your JWT secret key
    NODE_ENV=...          # Replace ... with 'development' or 'production' depending on your environment
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
