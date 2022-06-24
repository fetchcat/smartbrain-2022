import { createContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({
    firstName: "Mario",
    lastName: "Plumber",
    email: "mario@gmail.com",
    detections: 3,
    rank: 1,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
