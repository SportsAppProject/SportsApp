import React from "react";
import axios from 'axios'

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


export default function SeeCommentBlog(props) {
  console.log(props.iduser);


  const likeComment=(idcomment)=>{
    axios.put(`http://localhost:5000/api/comments/like/${idcomment}`)
    .then(()=>{
      console.log("////////////////// LIKE UPDATED YEYYY ")
    })
  }


  const deleteThisComment=(idcomment)=>{
    axios.delete(`http://localhost:5000/api/comments/${idcomment}`)
    .then(()=>{
      console.log("******************deletedddd")
    })
  }

return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Comment Section
        </Modal.Title>
      </Modal.Header>

      {props.comments.map((e) => {
        return (
          <>
            <Modal.Body>
            {e.user_iduser===props.iduser?<button 
                            onClick={() => {
                              deleteThisComment(e.idcomment);
                            }}
                            id="list-comment"
                          >
                            {" "}
                            🗑️{" "}
                          </button>:null}


              <h4>{e.username}</h4>
              <p>{e.commentcontent}</p>
              <span
                style={{ color: "red", float: "right" }}
                onClick={() =>likeComment(e.idcomment)}
              >
                {e.likes} Likes
              </span>
            </Modal.Body>
            <hr/>
          </>
        );
      })}

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
