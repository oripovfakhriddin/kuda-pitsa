import { Fragment, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import propTypes from "prop-types"


const ControlQuantityBtn = ({id, quantity}) => {

  const {increaseQuantity, decreaseQuantity} = useContext(CartContext)

  return (
    <Fragment>
      <button onClick={()=>{decreaseQuantity(id)}} className="control__quantity__btn">-</button>
      <span className="product__quantity">{quantity}</span>
      <button onClick={()=>{increaseQuantity(id)}} className="control__quantity__btn">+</button>
    </Fragment>
  )
}

ControlQuantityBtn.propTypes = {
  id: propTypes.string,
  quantity: propTypes.number
}

export default ControlQuantityBtn