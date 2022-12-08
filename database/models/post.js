// import the database connection

const connection = require("../index");

module.exports = {
  getAll: function (callback) {
    const sql = `SELECT *FROM post INNER JOIN user ON post.user_iduser=user.iduser`;
    // const sql = `SELECT *FROM post `;
    // const sql =
    //   "SELECT * FROM comment INNER JOIN user ON comment.user_iduser=user.iduser INNER JOIN post ON comment.post_idpost=idpost";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  // "SELECT idpost, postedat,posttitle,postcontent,postimage,categorie,likes,user_iduser FROM post UNION ALL SELECT idcomment, commentcontent,likes,user_iduser,post_idpost FROM comment"

  search: function (callback, posttitle) {
    // const sql = `SELECT * FROM post where (posttitle LIKE '%${posttitle}%')`;
    const sql = `SELECT * FROM post where posttitle LIKE '%${posttitle}%'`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: function (
    callback,
    postedat,
    posttitle,
    postcontent,
    postimage,
    categorie,
    user_iduser,
    like
  ) {
    const sql = `INSERT INTO post (postedat,posttitle,postcontent,postimage,categorie,user_iduser ) VALUES(
      "${postedat}","${posttitle}", "${postcontent}","${postimage}","${categorie}","${user_iduser}" )`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  del: function (callback, idpost) {
    const sql = `DELETE FROM post WHERE idpost="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putpost: function (
    callback,
    posttitle,
    postcontent,
    postimage,
    categorie,
    idpost
  ) {
    const sql = `UPDATE post SET posttitle ="${posttitle}", postcontent ="${postcontent}" ,postimage="${postimage}", categorie="${categorie}"  WHERE idpost ="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putlike: function (callback, likes, idpost) {
    // const sql =  `UPDATE post INNER JOIN user ON post.user_iduser = user.iduser SET post.like = '${likes}' where id  `
    const sql = `UPDATE post SET likes = '${likes}' WHERE idpost ="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  football: function (callback) {
    const sql =
      "SELECT * FROM post INNER JOIN user ON post.user_iduser = user.iduser WHERE post.categorie='football' ";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
