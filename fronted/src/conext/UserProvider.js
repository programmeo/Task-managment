import { useState } from 'react';
import UserContext from './UserContext';

export function UserProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "pending",
    date: "",
  });

  const value = {
    formData,
    setFormData
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;