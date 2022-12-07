import React, { useState } from "react";
import AddBlog from "../AddBlog/AddBlog.jsx";
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
  const [view, setView] = useState("Blog");
  const [check, setCheck] = useState(false);

  console.log(number_like);
  console.log(check);

  let updatelike = (number_like, id) => {
    //  e.preventDefault();
    axios
      .put(`http://localhost:5000/api/posts/updatelike/${id}`, {
        like: number_like + 1,
      })
      .then(() => {
        window.location.reload(true);
        console.log("like updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // let func = () => {
  //   if (check) {
  //     setlike(like + 1);
  //     setCheck(!check);
  //   } else {
  //     setlike(like - 1);
  //     setCheck(!check);
  //   }
  // };

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
                            <strong>{element.username} </strong>
                          </a>
                          <a
                            href="#!"
                            className="text-muted d-block"
                            style={{ marginTop: "-6px" }}
                          >
                            <small>{element.postedat}</small> <br />
                            <small className="text-muted">
                              {element.categorie}
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

                        <MDBBtn size="lg" rippleColor="dark" color="link">
                          <MDBIcon fas icon="comment-alt" className="me-2" />{" "}
                          Commentyyys
                        </MDBBtn>
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
                          id="textAreaExample"
                          rows={2}
                          wrapperClass="w-100"
                        />

                        <div>
                          <button id="comment"> comment</button>
                        </div>
                      </div>

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
    </div>
  );
};

export default Blog;

//  <div>
//   <div className="bg-light rounded-3 px-3 py-1">
//     <a href="#!" className="text-dark mb-0">
//       <strong>Malcolm Dosh</strong>
//     </a>
//     <a href="#!" className="text-muted d-block">
//       <small>{element.commentcontent}</small>
//     </a>
//   </div>
//   <a href="#!" className="text-muted small ms-3 me-2">
//     <strong>Like</strong>
//   </a>
//   <a href="#!" className="text-muted small me-2"></a>
// </div>;
// <div className="d-flex mb-3">
//   <a href="#!">
//     <img
//       src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
//       className="border rounded-circle me-2"
//       alt="Avatar"
//       style={{ height: "40px" }}
//     />
//   </a>
// </div>;
