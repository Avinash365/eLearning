import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(() => {
        // Initialize state from local storage if available
        const user = localStorage.getItem("eRanter-User");
        return user ? JSON.parse(user) : null;
    });

    useEffect(() => {
        // Update local storage whenever authUser changes
        if (authUser) {
            localStorage.setItem("eRanter-User", JSON.stringify(authUser));
        } else {
            localStorage.removeItem("eRanter-User");
        }
    }, [authUser]);

    return (
        <AuthContext.Provider value={{ authUser, setAuthUser }}>
            {children}
        </AuthContext.Provider>
    );
};
