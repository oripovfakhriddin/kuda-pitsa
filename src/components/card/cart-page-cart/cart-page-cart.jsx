import { Fragment } from "react"
import propTypes from "prop-types"

import "./cart-page-cart.scss"
import ControlQuantityBtn from "../../controlQuntityBtn/control-quantity-btn"

const CartOfPageCart = ({id, quantity, image, name, description, price}) => {
  return (
    <Fragment>
      <div className='cart__page__cart-box'>
        <div className="cart__page__cart-right">
          <div className='cart__page__cart__img-box'>
            <img src={image} alt={name} />
          </div>
          <div className="cart__page__cart__info-box">
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        </div>
        <div className="quantit__info__box">
          <ControlQuantityBtn id={id} quantity={quantity}/>
          <p className="quantit__info">{price} ₽</p>
        </div>
      </div>
    </Fragment>
  )
}

CartOfPageCart.propTypes={
  image: propTypes.string,
  name: propTypes.string,
  description: propTypes.string,
  id: propTypes.string,
  quantity: propTypes.number,
  price: propTypes.number
}

export default CartOfPageCart