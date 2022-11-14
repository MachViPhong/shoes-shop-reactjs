import React, { Component } from 'react'
import style from './ProductItem.module.css';
export default class ProductItem extends Component {
    render() {
        const { prod, addToCart, viewDetail } = this.props;
        return (
            <div className='card'>
                <img src={prod.image} alt="..." className='w-100' style={{ objectFit: 'cover', height: 'object-fit' }} onClick={() => { viewDetail(prod) }} />
                <div className="card-body">
                    <p style={{
                        fontSize: 25,
                        fontWeight: 500,
                        color: 'brown',
                    }}>{prod.name}</p>
                    <p style={{
                        fontSize: 30,
                        fontWeight: 700,
                        color: 'red',
                    }}>{prod.price.toLocaleString()}$</p>
                    <button className='btn btn-warning ms-2 me-5' onClick={() => { addToCart(prod) }}>Add to cart <span>  </span>
                        <i className="fa fa-cart-plus"></i>
                    </button>
                    <button className='btn btn-success ms-5'  onClick={() => { viewDetail(prod) }}>view detail<span>  </span>
                        <i class="fa fa-eye"></i>
                    </button>
                    {/* <modal item={this.state.product/> */}
                </div>
            </div>
        )
    }
}

// onClick={()=>{themGioHang(prod)}}
