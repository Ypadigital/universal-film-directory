import React from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../contexts/dataContext";
import { getFullName, unkownImageUrl } from "../../utils/helpers";

function DasboardSideBar({ data }) {
  const pathname = window.location.pathname.split("/")[1];
  let { user: currentUser } = useDataContext();
  if (!currentUser) return "";
  if (currentUser && !!!currentUser.isLoading) {
    currentUser = currentUser.data;
  }
  return (
    <>
      {currentUser && !!!currentUser.isLoading && (
        <div className="settings-widget">
          <div className="settings-header d-sm-flex flex-row text-center text-sm-start align-items-center">
            <img
              alt=""
              src={currentUser?.image}
              className="avatar-lg rounded-circle"
            />
            <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
              <p className="mb-2 handle-overflow">Welcome,</p>
              <h3 className="mb-0 handle-overflow">{currentUser.firstName}</h3>
              <p className="mb-0 handle-overflow">{currentUser?.email}</p>
            </div>
          </div>
          <div className="settings-menu">
            <ul>
              {data.map((item, index) => (
                <li key={index} className="nav-item">
                  <Link
                    to={`/${item.link}`}
                    className={`nav-link ${
                      pathname === item.link ? "active" : ""
                    }`}
                  >
                    <i className="material-icons">{item.icon}</i>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default DasboardSideBar;
