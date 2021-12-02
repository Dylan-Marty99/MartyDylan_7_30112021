const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const path = require("path");

const app = express();
const { Sequelize } = require("sequelize");

//------- Importation des routes ---------
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 50, // limite chaque IP à 50 requêtes
  message: "Trop de requêtes éffectuées depuis cette IP",
});

// Helmet protége l'application de certaines des vulnérabilités bien connues du Web en configurant de manière appropriée des en-têtes HTTP.
app.use(helmet());

app.use(limiter);

// Connection à MYSQL
const sequelize = new Sequelize("groupomania_db", "root", "MotDePasseMYSQL00", {
  dialect: "mysql",
  host: "localhost",
});

try {
  sequelize.authenticate();
  console.log("Connecté à la base de données MySQL!");
  sequelize.query("SELECT * FROM user").then(([results, metadata]) => {
    console.log(results);
  });
} catch (error) {
  console.error("Impossible de se connecter, erreur suivante :", error);
}

//----------- Gestion des erreurs CORS ----------------
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(bodyParser.json());

//------- Gestion des images et des routes de l'API -------
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/post", postRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
