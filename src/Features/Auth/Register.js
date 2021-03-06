import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, useHistory } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [userRegisterationInfo, setUserRegisterationInfo] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const registerNavigate = useNavigate();

  const handleRegister = () => {
    if (
      userRegisterationInfo.password !== userRegisterationInfo.confirmPassword
    ) {
      alert(
        "Password entered does not match, please confirm that the password are the same"
      );
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      userRegisterationInfo.email,
      userRegisterationInfo.password
    )
      .then(() => {
        registerNavigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const handleBackFromRegister = () => {
    registerNavigate("/login");
  };

  return (
    <div>
      <div className="loginContainer col-12">
        <div className="card">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center reg-intro">
                  <h4>Create your Trip++ account</h4>
                  <p>One account, just for you :)</p>
                </div>
                  <div className="form-outline mb-4">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      value={userRegisterationInfo.email}
                      onChange={(e) => {
                        setUserRegisterationInfo({
                          ...userRegisterationInfo,
                          email: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Password"
                      value={userRegisterationInfo.password}
                      onChange={(e) => {
                        setUserRegisterationInfo({
                          ...userRegisterationInfo,
                          password: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Confirm Password"
                      value={userRegisterationInfo.confirmPassword}
                      onChange={(e) => {
                        setUserRegisterationInfo({
                          ...userRegisterationInfo,
                          confirmPassword: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className="text-center box-shadow pt-1 mb-5 pb-1">
                    <button
                      className="reg-btn btn btn-block input-block-level col-12"
                      onClick={handleRegister}
                    >
                      Register
                    </button>
                  </div>
                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <button
                      className="back-btn btn box-shadow"
                      onClick={handleBackFromRegister}
                    >
                      Go Back
                    </button>
                  </div>

              </div>
            </div>
            <div className="reg-side col-lg-6 d-flex align-items-center">
              <div className="px-3 py-4 p-md-5 mx-md 4">
                <h4>About Us</h4>
                <p className="small mb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                  iure ratione quasi molestiae quia? Aliquam quia sapiente aut
                  voluptas, deleniti ab saepe adipisci accusamus quisquam dicta
                  eligendi placeat molestiae impedit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}