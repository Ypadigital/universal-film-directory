import React from "react";
import { Link } from "react-router-dom";

function DasboardSideBar({ data, user }) {
  const pathname = window.location.pathname.split("/")[1];
  return (
    <>
      <div className="settings-widget">
        <div className="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
          <img
            alt={user.name}
            src={user?.image}
            className="avatar-lg rounded-circle"
          />
          <div className="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
            <p className="mb-2">Welcome,</p>
            <h3 className="mb-0">{user.name}</h3>
            <p className="mb-0">{user?.email}</p>
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
    </>
  );
}

export default DasboardSideBar;
