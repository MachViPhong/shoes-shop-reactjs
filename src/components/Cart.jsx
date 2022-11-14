import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        const { cart, deleteProd} = this.props;
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Number</th>
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
                            <td>{shoe.number}</td>
                            <td>{shoe.price}</td>
                            <td>{shoe.number * shoe.price}</td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>{deleteProd(shoe.id)}}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}
