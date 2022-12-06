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

let Blog = (props) => {
  let [like, setlike] = useState(3);
  const [view, setView] = useState("Blog");
  const [check, setCheck] = useState(false);

  let next = () => {
    setlike(like++);
  };

  let previous = () => {
    setlike(like--);
  };
  console.log(like);

  // i will fix it later
  let put = (like, id) => {
    axios
      .put(`http://localhost:5000/api/posts/updatelike/${id}`, {
        like: like,
      })
      .then(() => {
        console.log("like updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const[comments,setComments]=useState([])
  const[viewComment,setViewComment]=useState(false)

  const getComments=(idpost)=>{
    axios.get(`http://localhost:3000/api/comments/getCommentOnePost/${idpost}`)
    .then((res)=>{
      setComments(res.data)
      setViewComment(!viewComment)
      //console.log(res.data)

    })
  }

  return (
    <div>
      <div>
        <AddBlog />
      </div>

      <div>
        {props.post.map((element, i) => {
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
                        <div>
                          <a href="#!" className="text-muted">
                            counter of comments
                          </a>
                        </div>
                      </div>
                      <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
                        <MDBBtn size="lg" rippleColor="dark" color="link">
                          <MDBIcon fas icon="thumbs-up" className="me-2" /> Like
                        </MDBBtn>
                        <MDBBtn size="lg" rippleColor="dark" color="link">
                          <MDBIcon fas icon="comment-alt" className="me-2" />{" "}
                          Comments
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
                          <button> comment</button>
                        </div>
                      </div>


                      {viewComment?<div className="d-flex mb-3">
                        <a href="#!">
                          <img
                            src={element.imageuser}
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
                            <a href="#!" className="text-muted d-block">
                              <small>{comments[0].commentcontent}</small>
                            </a>
                          </div>
                          <a href="#!" className="text-muted small ms-3 me-2">
                            <strong>Like</strong>
                          </a>
                          <a href="#!" className="text-muted small me-2"></a>
                        </div>
                      </div>:null}
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
