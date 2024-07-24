import React from 'react';
import toast from 'react-hot-toast';

const UserRow = ({ name, email, gender }) => { 

    const deleteCourse = async () => {
        const warningMessage = "Are you sure you want to delete this course? This action cannot be undone.";

        if (window.confirm(warningMessage)) {
            try {
                const response = await fetch("http://localhost:8000/api/auth/deleteUser", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email }), // Ensure the body is correctly formatted
                });

                if (response.ok) {
                    const result = await response.json();
                    toast.success("User info deleted successfully!");
                    console.log("User info deleted successfully:", result);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000); // Adjust the delay as needed 

                } else {
                    toast.error("Failed to delete the User info: " + response.statusText);
                    console.error("Failed to delete the User info:", response.statusText);
                    // Optionally handle error logic here
                }
            } catch (error) {
                toast.error("An error occurred while deleting the User info.");
                console.error("An error occurred while deleting the User info :", error);
                // Optionally handle error logic here
            }
        } else {
            toast("User info deletion was cancelled by the admin.");
            console.log("User info deletion was cancelled by the admin.");
        }
    };



    return (
        <div className="user-row">
            <div className="user-info">{name}</div>
            <div className="user-info">{email}</div>
            <div className="user-info header-item-nowrap">{gender}</div>
            <button className="action-button">modify</button>
            <button className="action-button" onClick={deleteCourse}>delete</button>
        </div>
    );
};

export default UserRow;