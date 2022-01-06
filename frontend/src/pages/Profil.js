import React from "react";
import LeftNavBar from "../components/LeftNavBar";

const Profil = () => {
  // const [bio, setBio] = useState("");
  // const [updateForm, setUpdateForm] = useState(false);

  return (
    <div className="profil-page">
      <LeftNavBar />
      <h1>Votre profil</h1>
      <div className="profil-container">
        <p>Votre nom : "nom prenom"</p>
        <p>Votre pseudo : "pseudo"</p>
        <p>Votre secteur d'activité : "input liste déroulante"</p>
        <p>Votre date d'inscription : "date"</p>
        {/* modif couleur button */}
        <button>Supprimer votre compte</button>
      </div>
    </div>
  );
};

export default Profil;
