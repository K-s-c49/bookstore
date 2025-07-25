import React, { createContext, useState, useContext } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// AuthProvider component
function AuthProvider({ children }) {
  // Get user from localStorage
  const storedUser = localStorage.getItem("Users");
  const initialAuthUser = storedUser ? JSON.parse(storedUser) : null;

  const [authUser, setAuthUser] = useState(initialAuthUser);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the AuthContext
export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
