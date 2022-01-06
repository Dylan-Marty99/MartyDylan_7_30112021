import React from "react";
import LeftNavBar from "../components/LeftNavBar";

const Home = () => {
  return (
    <div className="home-page">
      <LeftNavBar />
      <div className="message-container">
        <div className="new-message">
          <h2>Partagez quelque chose</h2>
          <input type="text" placeholder="Écrivez quelque chose" />
          <button>Envoyer</button>
        </div>
        <div className="all-post">
          <div className="post">
            <div className="post-title">
              <h2>"Titre du post"</h2>
              <span>"date du post"</span>
            </div>
            <span>"Nom de l'utilisateur"</span>
            <p>"Contenu du post"</p>
            <p>"image"</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
