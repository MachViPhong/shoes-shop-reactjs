import React, { Component } from "react";
import Cart from "./Cart";
import ModalDetail from "./ModalDetail";
import ProductList from "./ProductList";

export default class ShoesStore extends Component {
  state = {
    cart: [],
    showDetail: false,
    showCart: false,
    productDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      number: 1,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };

  addToCart = (prodClick) => {
    prodClick = { ...prodClick, number: 1 };
    let newCart = this.state.cart;
    let prod = newCart.find((prod) => prod.id === prodClick.id);
    if (prod) {
      prod.number += 1;
    } else {
      newCart.push(prodClick);
    }
    this.setState({
      cart: newCart,
      showCart: true,
    });
  };
  deleteProd = (idProd) => {
    console.log(idProd);
    let newCart = this.state.cart;
    newCart = newCart.filter((prod) => prod.id !== idProd);
    this.setState({
      cart: newCart,
    });
  };

  handleCloseModal = () => {
    this.setState({
      showDetail: false,
      showCart: false,
    });
  };

  viewDetail = (prodClick) => {
    this.setState({
      showDetail: true,
      productDetail: prodClick,
    });
  };

  increaseQuantity = (idClick) => {
    let newCart = this.state.cart;
    let prod = newCart.find((prod) => prod.id === idClick);
    prod.number++;
    this.setState({
      cart: newCart,
    });
  };
  decreaseQuantity = (idClick) => {
    let newCart = this.state.cart;
    let prod = newCart.find((prod) => prod.id === idClick);
    prod.number--;
   
    this.setState({
      cart: newCart,
    });
  };
  checkQuantity = (prodClick) =>{
    return prodClick.number === 1 ? true : false;
  }

  render() {
    return (
      <div className="container p-3 m-auto">
        <ModalDetail
          showDetail={this.state.showDetail}
          productDetail={this.state.productDetail}
          handleCloseModal={this.handleCloseModal}
        />
        {/* <h1 className='text-center pt-5'>Shoes Cart</h1> */}
        <Cart
          showCart={this.state.showCart}
          cart={this.state.cart}
          deleteProd={this.deleteProd}
          handleCloseModal={this.handleCloseModal}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
        //   isDisabled={this.state.isDisabled}
    
        />
        <h1 className="text-center">Shoes Shop</h1>
        <ProductList addToCart={this.addToCart} viewDetail={this.viewDetail} />
      </div>
    );
  }
}
