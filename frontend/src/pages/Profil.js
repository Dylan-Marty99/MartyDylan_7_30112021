import React from "react";
import LeftNavBar from "../components/LeftNavBar";
import DeleteAccount from "../components/DeleteAccount";

const Profil = () => {
  return (
    <div className="profil-page">
      <LeftNavBar />
      <h1>Votre profil</h1>
      <div className="profil-container">
        <p>Votre nom : "nom prenom"</p>
        <p>Votre pseudo : "pseudo"</p>
        <p>Votre date d'inscription : "date"</p>
        {/* modif couleur button */}
        <button>
          <DeleteAccount />
        </button>
      </div>
    </div>
  );
};

export default Profil;
