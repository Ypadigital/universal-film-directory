import React, { Component } from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import PostProject from "./components/postproject";

//home
import Home from "./components/home";

//For Employee 
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
import Chats from "./components/forfreelancer/chats";

import Invoices from "./components/pages/invoices/invoices";
import InvoiceView from "./components/pages/invoices/invoice_view";

//Pages
import Aboutus from "./components/pages/aboutus";
import Page404 from "./components/pages/page_404";
import Register from "./components/register";

import PrivacyPolicy from "./components/privacyPages/privacy_policy";
import TermsCondition from "./components/privacyPages/term_condition";

import ScrollOnTop from "./ScrollOnTop";
import OTPcode from "./components/pages/OTPcode";
import PurchaseFilmCoin from "./components/pages/PurchaseFilmCoin";
import VerifyIdentit from "./components/pages/VerifyIdentity";
import FreelancerOnbord from "./components/pages/FreelancerOnbord";

import ViewPortfolio from "./components/pages/ViewPortfolio";
import ContractorDashboardRouter from "./routers/ContractorDashboard";
import FreelancerDashboardRouter from "./routers/FreelancerDashboard";

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
            <Route exact path="/portfolio-overview/:id" component={ViewPortfolio} />
            {/* For Employer */}

            {/* <Route exact path="/dashboard" component={Dashboard} /> */}
            <ContractorDashboardRouter />
            <FreelancerDashboardRouter />
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
              path="/view-project-detail/:id"
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

            <Route exact path="/proposal/:id" component={ViewProposals} />

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
        {/* <Route path="*" component={Page404} /> */}
      </Router>
    );
  }
}
export default AppUniversal;
