const connection = require("../index.js");

module.exports = {
  getAll: function (callback) {
    const sql = "SELECT * FROM comment";
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  add: function (callback, commentcontent, likes, user_iduser, post_idpost) {
    const sql = `INSERT INTO comment (commentcontent,likes,user_iduser,post_idpost) VALUES("${commentcontent}","${likes}","${user_iduser}","${post_idpost}")`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  delete: function (callback, idcomment) {
    const sql = `DELETE FROM comment WHERE idcomment="${idcomment}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putcomment: function (callback, commentcontent, idcomment) {
    const sql = `UPDATE comment SET commentcontent ="${commentcontent}" WHERE idcomment =${idcomment}`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getNumber: function (callback, idpost) {
    const sql = `select count(idcomment) as number from comment where post_idpost="${idpost}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  getCommentOnePost: function (callback, idpost) {
    const sql = `SELECT * FROM comment INNER JOIN user ON comment.user_iduser = user.iduser WHERE comment.post_idpost=${idpost} `;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  putlCommentike: function (callback, likes, idcomment) {
    // const sql =  `UPDATE post INNER JOIN user ON post.user_iduser = user.iduser SET post.like = '${likes}' where id  `
    const sql = `UPDATE post SET likes = '${likes}' WHERE idcomment ="${idcomment}"`;
    connection.query(sql, function (error, results) {
      callback(error, results);
    });
  },
};
