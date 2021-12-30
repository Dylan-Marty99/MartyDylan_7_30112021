import React, { useState } from "react";
import LeftNavBar from "../components/LeftNavBar";

const Profil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);

  return (
    <div className="profil-page">
      <LeftNavBar />
      <h1>Votre profil</h1>
      <div className="profil-container">
        <div className="bio-container">
          <h2>Bio</h2>
          {updateForm === false && (
            <>
              <p></p>
              <button onClick={() => setUpdateForm(!updateForm)}>
                Modifier bio
              </button>
            </>
          )}
          {updateForm && (
            <>
              <textarea
                type="text"
                onChange={(e) => setBio(e.target.value)}
              ></textarea>
              <button>Valider modifications</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profil;
