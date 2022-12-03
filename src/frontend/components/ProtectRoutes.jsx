import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../contexts/appContext";
import { protectedFreelancerRoutes } from "../utils/helpers";

export default function ProtectRoutes({ children }) {
  const router = useHistory();
  const { isLoggedIn } = useAppContext();
  useEffect(() => {
    if (!isLoggedIn && protectedFreelancerRoutes.includes(router.location.pathname)) {
      router.push("/");
    }
  }, [router, isLoggedIn]);

  return <>{isLoggedIn ? children : ""}</>;
}
