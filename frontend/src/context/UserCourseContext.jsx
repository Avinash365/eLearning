import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuthContext } from './AuthContext';

const CoursesContext = createContext();

export const useCourses = () => useContext(CoursesContext);

export const CoursesProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  const { authUser } = useAuthContext();

  useEffect(() => {
    const fetchCourses = async () => {
      if (!authUser || !authUser.email) {
        setLoading(false);
        return;
      }

      setLoading(true); // Start loading when fetching courses
      try {
        const response = await fetch(`http://localhost:8000/api/user_courses?email=${encodeURIComponent(authUser.email)}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        console.log("yeah");
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json(); 
        setCourses(data.courses); 
        console.log(data.courses); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [authUser?.email]);

  return (
    <CoursesContext.Provider value={{ courses, loading, error }}>
      {children}
    </CoursesContext.Provider>
  );
};
