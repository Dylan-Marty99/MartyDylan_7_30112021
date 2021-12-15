import React, { useState } from 'react';
// import axios from "axios";

const RegisterForm = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [pseudo, setPseudo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
  
    const handleRegister = (e) => {};

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
        <label htmlFor="prenom">Prénom</label>
        <input
          type="text"
          name="prenom"
          id="prenom"
          onChange={(e) => setPrenom(e.target.value)}
          value={prenom}
        />
        <label htmlFor="pseudo">Pseudo</label>
        <input
          type="text"
          name="pseudo"
          id="pseudo"
          onChange={(e) => setPseudo(e.target.value)}
          value={pseudo}
        />
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
        <label htmlFor="confirm-password">Confirmer votre mot de passe</label>
        <input
          type="password"
          name="confirm-password"
          id="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <input type="submit" value="S'inscrire" />
      </form>
    );
};

export default RegisterForm;