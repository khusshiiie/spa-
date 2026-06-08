import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [user] = useState("Khushi");

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
}