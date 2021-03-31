import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class BookFormModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add A Book!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => this.props.addABook(e)}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="Title" onChange={(e) => this.props.updateBookName(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" placeholder="Description" onChange={(e) => this.props.updateBookDescription(e.target.value)}/>
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control type="text" placeholder="Status" onChange={(e) => this.props.updateBookStatus(e.target.value)}/>
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.props.handleClose}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.handleClose} variant="secondary">Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default BookFormModal;