import React, { Component } from 'react'
import Cart from './Cart'
import ProductList from './ProductList'


export default class ShoesStore extends Component {
    state = {
        cart: [{
            id: 1,
            name: "Adidas Prophere",
            alias: "adidas-prophere",
            price: 350,
            number: 1,
            description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
            shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
            quantity: 995,
            image: "http://svcy3.myclass.vn/images/adidas-prophere.png"
        }]
    }

    addToCart = (prodClick) => {
        prodClick = { ...prodClick, number: 1 };
        let newCart = this.state.cart;
        let prod = newCart.find(prod => prod.id === prodClick.id);
        if (prod) {
            prod.number += 1;
        }
        else {
            newCart.push(prodClick);
        }
        this.setState({
            cart: newCart,
        })
    }
    deleteProd = (idProd) => {
        console.log(idProd);
        let newCart = this.state.cart;
        newCart = newCart.filter(prod => prod.id !== idProd);
        this.setState({
            cart: newCart,
        })
    }

    // viewDetail = (prodClick) => {
    //     console.log(prodClick);
    //     let contentHTML = "";
    //     contentHTML += `
    //     <div class="modal" tabindex="-1">
    //         <div class="modal-dialog">
    //             <div class="modal-content">
    //             <div class="modal-header">
    //                 <h5 class="modal-title">Detail shoe</h5>
    //                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //             </div>
    //             <div class="modal-body">
    //                 <table className='table'>
    //                         <thead>
    //                             <tr>
    //                                 <td>Name</td>
    //                                 <td>${prodClick.name}</td>
    //                             </tr>
    //                             <tr>
    //                                 <td>Alias</td>
    //                                 <td>${prodClick.alias}</td>
    //                             </tr>
    //                             <tr>
    //                                 <td>Description</td>
    //                                 <td>${prodClick.description}</td>
    //                             </tr>
    //                             <tr>
    //                                 <td>Short Description</td>
    //                                 <td>${prodClick.shortDescription}</td>
    //                             </tr>
    //                             <tr>
    //                                 <td>Quantity</td>
    //                                 <td>${prodClick.quantity}</td>
    //                             </tr>
    //                         </thead>
    //                     </table>
    //                 </div>
    //             <div class="modal-footer">
    //                 <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                 <button type="button" class="btn btn-primary">Ok</button>
    //             </div>
    //             </div>
    //         </div>
    //     </div>
    //     `
    //     console.log(contentHTML);
    //     window.innerHTML = contentHTML;
    // }
    render() {
        return (
            <div className='container p-3 m-auto'>
                <h1 className='text-center pt-5'>Shoes Cart</h1>
                <Cart cart={this.state.cart} deleteProd={this.deleteProd} />
                <h1 className='text-center pt-5'>Shoes Shop</h1>
                <ProductList addToCart={this.addToCart} viewDetail={this.viewDetail}/>
            </div>
        )
    }
}
