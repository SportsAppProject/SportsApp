// import the database connection

const connection = require("../index.js");

module.exports = {
  getAll: function (callback) {
    const sql = "SELECT * FROM user";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: function (callback, iduser, mail, username) {
    const sql = `INSERT INTO user (iduser,mail,username) VALUES("${iduser}","${mail}","${username}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  update: function (
    callback,
    mail,
    username,
    bio,
    gender,
    categorie,
    imageuser,
    iduser
  ) {
    const sql = `UPDATE user SET  mail ="${mail}" ,username= "${username}",bio = "${bio}", gender = "${gender}",categorie = "${categorie}",imageuser = "${imageuser}"  WHERE iduser ="${iduser}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
