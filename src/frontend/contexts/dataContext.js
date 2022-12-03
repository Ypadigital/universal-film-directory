import React, { createContext, useContext, useState } from "react";
import { useCategoriesData } from "../hooks/useCategories";
import { useProfilesData } from "../hooks/useProfilesData";
import { useProjectsData } from "../hooks/useProjectsData";
import { useServicesData } from "../hooks/useServices";
import { useUserData } from "../hooks/useUserData";

const DataContext = createContext();

export function DataProvider({ children }) {
  const user = useUserData();
  const projects = useProjectsData();
  const categories = useCategoriesData();
  const profiles = useProfilesData();
  const services = useServicesData();

  return (
    <DataContext.Provider
      value={{ user, projects, categories, profiles, services }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const context = useContext(DataContext);

  if (!context)
    throw new Error("Data context must be used inside a `DataProvider`");

  return context;
}
