import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import AppRouter from "./approuter";

import { APILoader } from "./components/APILoader";
import { AppProvider } from "./contexts/appContext";
import { DataProvider } from "./contexts/dataContext";
import { LoadingProvider } from "./contexts/loadingContext";

export default function App() {
  return (
    <>
      <ToastContainer
        pauseOnFocusLoss={true}
        position="top-center"
        autoClose={5000}
      />
      <AppProvider>
        <LoadingProvider>
          <APILoader />
          <DataProvider>
            <AppRouter />
          </DataProvider>
        </LoadingProvider>
      </AppProvider>
    </>
  );
}
