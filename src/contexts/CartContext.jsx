import { Fragment, createContext, useState } from "react";
import propTypes from "prop-types";
import { CARTLOCKEY } from "../constants/localstorageKeys/keys";
import { products } from "../data/products";

export const CartContext = createContext();


const CartContextProvider = ({ children }) => {

  const [cartProducts, setCartProducts] = useState(JSON.parse(localStorage.getItem(CARTLOCKEY)) || [] );

  const controlQuantity = (id, checkOperation) => {
    const newProduct = cartProducts.map((pr)=>{
      if(pr.id === id){
        checkOperation === "+" ? pr.quantity++ : pr.quantity--
      }
      return pr
    });
    return newProduct
  }

  const addToCart = (id) => {
    let product = products.find((pr)=>pr.id === id);
    let productInCart = cartProducts.find((pr)=> pr.id === id)

    let newProduct;

    if (productInCart) {
      newProduct = controlQuantity(id, "+")
    } else {
        product.quantity = 1;
        newProduct = [...cartProducts, product];
    }
    localStorage.setItem(CARTLOCKEY, JSON.stringify(newProduct))
    setCartProducts(newProduct)
  }

  const increaseQuantity = (id) => {
    let newProduct = controlQuantity(id, "+")
    localStorage.setItem(CARTLOCKEY, JSON.stringify(newProduct))
    setCartProducts(newProduct)
  }

  const decreaseQuantity = (id) => {
    let newProduct;
    let check = cartProducts.find((pr)=> pr.id === id)
    if (check.quantity > 1 ) {
      newProduct = controlQuantity(id, "-")
    } else {
      newProduct = cartProducts.filter((pr)=> pr.id !== id)
    }
    localStorage.setItem(CARTLOCKEY, JSON.stringify(newProduct))
    setCartProducts(newProduct)
  }

  let countTotalPrice = cartProducts.reduce((acc, pr)=>{return acc+pr.price * pr.quantity}, 0)

  

  const state = {cartProducts, addToCart, increaseQuantity, decreaseQuantity, countTotalPrice}

  return (
    <Fragment>
      <CartContext.Provider value={state}>
        {children}
      </CartContext.Provider>
    </Fragment>
  )
}

CartContextProvider.propTypes = {
  children: propTypes.node
}

export default CartContextProvider;