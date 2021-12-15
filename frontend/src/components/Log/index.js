import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

const Log = () => {
  const [registerModal, setRegisterModal] = useState(true);
  const [loginrModal, setLoginrModal] = useState(false);

  const handleModal = (e) => {
    if (e.target.id === "register") {
      setLoginrModal(false);
      setRegisterModal(true);
    } else if (e.target.id === "login") {
      setLoginrModal(true);
      setRegisterModal(false);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModal}
            id="register"
            className={registerModal ? "active-btn" : null}
          >
            S'inscrire
          </li>
          <li
            onClick={handleModal}
            id="login"
            className={loginrModal ? "active-btn" : null}
          >
            Se connecter
          </li>
        </ul>
        {registerModal && <RegisterForm />}
        {loginrModal && <LoginForm />}
      </div>
    </div>
  );
};

export default Log;
