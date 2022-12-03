import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo, company_img1 } from "../imagepath";
import { WalletButton } from "../WalletButton";
import { getSignature } from "../../utils/helpers";
import { LoginUser } from "../../services/userService";
import { useAppContext } from "../../contexts/appContext";
import toast from "../../utils/toast";
import useCanCallWeb3Method from "../../hooks/useCanCallWeb3Method";
import { apiErrorMessage } from "../../utils/handleAPIErrors";
import { useDataContext } from "../../contexts/dataContext";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Header = (props) => {
  const [authToken, setAuthToken] = useLocalStorage("ufd-auth-token", null);
  let { user } = useDataContext();
  const { canRunWeb3, cannotCallWeb3Error } = useCanCallWeb3Method();
  const { isLoggedIn, handleSetLogin, handleLogout } = useAppContext();
  const [dashboardRoute, setdashboardRoute] = useState("");

  if (user.data) user = user.data;

  useEffect(() => {
    if (authToken) {
      if (user && user.isContractor) setdashboardRoute("/dashboard");
      if (user && !user.isContractor)
        setdashboardRoute("/freelancer-dashboard");
    }
  }, [authToken, user]);

  const handleLogin = async () => {
    if (!canRunWeb3) return toast.error(cannotCallWeb3Error);

    const toastId = toast.loading("Logging in User...");
    try {
      const signature = await getSignature();
      const response = await LoginUser({ signature });
      const user = response.data.data.user;
      if (user.isContractor) setdashboardRoute("/dashboard");
      if (!user.isContractor) setdashboardRoute("/freelancer-dashboard");
      const authToken = response.data.data.authToken;
      console.log(response.data.data.user);
      setAuthToken(authToken);
      handleSetLogin(true);
      toast.update(toastId, "User Logged In Successfully");
    } catch (error) {
      let message;
      if (error.response) message = apiErrorMessage(error);
      else if (!error.response) message = error?.message || error;
      if (message.includes(`action="signMessage"`))
        message = "Signature request was denied";
      toast.update(toastId, message, { type: "error" });
    }
  };

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
              <li className={pathname === "/" ? "active" : ""}>
                <Link to="/">Home</Link>
              </li>
              <li className={pathname === "about" ? "active" : ""}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={pathname === "freelancer" ? "active" : ""}>
                <Link to="/freelancer">Freelancers</Link>
              </li>
              {/* <li className={pathname === "project" ? "active" : ""}>
                <Link to="/project">Projects</Link>
              </li> */}
            </ul>
          </div>
          <ul className="nav header-navbar-rht">
            {/* <li
              className={
                pathname === "blog-details" ? "active" : "chats_header"
              }
            >
              <Link to="/chats">
                <i className="material-icons">chat</i>
              </Link>
              <div className="bagde_header">3</div>
            </li> */}

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
                {!!isLoggedIn ? (
                  <>
                    <div className="drop-head">Account Details</div>
                    {dashboardRoute ? (
                      <>
                        <Link className="dropdown-item" to={dashboardRoute}>
                          <i className="fa fa-th-large" />
                          Open Dashboard
                        </Link>
                      </>
                    ) : (
                      "Loading..."
                    )}
                    <button className="dropdown-item" onClick={handleLogout}>
                      <i className="material-icons">power_settings_new</i>{" "}
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <div className="drop-head">Account Details</div>
                    <Link className="dropdown-item" to="/register">
                      <i className="fas fa-user" />
                      <span>Register</span>
                    </Link>
                    <button className="dropdown-item" onClick={handleLogin}>
                      <i className="fas fa-user" />
                      <span>Login</span>
                    </button>
                  </>
                )}
              </div>
            </li>
            {/* /User Menu */}
            <li>
              <WalletButton />
            </li>
          </ul>
        </nav>
      </header>
      {/* /Header */}
    </>
  );
};

export default Header;
