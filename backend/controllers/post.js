const sequelize = require("../dbConfig");
const fs = require("fs");

// ----------- Créer un post (à tester une fois p_parent définis) ----------------
exports.createPost = (req, res, next) => {
  const u_id = res.locals.u_id;
  const title = req.body.title;
  const content = req.body.content;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  console.log(imageUrl);
  console.log(req.file.filename);
                                                                              /*----- const p_parent ? -----*/
  sequelize.query(
    `INSERT INTO post (p_parent, p_user_id, p_title, p_content, p_image_url) VALUES ('${p_parent}', '${u_id}', '${title}', '${content}', '${imageUrl}')`,
    function (err, result) {
      if (err) {
        return res.status(500).json(err.message);
      }
      res.status(201).json({ message: "Post créé !" });
    }
  );
};

// ----------- Modifier un post ----------------



// ----------- Supprimer un post ----------------



// --------- Accès à un ou plusieurs posts ne fonctionne pas, possible erreur du middleware auth ? ----------------

// ----------- Accéder à un post ----------------
exports.getOnePost = (req, res, next) => {
  const p_id = req.params.p_id;
  sequelize.query(
    `SELECT * FROM post WHERE p_id = ${p_id}`,
    (error, result) => {
      if (error) {
        return res.status(400).json({ error });
      }

      return res.status(200).json(result);
    }
  );
};

// ----------- Accéder à tout les posts ----------------
exports.getAllPosts = (req, res, next) => {
  sequelize.query(
    "SELECT * FROM post ORDER BY p_date_published DESC",
    (error, result) => {
      if (error) {
        return res.status(400).json({ error });
      }

      return res.status(200).json(result);
    }
  );
};

// --------------------------------------------------------------------------------------------------------------
// ---------------------------------- À adapter si le temps le permet -------------------------------------------
// --------------------------------------------------------------------------------------------------------------

// ----------- Liker un post ----------------
// exports.likeSauce = (req, res, next) => {
//   switch (req.body.like) {
//     //--- Vérifier si l'utilisateur à liker le post ------
//     case 0:
//       Sauces.findOne({ _id: req.params.id })
//         .then((sauces) => {
//           if (sauces.usersLiked.find((user) => user === req.body.userId)) {
//             Sauces.updateOne(
//               { _id: req.params.id },
//               {
//                 $inc: { likes: -1 },
//                 $pull: { usersLiked: req.body.userId },
//                 _id: req.params.id,
//               }
//             )
//               .then(() => {
//                 res
//                   .status(201)
//                   .json({ message: "Le nouvel avis a été pris en compte!" });
//               })
//               .catch((error) => {
//                 res.status(400).json({ error: error });
//               });
//           }
//         })
//         .catch((error) => {
//           res.status(404).json({ error: error });
//         });
//       break;

//---------- Like du post ----------
//     case 1:
//       Sauces.updateOne(
//         { _id: req.params.id },
//         {
//           $inc: { likes: 1 },
//           $push: { usersLiked: req.body.userId },
//           _id: req.params.id,
//         }
//       )
//         .then(() => {
//           res.status(201).json({ message: "Like bien pris en compte!" });
//         })
//         .catch((error) => {
//           res.status(400).json({ error: error });
//         });
//       break;

//     default:
//       console.error("Mauvaise requête");
//   }
// };
