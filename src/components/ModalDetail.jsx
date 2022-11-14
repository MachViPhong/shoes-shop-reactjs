import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class ModalDetail extends Component {
  render() {
    const { showDetail, productDetail, handleCloseModal } = this.props;
    return (
        <>
        <Modal
          show={showDetail}
          onHide={handleCloseModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header closeButton>
            <Modal.Title>Product Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Image</th>
                  <th>Description</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{productDetail.id}</td>
                  <td>{productDetail.name}</td>
                  <td>
                    <img
                      src={productDetail.image}
                      width={50}
                      height={50}
                      alt="..."
                    />
                  </td>
                  <td>{productDetail.description}</td>
                  <td>{productDetail.quantity}</td>
                  <td>{productDetail.price}$</td>
                </tr>
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}
