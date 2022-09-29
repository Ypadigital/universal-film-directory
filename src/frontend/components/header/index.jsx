import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import {
  Logo,
  Img_04,
  Flags_us,
  Flags_fr,
  Flags_es,
  Flags_de,
  company_img3,
  company_img4,
  company_img1,
} from "../imagepath";

const Header = (props) => {
  const [isOpen, setisopen] = useState(false);
  useEffect(() => {
    $(".main-nav a").on("click", function (e) {
      if ($(this).parent().hasClass("has-submenu")) {
        e.preventDefault();
      }
      if (!$(this).hasClass("submenu")) {
        $("ul", $(this).parents("ul:first")).slideUp(350);
        $("a", $(this).parents("ul:first")).removeClass("submenu");
        $(this).next("ul").slideDown(350);
        $(this).addClass("submenu");
      } else if ($(this).hasClass("submenu")) {
        $(this).removeClass("submenu");
        $(this).next("ul").slideUp(350);
      }
    });
  }, [isOpen]);

  const pathname = props.location.pathname.split("/")[1];

  return (
    <>
      {/* Header */}
      <header className="header">
        <nav className="navbar navbar-expand-lg header-nav">
          <div className="navbar-header">
            <a id="mobile_btn" href="">
              <span className="bar-icon">
                <span />
                <span />
                <span />
              </span>
            </a>
            <Link to="/" className="navbar-brand logo">
              <img src={Logo} className="img-fluid" alt="Logo" />
            </Link>
          </div>
          <div className="main-menu-wrapper">
            <div className="menu-header">
              <Link to="/" className="menu-logo">
                <img src={Logo} className="img-fluid" alt="Logo" />
              </Link>
              <a id="menu_close" className="menu-close" href="">
                <i className="fas fa-times" />
              </a>
            </div>
            <ul className="main-nav">
              <li className={pathname === "index" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={pathname === "about" ? "active" : ""}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={pathname === "freelancer" ? "active" : ""}>
                <Link to="/freelancer">Freelancers</Link>
              </li>
              <li className={pathname === "project" ? "active" : ""}>
                <Link to="/project">Projects</Link>
              </li>

              <li
                className={`has-submenu ${
                  pathname === "blog-list" ||
                  pathname === "blog-grid" ||
                  pathname === "blog-details"
                    ? "active"
                    : ""
                }`}
              >
                <a href="">
                  Blog <i className="fas fa-chevron-down" />
                </a>
                <ul className="submenu">
                  <li className={pathname === "blog-list" ? "active" : ""}>
                    <Link to="/blog-list">Blog List</Link>
                  </li>
                  <li className={pathname === "blog-grid" ? "active" : ""}>
                    <Link to="/blog-grid">Blog Grid</Link>
                  </li>
                  <li className={pathname === "blog-details" ? "active" : ""}>
                    <Link to="/blog-details">Blog Details</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            <li
              className={
                pathname === "blog-details" ? "active" : "chats_header"
              }
            >
              <Link to="/chats">
                <i className="material-icons">chat</i>
              </Link>
              <div className="bagde_header">3</div>
            </li>

            {/* User Menu */}
            <li className="nav-item dropdown has-arrow main-drop account-item">
              <div
                id="dropdownmenu"
                className={`dropdown-toggle nav-link `}
                data-toggle="dropdown"
              >
                <span className="user-img">
                  <img src={company_img1} alt="" />
                </span>
              </div>
              <div id="checkshow" className="dropdown-menu emp">
                <div className="drop-head">Account Details</div>
                <Link className="dropdown-item" to="/freelancer-dashboard">
                  <i className="fa fa-cog" />
                  Freelancer Dashboard
                </Link>
                <Link className="dropdown-item" to="/dashboard">
                  <i className="fa fa-th-large" /> Employe Dashboard
                </Link>
                <Link className="dropdown-item" to="/login">
                  <i className="fas fa-lock" /> Login
                </Link>
                <Link className="dropdown-item" to="/register">
                  <i className="fas fa-user" /> Register
                </Link>
                <Link className="dropdown-item" to="/">
                  <i className="material-icons">power_settings_new</i> Logout
                </Link>
              </div>
            </li>
            {/* /User Menu */}
            <li>
              <button className="login-btn">Connect Wallet</button>
            </li>
          </ul>

          {/* ) : pathname === "freelancer-invoices" ||
            pathname === "view-invoice" ||
            pathname.includes("freelancer-") ? (
            <ul className="nav header-navbar-rht">
              <li className="nav-item dropdown account-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  MY ACCOUNT
                </a>
                <div className="dropdown-menu emp">
                  <div className="drop-head">Account Details</div>
                  <Link className="dropdown-item" to="/user-account-details">
                    <i className="material-icons">verified_user</i> View profile
                  </Link>
                  <div className="drop-head">Projects Settings</div>
                  <Link className="dropdown-item" to="/manage-projects">
                    <i className="material-icons">business_center</i> Projects
                  </Link>
                  <Link className="dropdown-item" to="/favourites">
                    <i className="material-icons">local_play</i> Favourites
                  </Link>
                  <Link className="dropdown-item" to="/review">
                    <i className="material-icons">pie_chart</i> Reviews
                  </Link>
                  <div className="drop-head">Account Details</div>
                  <Link className="dropdown-item" to="/profile-settings">
                    {" "}
                    <i className="material-icons">settings</i> Profile Settings
                  </Link>
                  <Link className="dropdown-item" to="/index">
                    <i className="material-icons">power_settings_new</i> Logout
                  </Link>
                </div>
              </li>
              <li className={pathname === "post-project" ? "active" : ""}>
                <Link to="/post-project" className="login-btn">
                  Post a Project{" "}
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="nav header-navbar-rht">
              <li className={pathname === "register" ? "active" : ""}>
                <Link to="/register" className="reg-btn">
                  <i className="fas fa-user" /> Register
                </Link>
              </li>
              <li className={pathname === "login" ? "active" : ""}>
                <Link to="/login" className="log-btn">
                  <i className="fas fa-lock" /> Login
                </Link>
              </li>
              <li className={pathname === "post-project" ? "active" : ""}>
                <Link to="/post-project" className="login-btn">
                  Post a Project{" "}
                </Link>
              </li>
            </ul>
          )} */}
        </nav>
      </header>
      {/* /Header */}
    </>
  );
};

export default Header;
