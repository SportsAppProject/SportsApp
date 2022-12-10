import React, { useEffect, useState } from "react";
import AddBlog from "../AddBlog/AddBlog.jsx";
import Comment from "../Comment/Comment.jsx";
import Navbar from "../NavBar/Navbar.jsx";
import Button from "react-bootstrap/Button";
import SeeCommentBlog from "./SeeCommentBlog.jsx";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBTextArea,
} from "mdb-react-ui-kit";

import axios from "axios";
import "./Blog.css";

let Blog = (props) => {
  let [number_like, setlike] = useState(0);
  let [view, setView] = useState("Blog");
  let [commentsdata, setCommentsdata] = useState([]);
  let [comment, setComment] = useState([]);
  let [post, setPost] = useState([]);
  const [modalShow, setModalShow] = React.useState(false);

  let updatelike = (number_like, id) => {
    axios
      .put(`http://localhost:5000/api/posts/updatelike/${id}`, {
        like: number_like + 1,
      })
      .then(() => {
        window.location.reload();
        console.log("like updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let addComment = (id_user, id_post) => {
    axios
      .post(`http://localhost:5000/api/comments/add`, {
        commentcontent: comment,
        likes: 0,
        user_iduser: id_user,
        post_idpost: id_post,
      })
      .then(() => {
        window.location.reload(false);
        console.log("added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  ///
  const getComments = (idpost) => {
    axios
      .get(`http://localhost:5000/api/comments/getCommentOnePost/${idpost}`)
      .then((res) => {
        setCommentsdata(res.data);
        setView("Comment");
        console.log(res.data);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:5000/api/comments/getall").then((result) => {
      // console.log(result.data);
      setComment(result.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts/getall").then((result) => {
      // console.log(result.data);
      setPost(result.data);
    });
  }, []);

  let DeletePoste = (idpost) => {
    axios.delete(`http://localhost:5000/api/posts/del/${idpost}`).then(() => {
      console.log("deleted");
      window.location.reload(false);
    });
  };

  // let UpdatePoste = (idpost, newname) => {
  //   axios
  //     .put(`http://localhost:5000/api/posts/del/${idpost}`, {
  //       posttitle: newname,
  //       postcontent: img,
  //       postimage: img,
  //       category: img,
  //     })
  //     .then(() => {
  //       console.log("updated");
  //       window.location.reload(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div>
      <Navbar />
      <div>
        <AddBlog />
      </div>

      <div>
        {post.map((element, index) => {
          return (
            <div>
              <center>
                <MDBContainer className="py-5">
                  <MDBCard style={{ maxWidth: "42rem" }}>
                    <MDBCardBody>
                      <div className="d-flex mb-3">
                        <a href="#!">
                          <img
                            src={element.imageuser}
                            className="border rounded-circle me-2"
                            alt="Avatar"
                            style={{ height: "40px" }}
                          />
                        </a>

                        <div>
                          <a href="#!" className="text-dark mb-0">
                            <strong>{element.username} </strong>
                          </a>
                          <button
                            onClick={() => {
                              DeletePoste(element.idpost);
                            }}
                            id="list"
                          >
                            {" "}
                            🗑️{" "}
                          </button>
                          <button id="list1"> ⚙️ </button>

                          <a
                            href="#!"
                            className="text-muted d-block"
                            style={{ marginTop: "-6px" }}
                          >
                            <small>{element.postedat}</small> <br />
                            <small className="text-muted">
                              {element.category}
                            </small>
                          </a>
                        </div>
                      </div>
                      <div>
                        <b>{element.posttitle}</b>
                        <p>{element.postcontent}</p>
                      </div>
                    </MDBCardBody>
                    <MDBRipple
                      className="bg-image hover-overlay ripple rounded-0"
                      rippleTag="div"
                      rippleColor="light"
                    >
                      <img src={element.postimage} className="w-100" />
                      <a href="#!">
                        <div
                          className="mask"
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.2)",
                          }}
                        ></div>
                      </a>
                    </MDBRipple>
                    <MDBCardBody>
                      <div className="d-flex justify-content-between mb-3">
                        <div>
                          <a href="#!">
                            <MDBIcon
                              fas
                              icon="thumbs-up"
                              color="primary"
                              className="me-1"
                            />
                            <MDBIcon
                              fas
                              icon="heart"
                              color="danger"
                              className="me-1"
                            />
                            <span> {element.likes} like</span>
                          </a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
                        <button class="button button-like">
                          <i class="fa fa-heart"></i>
                          <span
                            onClick={() =>
                              updatelike(element.likes, element.idpost)
                            }
                          >
                            Like
                            {/* 👍🏻 */}
                          </span>
                        </button>
                        <MDBIcon fas icon="comment-alt" className="me-2" />

                        <span
                          onClick={() => {
                            getComments(element.idpost);
                            setModalShow(true);
                          }}
                        >
                          Show all Comments
                        </span>
                        <MDBBtn size="lg" rippleColor="dark" color="link">
                          {/* <MDBIcon fas icon="share" className="me-2" /> Share */}
                        </MDBBtn>
                      </div>
                      <div className="d-flex mb-3">
                        <a href="#!">
                          <img
                            src={element.imageuser}
                            className="border rounded-circle me-2"
                            alt="Avatar"
                            style={{ height: "40px" }}
                          />
                        </a>
                        <MDBTextArea
                          onChange={(event) => {
                            setComment(event.target.value);
                          }}
                          id="textAreaExample"
                          rows={2}
                          wrapperClass="w-100"
                        />

                        <div>
                          <button
                            onClick={() => {
                              addComment(element.user_iduser, element.idpost);
                            }}
                            id="comment"
                          >
                            comment
                          </button>
                        </div>
                      </div>

                      {/* <div className="d-flex mb-3">
                        <a href="#!">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
                            className="border rounded-circle me-2"
                            alt="Avatar"
                            style={{ height: "40px" }}
                          />
                        </a>
                        <div>
                          <div className="bg-light rounded-3 px-3 py-1">
                            <a href="#!" className="text-dark mb-0">
                              <strong>Malcolm Dosh</strong>
                            </a>
                            <a href="#!" className="text-muted d-block"></a>
                          </div>

                          <small> {element.commentcontent} </small>
                        </div> // 
                      </div> */}
                      <div className="d-flex mb-3"></div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </center>
            </div>
          );
        })}
      </div>
      <div> {view === "Add" && <AddBlog />}</div>
      <div></div>
      <>
        <SeeCommentBlog
          show={modalShow}
          onHide={() => setModalShow(false)}
          comments={commentsdata}
        />
      </>
    </div>
  );
};

export default Blog;
