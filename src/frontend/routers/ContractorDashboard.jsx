import React from "react";
import { Route } from "react-router-dom";
import ContractorDashboard from "../components/foremployers/dashboard";
import Developer from "../components/foremployers/developer/developer";
import DeveloperDetails from "../components/foremployers/developer/developer_details";
import ProtectRoutes from "../components/ProtectRoutes";

export default function ContractorDashboardRouter() {
  // console.log({ data, error, isLoading });
  return (
    <ProtectRoutes>
      <Route exact path="/dashboard" component={ContractorDashboard} />
      <Route exact path="/freelancer" component={Developer} />
      <Route exact path="/freelancer/:id" component={DeveloperDetails} />
    </ProtectRoutes>
  );
}
