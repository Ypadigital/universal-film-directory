import React from "react";
import AppContainer from "./appcontainer.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.min.js";
// Font Awesome
import "./assets/plugins/fontawesome/css/fontawesome.min.css";
import "./assets/plugins/fontawesome/css/all.min.css";
// Select2 CSS
import "./assets/plugins/select2/css/select2.min.css";
//Fancybox JS
import "./assets/plugins/fancybox/jquery.fancybox.min.css";
import "./assets/plugins/datatables/datatables.min.css";

import "./assets/js/jquery-3.6.0.min.js";
import "./assets/js/bootstrap.bundle.min.js";
import "./assets/plugins/select2/js/select2.min.js";
import "./assets/plugins/fancybox/jquery.fancybox.min.js";
import "./assets/plugins/datatables/jquery.dataTables.min.js";
import "./assets/plugins/datatables/datatables.min.js";
import "./assets/js/profile-settings.js";
import "./assets/js/slick.js";
import "./assets/js/script.js";
if (!window.location.pathname.includes("admin")) {
  require("./assets/js/bootstrap.min.js");
  require("./assets/css/style.css");
}

const AppRouter = (props) => {
  return (
    <>
      <Router>
        <Route render={(props) => <AppContainer {...props} />} />
      </Router>
    </>
  );
};

export default AppRouter;
