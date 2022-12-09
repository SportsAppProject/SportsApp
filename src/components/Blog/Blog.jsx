import React, { useEffect, useState } from "react";
import AddBlog from "../AddBlog/AddBlog.jsx";
import Comment from "../Comment/Comment.jsx";
import MyVerticallyCenteredModal from "../Blog/ButtonShow.jsx";

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
  let [comment, setComment] = useState("");
  let [check, setCheck] = useState(false);
  let [commentsdata, setCommentsdata] = useState([]);

  const [modalShow, setModalShow] = React.useState(false);
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState([]);

  // function reverseit() {
  //   var arr = [];
  //   for (var i = props.post.length - 1; i > 0; i--) {
  //     arr.push(props.post[i]);
  //   }
  //   return arr;
  // }
  // useEffect(() => reverseit(), []);
  // console.log(reverseit());

  // console.log(data);

  // console.log(number_like);

  let updatelike = (number_like, id) => {
    // e.preventDefault();
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
        setComments(res.data);
        console.log(res.data);
      });
  };








  let DeletePoste = (idpost) => {
    axios.delete(`http://localhost:5000/api/posts/del/${idpost}`).then(() => {
      console.log("deleted");
      window.location.reload(false);
    });
  };

  return (
    <div>
      <div>
        <AddBlog />
      </div>

      <div>
        {props.post.map((element, index) => {
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
                            {/* <div>
                              <select id="list">
                                <option> ... </option>
                                <button
                                  className="list-group"
                                  onClick={() => {
                                    console.log("clikedd");
                                  }}
                                >
                                  Delete Post
                                </button>
                                <option className="list-group">
                                  Update Post
                                </option>
                              </select>
                            </div> */}
                            <button id="list">del </button>
                            <strong>{element.username} </strong>
                          </a>
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
                          Comment{" "}
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
                              <strong>
                                Malcolm Dosh 
                              </strong>
                            </a>
                            <a href="#!" className="text-muted d-block"></a>
                          </div>

                          <small> {element.commentcontent} </small>
                        </div>
                        //
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
      <>
        {/* <Button variant="primary">See Comments</Button> */}

        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          comments={comments}
        />
      </>
      <div> {view === "Add" && <AddBlog />}</div>
      <div></div>
    </div>
  );
};

export default Blog;

// {
//   props.comment.map((element, index) => {
//     return (
//      <div className="d-flex mb-3">
//                         <a href="#!">
//                           <img
//                             src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
//                             className="border rounded-circle me-2"
//                             alt="Avatar"
//                             style={{ height: "40px" }}
//                           />
//                         </a>
//                         <div>
//                           <div className="bg-light rounded-3 px-3 py-1">
//                             <a href="#!" className="text-dark mb-0">
//                               <strong>Malcolm Dosh</strong>
//                             </a>
//                             <a href="#!" className="text-muted d-block"></a>
//                           </div>

//                           <small> {element.commentcontent} </small>
//                         </div> //
//                       </div>
//     );
//   });
// }
