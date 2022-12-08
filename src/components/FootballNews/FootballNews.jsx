import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBContainer,
    MDBIcon,
    MDBRipple,
    MDBTextArea,
  } from "mdb-react-ui-kit";

//import cnx from "../../../database/index.js"

export default function FootballNews({data}) {
   console.log(data)
   /* useEffect(() => {
        async function getResults() {
          const results = await axios(`http://localhost:3000/api/comments/getNumber/${idpost}`);
          setNumberOfComment(results.data[0].number)
        }
        getResults()
      },[])*/

    return (
    <>
    <div>FootballNews</div>
    <div> 
        {data.map((e)=>{

            
            return (
                <>
            
            <div>
              <center>
                <MDBContainer className="py-5 shadow-lg rounded">
                  <MDBCard style={{ maxWidth: "42rem" }}>
                    <MDBCardBody>
                      <div className="d-flex mb-3">
                        <a href="#!">
                          <img
                            src={e.imageuser}
                            className="border rounded-circle me-2"
                            alt="Avatar"
                            style={{ height: "40px" }}
                          />
                        </a>
                        <div>
                          <a href="#!" className="text-dark mb-0">
                            <strong>{e.username} </strong>
                          </a>
                          <a
                            href="#!"
                            className="text-muted d-block"
                            style={{ marginTop: "-6px" }}
                          >
                            <small>{e.postedat}</small> <br />
                            <small className="text-muted">
                              {e.categorie}
                            </small>
                          </a>
                        </div>
                      </div>
                      <div>
                        <b>{e.posttitle}</b>
                        <p>{e.postcontent}</p>
                      </div>
                    </MDBCardBody>
                    <MDBRipple
                      className="bg-image hover-overlay ripple rounded-0"
                      rippleTag="div"
                      rippleColor="light"
                    >
                      <img src={e.postimage} className="w-100" />
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
                            <span> {e.likes} like</span>
                          </a>
                        </div>
                        <div>
                          <a href="#!" className="text-muted">

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
                            src={e.imageuser}
                            className="border rounded-circle me-2"
                            alt="Avatar"
                            style={{ height: "40px" }}
                          />
                        </a>
                        <MDBTextArea
                          label="Message"
                          id="textAreaExample"
                          rows={2}
                          wrapperClass="w-100"
                        />
                      </div>
                      <div className="d-flex mb-3">
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
                            <a href="#!" className="text-muted d-block">
                              <small>{e.commentcontent} </small>
                            </a>
                          </div>
                          <a href="#!" className="text-muted small ms-3 me-2">
                            <strong>Like</strong>
                          </a>
                          <a href="#!" className="text-muted small me-2"></a>
                        </div>
                      </div>
                      <div className="d-flex mb-3"></div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBContainer>
              </center>
            </div>
            </>
            )
        })}
    </div>
  </>
  )
  
}
