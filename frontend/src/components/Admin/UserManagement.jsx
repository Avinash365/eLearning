import React from 'react'; 
import { useEffect, useState } from 'react';
import UserRow from './UserRow';

// import '../../styling/UserManagement.css';

import './UserManagement.css'; 


const UserManagement = () => {  

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from the backend
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/auth/gatAll'); // Replace with your API endpoint
                // console.log(response); 
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json(); 
                setUsers(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <section className="user-management">
            <h1 className="title">Users</h1>
            <header className="header-row">
                <div className="header-item header-item-nowrap">Name</div>
                <div className="header-item">Email id</div>
                <div className="header-item header-item-nowrap">Role</div>
                <div className="header-item">view more</div>
            </header>
            {users.map((user, index) => (
                <UserRow key={index} {...user} />
            ))}
            
        </section>
    );
};

export default UserManagement;