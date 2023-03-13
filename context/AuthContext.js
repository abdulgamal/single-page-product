import React, { createContext, useState } from "react";

export const AContext = createContext();
function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const handleAuth = (name, email) => {
    setUser({ name, email });
  };
  const logOut = () => setUser(null);
  return (
    <AContext.Provider value={{ user, handleAuth, logOut }}>
      {children}
    </AContext.Provider>
  );
}

export default AuthContext;
