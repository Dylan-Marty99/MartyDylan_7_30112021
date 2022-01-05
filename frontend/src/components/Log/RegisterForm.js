import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const nomError = document.querySelector(".nom.error");
    const prenomError = document.querySelector(".prenom.error");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const confirmPasswordError = document.querySelector(".confirm-password.error");

    nomError.innerHTML = "";
    if (nom < 3 || nom > 30) {
      nomError.innerHTML = "erreur de nom";
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
      .then((res) => {
        if (res.data.errors) {
          // À modif avec regex et message perso
          nomError.innerHTML = res.data.errors.nom;
          prenomError.innerHTML = res.data.errors.prenom;
          pseudoError.innerHTML = res.data.errors.pseudo;
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
          confirmPasswordError.innerHTML = res.data.errors.confirmPassword;
        } else {
          window.location = "/";
        }
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
      />
      <div className="nom error"></div>
      <label htmlFor="prenom">Prénom</label>
      <input
        type="text"
        name="prenom"
        id="prenom"
        onChange={(e) => setPrenom(e.target.value)}
        value={prenom}
      />
      <div className="prenom error"></div>
      <label htmlFor="pseudo">Pseudo</label>
      <input
        type="text"
        name="pseudo"
        id="pseudo"
        onChange={(e) => setPseudo(e.target.value)}
        value={pseudo}
      />
      <div className="pseudo error"></div>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
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
      <label htmlFor="confirm-password">Confirmation du mot de passe</label>
      <input
        type="password"
        name="confirm-password"
        id="confirm-password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
      />
      <div className="confrim-password error"></div>
      <input type="submit" value="S'inscrire" />
    </form>
  );
};

export default RegisterForm;
