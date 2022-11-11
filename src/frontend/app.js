import React from "react";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import AppRouter from "./approuter";

import { Loader } from "./components/Loader";
import { AppProvider } from "./contexts/appContext";

export default function App() {
  return (
    <>
      <Loader />
      <ToastContainer position="top-center" autoClose={5000} />
      <AppProvider>
        <AppRouter />
      </AppProvider>
      {/* <script src="https://cdn.jsdelivr.net/npm/react-toastify@9.1.1/dist/react-toastify.min.js"></script> */}
    </>
  );
}
