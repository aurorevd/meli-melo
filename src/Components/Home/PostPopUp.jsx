import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Style.css'
import AsciiArtSketch from '../AsciiArtSketch';


function PostPopUp() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  type="button" class="btn me-3" onClick={handleShow}>
       Post
      </Button>

      <Modal class="modal-lg"
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
        <AsciiArtSketch />
    {/* <label for="exampleFormControlTextarea1"></label>
    <textarea class="form-control" id="exampleFormControlTextarea1"placeholder='lets post something!!!' rows="3"></textarea> */}
  </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button class="btn ">Post</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PostPopUp;