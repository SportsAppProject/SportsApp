import React, { useState } from "react";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBContainer,
  MDBIcon,
  MDBRipple,
  MDBTextArea,
} from "mdb-react-ui-kit";

let Search = (props) => {
  // console.log(props.serchedData, "hethi mel search");

  console.log(props.serchedData, "hethi data jeya mel navbar ll search ");
  console.log(props.post, "trah chouf ");

  // console.log(props.post[0]);

  // let [data, setData] = useState([]);

  // async function ched() {
  //   await setData(props.post);
  // }
  // console.log(data, "hethi data");

  return (
    <div>
      <div>
        <div>
          <center>
            <MDBContainer className="py-5">
              <MDBCard style={{ maxWidth: "42rem" }}>
                <MDBCardBody>
                  <div className="d-flex mb-3">
                    <a href="#!">
                      <img
                        // src={element.imageuser}
                        src="gg"
                        className="border rounded-circle me-2"
                        alt="Avatar"
                        style={{ height: "40px" }}
                      />
                    </a>
                    <div>
                      <a href="#!" className="text-dark mb-0">
                        {/* <strong>{element.username} </strong> */}
                        <strong> username </strong>
                      </a>
                      <a
                        href="#!"
                        className="text-muted d-block"
                        style={{ marginTop: "-6px" }}
                      >
                        {/* <small>{element.postedat}</small> <br /> */}
                        <small> props.post[0].postedat</small> <br />
                        {/* <small className="text-muted">{element.categorie}</small> */}
                        <small className="text-muted">
                          element.categorie: football
                        </small>
                      </a>
                    </div>
                  </div>
                  <div>
                    {/* <b>{element.posttitle}</b> */}
                    <b>element.posttitlefefef</b>
                    {/* <p>{element.postcontent}</p> */}
                    <p>element.postcontent</p>
                  </div>
                </MDBCardBody>
                <MDBRipple
                  className="bg-image hover-overlay ripple rounded-0"
                  rippleTag="div"
                  rippleColor="light"
                >
                  <img src="element.postimage" className="w-100" />
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
                        <span> like</span>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between text-center border-top border-bottom mb-4">
                    <button class="button button-like">
                      <i class="fa fa-heart"></i>
                      <span>Like</span>
                    </button>
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
                        src="element.imageuser"
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
                  <div className="d-flex mb-3"></div>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Search;
