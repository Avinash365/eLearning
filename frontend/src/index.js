import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";  // npm i react-router-dom 
import { AuthContextProvider } from './context/AuthContext';  // Ensure this matches your context file
import { CoursesProvider } from './context/UserCourseContext';  // Ensure this matches your context file 

import { QueryClientProvider, queryClient } from './context/reactQuerySetup.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <CoursesProvider>
            <App />
          </CoursesProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
