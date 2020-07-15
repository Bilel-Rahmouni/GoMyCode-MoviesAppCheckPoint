import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add a movie
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label className="input">Title:</label>
                <input type="text" name="name" onChange={this.handleChange} />
              </div>
              <div>
                <label   className="input">
                  Image:
                </label>
                <input type="file" alt="..." name="image" />
              </div>
              <div>
                <label className="input">Rating:</label>
                <input type="text" name="rating" />
              </div>
              <div>
                <label className="input">Date:</label>
                <input type="date" name="year" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary">Add movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
export default AddMovie;
