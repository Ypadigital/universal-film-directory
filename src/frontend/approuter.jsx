import React from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
// notifications
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

const AppRouter = (props) => {
  return (
    <>
      <Router>
        <Route render={(props) => <AppContainer {...props} />} />
      </Router>
      <NotificationContainer />
    </>
  );
};

export default AppRouter;
