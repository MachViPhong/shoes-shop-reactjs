import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class Cart extends Component {
    checkDisabled = (prod) =>{
        return prod.number === 1 ? true : false;
    }
    render() {
        const { showCart, handleCloseModal, cart, deleteProd, increaseQuantity, decreaseQuantity } = this.props;
        return (
            <>
                <Modal
                    show={showCart}
                    onHide={handleCloseModal}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Product Detail</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Cost</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((shoe, index) => {
                                    return <tr>
                                        <td>{shoe.id}</td>
                                        <td>{shoe.name}</td>
                                        <td>
                                            <img src={shoe.image} width={50} height={50} alt="..." />
                                        </td>
                                        <td>
                                            <button className='btn btn-primary' onClick={() => { increaseQuantity(shoe.id) }}>+</button>
                                            <span className='mx-2'>{shoe.number}</span>

                                            <button className='btn btn-primary' onClick={() => { decreaseQuantity(shoe.id) }} disabled={this.checkDisabled(shoe)}>-</button></td>
                                        <td>{shoe.price}</td>
                                        <td>{shoe.number * shoe.price}</td>
                                        <td>
                                            <button className='btn btn-danger' onClick={() => { deleteProd(shoe.id) }}>
                                                <i className="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                })}
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
