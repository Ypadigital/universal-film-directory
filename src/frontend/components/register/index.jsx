import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "../Common/Input";
import useCanCallWeb3Method from "../../hooks/useCanCallWeb3Method";
import { ethers } from "ethers";
import { RegisterUser } from "../../services/authService";
import { apiErrorMessage } from "../../utils/handleAPIErrors";
import { toast } from "react-toastify";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { getSigner, setAuthToken } from "../../utils/helpers";

const validationSchema = Yup.object({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  signature: Yup.string(),
  isContractor: Yup.boolean().required("Required"),
});

const Register = (props) => {
  const { canRunWeb3, cannotCallWeb3Error } = useCanCallWeb3Method();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    signature: "",
    isContractor: false,
  };
  const handleSubmit = async (values) => {
    if (!canRunWeb3) return toast.error(cannotCallWeb3Error);

    const toastId = toast.loading("Registering User...");
    try {
      const signer = getSigner();
      const message =
        "UF Directory wants you to confirm your identity, please sign this message to proceed.";
      const signature = await signer.signMessage(message);
      const user = await RegisterUser({ ...values, signature });
      setAuthToken(user.data.data);
      console.log(values, user);
      toast.update(toastId, {
        render: "User Registered Successfully!",
        type: "error",
        isLoading: false,
        pauseOnFocusLoss: false,
      });
    } catch (error) {
      const message = apiErrorMessage(error);
      toast.update(toastId, {
        render: message,
        type: "error",
        isLoading: false,
        pauseOnFocusLoss: false,
      });
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  const isContractor = formik.values.isContractor;
  const tabClass = (name) => {
    if (isContractor && name === "contractor") return "nav-link active";
    if (!isContractor && name === "freelancer") return "nav-link active";
    return "nav-link";
  };
  const switchTab = (name) => {
    if (name === "contractor") formik.setFieldValue("isContractor", true);
    else formik.setFieldValue("isContractor", false);
  };

  useEffect(() => {
    if ($(".floating").length > 0) {
      $(".floating")
        .on("focus blur", function (e) {
          $(this)
            .parents(".form-focus")
            .toggleClass(
              "focused",
              e.type === "focus" || this.value.length > 0
            );
        })
        .trigger("blur");
    }
    document.body.className = "account-page";
    return () => {
      document.body.className = "";
    };
  });
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              {/* Register Tab Content */}
              <div className="account-content">
                <div className="align-items-center justify-content-center">
                  <div className="login-right">
                    <div className="login-header text-center">
                      <h3>Join the Universal Film Directory</h3>
                      <p>Make the most of your professional life</p>
                    </div>
                    <nav className="user-tabs mb-4">
                      <ul
                        role="tablist"
                        className="nav nav-pills nav-justified"
                      >
                        <li
                          className="nav-item"
                          onClick={() => switchTab("freelancer")}
                        >
                          <span className={tabClass("freelancer")}>
                            FREELANCER
                          </span>
                        </li>
                        <li
                          className="nav-item"
                          onClick={() => switchTab("contractor")}
                        >
                          <span className={tabClass("contractor")}>
                            CONTRACTOR
                          </span>
                        </li>
                      </ul>
                    </nav>
                    <form onSubmit={formik.handleSubmit}>
                      <Input
                        name="firstName"
                        formik={formik}
                        label="First Name"
                      />
                      <Input
                        name="lastName"
                        formik={formik}
                        label="Last Name"
                      />
                      <Input name="email" formik={formik} label="Email" />
                      <div className="dont-have">
                        <label className="custom_check">
                          <input type="checkbox" name="rem_password" />
                          <span className="checkmark" /> You agree to the
                          Kofejob{" "}
                          <Link to="/privacy-policy">
                            User Agreement, Privacy Policy,
                          </Link>{" "}
                          and <Link to="/privacy-policy">Cookie Policy</Link>.
                        </label>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block btn-lg login-btn"
                      >
                        Agree TO JOIN
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Register Tab Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  );
};
export default Register;
