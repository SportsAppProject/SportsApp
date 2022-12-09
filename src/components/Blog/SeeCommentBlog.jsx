import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function SeeCommentBlog(props) {
    console.log(props.comments)
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
          

          {props.comments.map((e)=>{
            return(
                <>
                <Modal.Body>
                     <h4>{e.username}</h4>
                         <p>
                        {e.commentcontent}
                          </p>
                          <span style={{color:"red",float:"right"}} onClick={()=>console.log(e.idcomment)}>{e.likes} Likes</span>
          </Modal.Body></>
            )
          })}
          


          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}
