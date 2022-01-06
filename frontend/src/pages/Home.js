import React from "react";
import LeftNavBar from "../components/LeftNavBar";

const Home = () => {
  return (
    <div className="home-page">
      <LeftNavBar />
      <div className="message-container">
        <div className="new-message">
          <h2>Partagez quelque chose</h2>
          <input type="text" placeholder="Écrivez quelque chose !" />
          <button>Envoyer</button>
        </div>

        <div className="all-post">
          <div className="post">
            <div className="post-title">
              <h2>"Titre du post"</h2>
              <span>"date du post"</span>
            </div>
            <span className="user-name">Par "Nom de l'utilisateur"</span>
            <p className="content">
              "Contenu du post" Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quod odit sapiente iure nulla eum assumenda sed
              ex? Id, consequuntur, voluptate excepturi quis rerum dignissimos
              illum, neque esse obcaecati ipsam dolorum. Eum adipisci obcaecati
              autem repellat, exercitationem praesentium facere odio quaerat,
              perspiciatis officiis earum molestias deleniti ipsam provident? Ex
              vitae beatae nisi architecto. Accusamus consequatur doloremque
              incidunt quasi nulla repellat atque.
            </p>
            <p>"image"</p>
            <img src="" alt="" />
          </div>

          <div className="post">
            <div className="post-title">
              <h2>"Titre du post"</h2>
              <span>"date du post"</span>
            </div>
            <span className="user-name">"Nom de l'utilisateur"</span>
            <p className="content">
              "Contenu du post" Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ea explicabo ipsa totam autem, perspiciatis rem
              eos id quasi temporibus sapiente possimus voluptas quae dolorum
              libero dicta repellendus vero! Voluptatem, ab? Officiis nostrum
              quaerat quo ipsam expedita quasi nobis voluptate officia
              voluptatum id, reiciendis quod ullam debitis cupiditate
              perspiciatis maxime iste? Modi repudiandae veniam blanditiis iusto
              officia inventore perferendis, sit at.
            </p>
            <p>"image"</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
