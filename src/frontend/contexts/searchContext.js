import React, { createContext, useContext, useState } from "react";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [query] = useState("");

  return (
    <SearchContext.Provider value={{ query }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context)
    throw new Error("Search context must be used inside a `SearchProvider`");

  return context;
}
