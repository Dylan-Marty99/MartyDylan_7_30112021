import React, { useState } from "react";
// import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {};

  return (
    <form action="" onSubmit={handleLogin} id="login-form">
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <input type="submit" value="Se connecter" />
    </form>
  );
};

export default LoginForm;
