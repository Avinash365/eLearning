import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const fetchCourses = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/course/courses", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Parse JSON data 
        console.log(data); 

        return data; 

    } catch (error) {
        console.error('Error fetching courses:', error);
        throw error; // Rethrow the error to be caught by the caller
    } 
};

// Immediately Invoked Function Expression (IIFE) to execute fetchCourses
(async () => {
    try {
        const courses = await fetchCourses();
        console.log('Courses:', courses);
        // Further processing or handling of courses data
    } catch (error) {
        console.error('Error in IIFE:', error);
        // Handle error appropriately
    }
})();   

export default fetchCourses; 

export { queryClient, QueryClientProvider };