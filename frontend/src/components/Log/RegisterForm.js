import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const nomError = document.querySelector(".nom.error");
    const prenomError = document.querySelector(".prenom.error");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    nomError.innerHTML = "";
    if (nom.length < 3 || nom.length > 30 || !nom.match(/^[a-zA-Zéèç.'-]+$/)) {
      nomError.innerHTML = "Nom invalide";
    }

    prenomError.innerHTML = "";
    if (
      prenom.length < 3 ||
      prenom.length > 30 ||
      !prenom.match(/^[a-zA-Zéèç.'-]+$/)
    ) {
      prenomError.innerHTML = "Prénom invalide";
    }

    pseudoError.innerHTML = "";
    if (pseudo.length < 3 || pseudo.length > 30) {
      pseudoError.innerHTML = "Pseudo invalide";
    }

    emailError.innerHTML = "";
    if (!email.match(/^[\w._-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      emailError.innerHTML = "Email invalide";
    }

    passwordError.innerHTML = "";
    if (
      !password.match(
        /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
      )
    ) {
      passwordError.innerHTML =
        "Le mot de passe doit contenir au minimum 8 caractères, une majuscule, un chiffre et un caractère spécial";
    }

    axios({
      method: "post",
      url: "http://localhost:3001/api/auth/signup",
      data: {
        nom,
        prenom,
        pseudo,
        email,
        password,
      },
    })
      .then(() => {
        window.location = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form action="" onSubmit={handleRegister} id="register-form">
      <label htmlFor="nom">Nom</label>
      <input
        type="text"
        name="nom"
        id="nom"
        onChange={(e) => setNom(e.target.value)}
        value={nom}
        autoComplete="off"
      />
      <div className="nom error"></div>
      <label htmlFor="prenom">Prénom</label>
      <input
        type="text"
        name="prenom"
        id="prenom"
        onChange={(e) => setPrenom(e.target.value)}
        value={prenom}
        autoComplete="off"
      />
      <div className="prenom error"></div>
      <label htmlFor="pseudo">Pseudo</label>
      <input
        type="text"
        name="pseudo"
        id="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
        autoComplete="off"
      />
      <div className="pseudo error"></div>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        autoComplete="off"
      />
      <div className="email error"></div>
      <label htmlFor="password">Mot de passe</label>
      <input
        type="password"
        name="password"
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="password error"></div>
      <input type="submit" value="S'inscrire" />
    </form>
  );
};

export default RegisterForm;
