import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SideBar from "../../Common/SideBar";
import { useDataContext } from "../../../contexts/dataContext";

import SettingsForm from "./settingsForm";

const FreelancerSettings = (props) => {
  let { categories, user } = useDataContext();

  categories = categories.data || [];
  user = user?.data || null;

  useEffect(() => {
    document.body.className = "dashboard-page";
    return () => {
      document.body.className = "";
    };
  });

  return (
    <>
      {/* Page Content */}
      <SideBar freelancer={true}>
        <div className="pro-pos">
          <nav className="user-tabs mb-4">
            <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  to="/freelancer-profile-settings"
                >
                  Profile Settings
                </Link>
              </li>
            </ul>
          </nav>
          {user && !!categories.length && (
            <SettingsForm categories={categories} user={user} />
          )}
        </div>
      </SideBar>
      {/* /Page Content */}
    </>
  );
};
export default FreelancerSettings;
