const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connection = require("../dbConfig");

//---------- Inscription de l'utlisateur (FONCTIONNE) -------------
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const pseudo = req.body.pseudo;
      const email = req.body.email;
      const password = hash;

      connection.query(
        `INSERT INTO user (u_nom, u_prenom, u_pseudo, u_email, u_password) VALUES ('${nom}', '${prenom}', '${pseudo}', '${email}', '${password}')`,
        function (err, result) {
          if (err) {
            return res.status(500).json(err.message);
          }
          res.status(201).json({ message: "Utilisateur crée !" });
        }
      );
    })
    .catch((error) => res.status(500).json({ error }));
};

//---------- Connexion de l'utlisateur (FONCTIONNE) -------------
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  connection.query(
    `SELECT * FROM user WHERE u_email = '${email}'`,
    function (err, result) {
      if (err) {
        return res.status(500).json(err.message);
      }
      if (result.length == 0) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(password, result[0].u_password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            token: jwt.sign({ u_id: result[0].u_id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "24h",
            }),
          });
          return res.status(200).json(result);
        })
        .catch((e) => res.status(500).json(e));
    }
  );
};

// --------- Sélectionner un utilisateur (FONCTIONNE) -----------
exports.getOneUser = (req, res, next) => {
  const u_id = req.params.id;
  connection.query(
    `SELECT u_id, u_nom, u_prenom, u_pseudo, u_email FROM user WHERE u_id = ${u_id}`,
    (error, result) => {
      if (error) {
        return res.status(400).json(error);
      }
      return res.status(200).json(result);
    }
  );
};

// --------- Sélectionner tous les utilisateurs (FONCTIONNE)  -----------
exports.getAllUsers = (req, res, next) => {
  connection.query(
    "SELECT u_id, u_nom, u_prenom, u_pseudo, u_email FROM user WHERE u_admin = 0",
    function (error, result) {
      if (error) {
        return res.status(400).json(error);
      }
      return res.status(200).json(result);
    }
  );
};

// ----------- Supprimer un utilisateur (FONCTIONNE) ---------------
exports.deleteUser = (req, res, next) => {
  const u_id = req.params.id;
  connection.query(`DELETE FROM user WHERE u_id = ${u_id}`, (error, result) => {
    if (error) {
      console.log(error);
      return res.status(400).json(error);
    }
    console.log("Le compte a bien été supprimé !");
    return res
      .status(200)
      .json({ message: "Votre compte a bien été supprimé !" });
  });
};

// ----------- Modifier un utilisateur ----------------
