import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"


import "./cart-page.scss"
import CartOfPageCart from "../../components/card/cart-page-cart/cart-page-cart"

const CartPage = () => {

  const { cartProducts } = useContext(CartContext)

  return (
    <section>
      <div className="container__cart__page">
        <h1 className="cart__page__title">Ваш заказ</h1>
        <div>
          {cartProducts.length ? cartProducts.map((pr)=><CartOfPageCart key={pr.id} {...pr} />) : 
          <h1 style={{color: "#FF7010"}}>Ваш заказ недоступен</h1>}
        </div>
      </div>
    </section>
  )
}

export default CartPage;