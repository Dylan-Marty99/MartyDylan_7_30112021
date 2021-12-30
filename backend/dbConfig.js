const mysql = require("mysql2");

// Connection à MYSQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MotDePasseMYSQL00",
  database: "groupomania_db",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connecté à la base de données MySQL!");
});

module.exports = connection;

// ------------ Selectionner tout les users -----------
// connection.query("SELECT * FROM user").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Selectionner tout les id des users --------------
// connection.query("SELECT u_id FROM user").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Selectionner un user en fonction de son email --------------
// connection.query("SELECT * FROM user WHERE u_email = 'email2@mail.com' ").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Ajouter un user en tant qu'admin --------------
// connection.query("UPDATE user SET u_admin = 1 WHERE u_id = 1").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Ajouter un user --------------
// connection.query("INSERT INTO user (`u_nom`, `u_prenom`, `u_pseudo`, `u_email`, `u_password`) VALUES ('nom4', 'prenom4', 'pseudo4', 'email4@mail.com', 'password4')").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Ajouter un post --------------
// connection.query("INSERT INTO post (`p_parent`, `p_user_id`, `p_title`, `p_content`) VALUES ('1', '3', 'Post1', 'Comment post 1')").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Selectionner tout les posts et les pseudos d'une conversation --------------
// connection.query("SELECT post.*, user.u_pseudo FROM post INNER JOIN user ON post.p_user_id = user.u_id WHERE post.p_title ='post2' ORDER BY post.p_id ASC").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Selectionner tout les commentaires d'un post --------------
// connection.query("SELECT * FROM post WHERE p_parent = 1 ").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Selectionner tout les posts d'un user --------------
// connection.query("SELECT * FROM post WHERE p_user_id = 1 ").then(([results, metadata]) => {
//   console.log(results);
// });

// ----------- Selectionner tout les posts par ordre décroissant --------------
// connection.query("SELECT * FROM post ORDER BY p_date_published DESC").then(([results, metadata]) => {
//   console.log(results);
// });