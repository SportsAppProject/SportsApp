import React, { useState } from "react";
import { MDBInputGroup } from "mdb-react-ui-kit";

import axios from "axios";
import "./AddBlog.css";

let AddBlog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);

  console.log(select);

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let name = month[new Date().getMonth()];

  let posted_at =
    name +
    " " +
    new Date().getDate() +
    " " +
    "2022" +
    " " +
    new Date().getHours() +
    ":" +
    new Date().getMinutes();

  let addPost = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/posts/add", {
        postedat: posted_at,
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
      <body>
        <div class="wrapper">
          <div class="title">
            <h2>Add Post </h2>
          </div>
          <div class="content">
            <p></p>
            <ul>
              <input
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                type="text"
                placeholder="Title"
              ></input>
            </ul>
            <ul>
              <input
                onChange={(event) => {
                  setContent(event.target.value);
                }}
                type="text"
                placeholder="Content"
              ></input>
            </ul>
            <ul>
              <input
                onChange={(event) => {
                  setImage(event.target.value);
                }}
                type="text"
                placeholder="URL image"
              ></input>
            </ul>
          </div>
          <div>
            <select
              class="wrapper1"
              value={select}
              onChange={(e) => setSelect(e.target.value)}
            >
              <option> --- </option>
              <option value="football"> football </option>
              <option value="basketball"> basketball </option>
              <option value="tennis"> tennis </option>
            </select>
          </div>
          <div class="details">
            <p>
              <span> Choose the Categories </span>
            </p>
            <button
              onClick={(e) => {
                addPost(e);
              }}
            >
              Save
            </button>
          </div>
        </div>
      </body>
    </div>

    // <div>
    //   <div className="house-list-item">
    //     <h2>add post</h2>
    //     <input
    //       onChange={(event) => {
    //         setTitle(event.target.value);
    //       }}
    //       className="input"
    //       type="text"
    //       placeholder="title"
    //     />
    //     <br />
    //     <input
    //       onChange={(event) => {
    //         setContent(event.target.value);
    //       }}
    //       className="input"
    //       type="text"
    //       placeholder="Content"
    //     />
    //     <br />
    //     <input
    //       onChange={(event) => {
    //         setImage(event.target.value);
    //       }}
    //       className="input"
    //       type="text"
    //       placeholder="URL image "
    //     />
    //     <br />
    //     <div>
    //       <select value={select} onChange={(e) => setSelect(e.target.value)}>
    //         <option> --- </option>
    //         <option value="football"> football </option>
    //         <option value="basketball"> basketball </option>
    //         <option value="tennis"> tennis </option>
    //       </select>
    //     </div>

    //     <br />
    //     <br />
    //     <input
    //       onClick={(e) => {
    //         add(e);
    //       }}
    //       type="submit"
    //       value="save"
    //     />
    //   </div>
    // </div>
  );
};

export default AddBlog;
