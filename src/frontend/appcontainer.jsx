import React, { Component } from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import PostProject from "./components/postproject";

//home
import Home from "./components/home";

//For Employee
import Developer from "./components/foremployers/developer/developer";
import DeveloperDetails from "./components/foremployers/developer/developer_details";
import Dashboard from "./components/foremployers/dashboard";
import EditProject from "./components/foremployers/editproject";
import Manageprojects from "./components/foremployers/manageprojects";
import Pendingprojects from "./components/foremployers/pendingprojects";
import OngoingProjects from "./components/foremployers/ongoingprojects";
import CompletedProjects from "./components/foremployers/completedprojects";
import CancelledProjects from "./components/foremployers/cancelledprojects";
import ViewProjectdetails from "./components/foremployers/viewprojectdetails";
import Milestone from "./components/foremployers/milestone";
import Task from "./components/foremployers/task";
import File from "./components/foremployers/file";
import Payment from "./components/foremployers/payment";
import Withdrawmoney from "./components/foremployers/withdrawmoney";
import Transactionhistory from "./components/foremployers/transactionhistory";
import Settings from "./components/foremployers/settings";
import ChangePassword from "./components/foremployers/changepassword";
import DeleteAccount from "./components/foremployers/deleteaccount";
import VerifyIdentity from "./components/foremployers/verifyidentity";
import Projectproposal from "./components/foremployers/projectproposal";

//For freelancer
import Project from "./components/forfreelancer/projects/project";
import ProjectDetails from "./components/forfreelancer/projects/project_details";
import ViewProposals from "./components/forfreelancer/projectproposal/viewproposal";
import FreelancerDashboard from "./components/forfreelancer/dashboard";
import FreelancerProjectproposal from "./components/forfreelancer/projectproposal";
import FreelacerCompletedProjects from "./components/forfreelancer/completedprojects";
import FreelacerOngoingProjects from "./components/forfreelancer/ongoingprojects";
import FreelacerCancelledProjects from "./components/forfreelancer/cancelledprojects";
import FreelancerViewProjectdetails from "./components/forfreelancer/viewprojectdetails";
import FreelancerMilestone from "./components/forfreelancer/milestone";
import Freelancertask from "./components/forfreelancer/task";
import FreelancerFile from "./components/forfreelancer/file";
import FreelancerPayment from "./components/forfreelancer/payment";
import FreelancerChangePassword from "./components/forfreelancer/changepassword";
import FreelancerDeleteAccount from "./components/forfreelancer/deleteaccount";
import FreelancerSettings from "./components/forfreelancer/settings";
import Chats from "./components/forfreelancer/chats";
import FreelancerReview from "./components/forfreelancer/review";
import FreelancerPortfolio from "./components/forfreelancer/portfolio";
import FreelancerWithdrawmoney from "./components/forfreelancer/withdrawmoney";
import FreelancerVerifyIdentity from "./components/forfreelancer/verifyidentity";
import Invoices from "./components/pages/invoices/invoices";
import InvoiceView from "./components/pages/invoices/invoice_view";

//Pages
import Aboutus from "./components/pages/aboutus";
import Page404 from "./components/pages/page_404";
import Register from "./components/register";

import PrivacyPolicy from "./components/privacyPages/privacy_policy";
import TermsCondition from "./components/privacyPages/term_condition";

// CSS Files
// Bootstrap CSS
// import './assets/css/bootstrap.min.css';
// Custom CSS
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
import ScrollOnTop from "./ScrollOnTop";
import OTPcode from "./components/pages/OTPcode";
import PurchaseFilmCoin from "./components/pages/PurchaseFilmCoin";
import VerifyIdentit from "./components/pages/VerifyIdentit";
import FreelancerOnbord from "./components/pages/FreelancerOnbord";

import ViewPortfolio from "./components/pages/ViewPortfolio";

if (!window.location.pathname.includes("admin")) {
  require("./assets/js/bootstrap.min.js");
  require("./assets/css/style.css");
}

class AppUniversal extends Component {
  render() {
    return (
      <Router basename={`${config.publicPath}`}>
        <Route render={(props) => <Header {...props} />} />
        <Switch>
          <ScrollOnTop>
            {/* home */}
            <Route exact path="/" component={Home} />
            <Route exact path="/post-project" component={PostProject} />

            {/* Freelancer */}
            {/* Others */}
            <Route exact path="/portfolio-overview" component={ViewPortfolio} />
            {/* For Employer */}
            <Route exact path="/freelancer" component={Developer} />
            <Route exact path="/freelancer/:id" component={DeveloperDetails} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/edit-project" component={EditProject} />
            <Route exact path="/manage-projects" component={Manageprojects} />
            <Route exact path="/pending-projects" component={Pendingprojects} />
            <Route
              exact
              path="/completed-projects"
              component={CompletedProjects}
            />
            <Route exact path="/ongoing-projects" component={OngoingProjects} />
            <Route
              exact
              path="/cancelled-projects"
              component={CancelledProjects}
            />
            <Route
              exact
              path="/view-project-detail"
              component={ViewProjectdetails}
            />
            <Route exact path="/milestones" component={Milestone} />
            <Route exact path="/tasks" component={Task} />
            <Route exact path="/files" component={File} />
            <Route exact path="/project-payment" component={Payment} />

            <Route exact path="/wallet" component={Withdrawmoney} />
            <Route
              exact
              path="/transaction-history"
              component={Transactionhistory}
            />
            <Route exact path="/profile-settings" component={Settings} />
            <Route exact path="/change-password" component={ChangePassword} />
            <Route exact path="/delete-account" component={DeleteAccount} />
            <Route exact path="/verify-identity" component={VerifyIdentity} />
            <Route
              exact
              path="/project-proposals"
              component={Projectproposal}
            />
            {/* For Freelancer */}
            <Route exact path="/project" component={Project} />
            <Route exact path="/project/:id" component={ProjectDetails} />
            <Route
              exact
              path="/freelancer-dashboard"
              component={FreelancerDashboard}
            />
            <Route
              exact
              path="/freelancer-project-proposals"
              component={FreelancerProjectproposal}
            />
            <Route exact path="/proposal/:id" component={ViewProposals} />
            <Route
              exact
              path="/freelancer-completed-projects"
              component={FreelacerCompletedProjects}
            />
            <Route
              exact
              path="/freelancer-ongoing-projects"
              component={FreelacerOngoingProjects}
            />
            <Route
              exact
              path="/freelancer-cancelled-projects"
              component={FreelacerCancelledProjects}
            />
            <Route
              exact
              path="/freelancer-view-project-detail"
              component={FreelancerViewProjectdetails}
            />
            <Route exact path="/freelancer-files" component={FreelancerFile} />
            <Route
              exact
              path="/freelancer-payment"
              component={FreelancerPayment}
            />
            <Route
              exact
              path="/freelancer-milestones"
              component={FreelancerMilestone}
            />
            <Route exact path="/freelancer-task" component={Freelancertask} />

            <Route
              exact
              path="/freelancer-change-password"
              component={FreelancerChangePassword}
            />
            <Route
              exact
              path="/freelancer-profile-settings"
              component={FreelancerSettings}
            />
            <Route
              exact
              path="/freelancer-delete-account"
              component={FreelancerDeleteAccount}
            />
            <Route
              exact
              path="/freelancer-review"
              component={FreelancerReview}
            />
            <Route
              exact
              path="/freelancer-portfolio"
              component={FreelancerPortfolio}
            />
            <Route
              exact
              path="/freelancer-withdraw-money"
              component={FreelancerWithdrawmoney}
            />

            <Route
              exact
              path="/freelancer-verify-identity"
              component={FreelancerVerifyIdentity}
            />
            {/* Pages */}
            <Route exact path="/about" component={Aboutus} />
            <Route exact path="/404-page" component={Page404} />
            <Route exact path="/freelancer-invoices" component={Invoices} />
            <Route exact path="/view-invoice" component={InvoiceView} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/otp-code" component={OTPcode} />
            <Route exact path="/buytoken" component={PurchaseFilmCoin} />
            <Route exact path="/verfiyidentit" component={VerifyIdentit} />
            <Route exact path="/onbord" component={FreelancerOnbord} />
            <Route exact path="/chats" component={Chats} />
            {/* Privacy Pages */}
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route exact path="/term-condition" component={TermsCondition} />
          </ScrollOnTop>
        </Switch>
        <Route render={(props) => <Footer {...props} />} />
      </Router>
    );
  }
}
export default AppUniversal;
