import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Style.css'
import Plane from "../../assets/plane.svg"

function PostPopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button  type="button" className="bg-white rounded btn2" onClick={handleShow}>
      <img src={Plane} alt=""  style={{ height: '40px', marginLeft :'10px',}}/>
      </button>

      <Modal className="modal-lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create new post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div >
    {/* <label for="exampleFormControlTextarea1"></label>
    <textarea className="form-control" id="exampleFormControlTextarea1"placeholder='lets post something!!!' rows="3"></textarea> */}
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="btn ">Post</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostPopUp;