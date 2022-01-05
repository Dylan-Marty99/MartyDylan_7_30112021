const connection = require("../dbConfig");
const fs = require("fs");

// ----------- Créer un post (FONCTIONNE PAS) ----------------
exports.createPost = (req, res, next) => {
  const u_id = res.locals.u_id;
  const title = req.body.title;
  const content = req.body.content;
  const parent = req.body.parent;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  console.log(imageUrl);
  console.log(req.file.filename);

  connection.query(
    `INSERT INTO post (p_parent, p_user_id, p_title, p_content, p_image_url) VALUES ('${parent}', '${u_id}', '${title}', '${content}', '${imageUrl}')`,
    function (err, result) {
      if (err) {
        return res.status(500).json(err.message);
      }
      res.status(201).json({ message: "Post créé !" });
    }
  );
};

// ----------- Supprimer un post (à tester ) ----------------
exports.deletePost = (req, res, next) => {
  const p_id = req.params.p_id;

  connection.query(
    `SELECT p_image_url FROM post WHERE p_id = ${p_id}`,
    function (err, result) {
      if (result > 0) {
        // On supprime le fichier image en amont

        const filename = result[0].p_image_url.split("/images/")[1];
        fs.unlink(`images/${filename}`, () => {
          connection.query(
            `DELETE FROM post WHERE p_id = ${p_id}`,
            function (err, result) {
              if (err) {
                return res.status(500).json(err.message);
              }
              res.status(200).json({ message: "Post supprimé !" });
            }
          );
        });
      } else {
        connection.query(
          `DELETE FROM post WHERE p_id = ${p_id}`,
          function (err, result) {
            if (err) {
              return res.status(500).json(err.message);
            }
            res.status(200).json({ message: "Post supprimé !" });
          }
        );
      }
      if (err) {
        return res.status(500).json(err.message);
      }
    }
  );
};

// ----------- Accéder à un post (FONCTIONNE) ----------------
exports.getOnePost = (req, res, next) => {
  const p_id = req.params.id;
  connection.query(
    `SELECT * FROM post WHERE p_id = ${p_id}`,
    (error, result) => {
      if (error) {
        return res.status(400).json({ error });
      }

      return res.status(200).json(result);
    }
  );
};

// ----------- Accéder à tout les posts (FONCTIONNE) ----------------
exports.getAllPosts = (req, res, next) => {
  connection.query(
    "SELECT * FROM post ORDER BY p_date_published DESC",
    (error, result) => {
      if (error) {
        return res.status(400).json({ error });
      }

      return res.status(200).json(result);
    }
  );
};

// ----------- Modifier un post ----------------
