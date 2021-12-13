const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sequelize = require("../dbConfig");

const User = require("../models/user");

//---------- Inscription de l'utlisateur -------------
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const nom = req.body.nom;
      const prenom = req.body.prenom;
      const pseudo = req.body.pseudo;
      const email = req.body.email;
      const password = hash;

      sequelize.query(
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

//---------- Connexion de l'utlisateur -------------
exports.login = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
          if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({ userId: user._id }, "RANDOM_TOKEN_SECRET", {
              expiresIn: "12h",
            }),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};
