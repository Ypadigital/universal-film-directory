import React from "react";
import { Route } from "react-router-dom";
import FreelancerDashboard from "../components/forfreelancer/dashboard";
import FreelancerProjectproposal from "../components/forfreelancer/projectproposal";
import FreelancerViewProjectdetails from "../components/forfreelancer/viewprojectdetails";
import FreelancerMilestone from "../components/forfreelancer/milestone";
import Freelancertask from "../components/forfreelancer/task";
import FreelancerFile from "../components/forfreelancer/file";
import FreelancerPayment from "../components/forfreelancer/payment";
import FreelancerChangePassword from "../components/forfreelancer/changepassword";
import FreelancerDeleteAccount from "../components/forfreelancer/deleteaccount";
import FreelancerSettings from "../components/forfreelancer/settings";
import FreelancerReview from "../components/forfreelancer/review";
import FreelancerPortfolio from "../components/forfreelancer/portfolio";
import FreelancerWithdrawmoney from "../components/forfreelancer/withdrawmoney";
import FreelancerVerifyIdentity from "../components/forfreelancer/verifyidentity";
import ProtectRoutes from "../components/ProtectRoutes";
import FreelacerProjects from "../components/forfreelancer/freelancerprojects";
import FreelancerProjectDetails from "../components/forfreelancer/FreelancerProjectDetails";

export default function FreelancerDashboardRouter() {
  return (
    <ProtectRoutes>
      <Route
        exact
        path="/freelancer-dashboard"
        component={FreelancerDashboard}
      />
      <Route
        exact
        path="/freelancer-projects/:id"
        component={FreelancerProjectDetails}
      />
      <Route exact path="/freelancer-projects" component={FreelacerProjects} />

      <Route exact path="/freelancer-files" component={FreelancerFile} />
      <Route exact path="/freelancer-payment" component={FreelancerPayment} />
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
      <Route exact path="/freelancer-review" component={FreelancerReview} />
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
    </ProtectRoutes>
  );
}
