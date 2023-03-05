import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const DownloadPicture = ({ submit}) => {

  const [image, setImage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    axios.put("/user/profile/profilepicture", formData)
    .then((response) => {
      console.log("photo uploaded");
      setImage(formData)
    })
    .catch((error) => {
    console.log(error);
    });
  };
  return (
    <Form
      onSubmit={onSubmit}
      className="h-full w-full flex flex-col items-center justify-center">
      <Form.Group className="flex w-60 items-center justify-between " controlId="image">
        <Form.Control
          className="text-center h-7 flex text-xs justify-center "
          type="file"
          onChange={(event) => {
            if (event.target.files && event.target.files[0]) {
                setImage(event.target.files[0]);
                console.log(event.target.files[0]);
                //URL.createObjectURL(event.target.files[0])
            }
          }}
        />
      </Form.Group>
        <Button className="text-7xl  hover:drop-shadow h-18 " type="submit">
          +
        </Button>
      </Form>
    );
  };
export default DownloadPicture;

