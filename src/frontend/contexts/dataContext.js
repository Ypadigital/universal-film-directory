import React, { createContext, useContext } from "react";

const DataContext = createContext();

export function DataProvider({ children }) {
  return <DataContext.Provider value={{}}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  const context = useContext(DataContext);

  if (!context)
    throw new Error("Data context must be used inside a `DataProvider`");

  return context;
}
