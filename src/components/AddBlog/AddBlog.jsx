import React, { useState } from "react";
import axios from "axios";
import "./AddBlog.css";

let AddBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [select, setSelect] = useState("");

  console.log(select);

  let add = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/posts/add", {
        postedat: new Date(),
        posttitle: title,
        postcontent: content,
        postimage: image,
        categorie: select,
        user_iduser: 1, //  logicly the connected personne
        like: 0,
      })

      .then(() => {
        console.log("added");
      });
  };

  return (
    <div>
      <div className="house-list-item">
        <h2>add post</h2>
        <input
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          className="input"
          type="text"
          placeholder="title"
        />
        <br />
        <input
          onChange={(event) => {
            setContent(event.target.value);
          }}
          className="input"
          type="text"
          placeholder="Content"
        />
        <br />
        <input
          onChange={(event) => {
            setImage(event.target.value);
          }}
          className="input"
          type="text"
          placeholder="URL image "
        />
        <br />
        <div>
          <select value={select} onChange={(e) => setSelect(e.target.value)}>
            <option> --- </option>
            <option value="football"> football </option>
            <option value="basketball"> basketball </option>
            <option value="tennis"> tennis </option>
          </select>
        </div>

        <br />
        <br />
        <input
          onClick={(e) => {
            add(e);
          }}
          type="submit"
          value="save"
        />
      </div>
    </div>
  );
};

export default AddBlog;
