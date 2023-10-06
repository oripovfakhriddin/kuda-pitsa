import { Fragment, useContext } from "react"
import propTypes from "prop-types"
import { LazyLoadImage } from "react-lazy-load-image-component"



import "./products-cart.scss"
import { CartContext } from "../../../contexts/CartContext"
import ControlQuantityBtn from "../../controlQuntityBtn/control-quantity-btn"

const ProductsCart = ({id, name, image, description, price}) => {


  const { cartProducts, addToCart } = useContext(CartContext);

  let productInCart = cartProducts.find((pr)=>pr.id === id)

  return (
    <Fragment>
      <div className="product__item__box">
        <div className="product__item__img__box">
          <LazyLoadImage effect="blur" src={image} alt={name} />
        </div>
        <h3 className="product__item__title">{name}</h3>
        <p className="product__item__text">{description}</p>
        <div className="product__item__bottom">
          <div>
            {productInCart ? 
            <Fragment>
              <ControlQuantityBtn quantity={productInCart.quantity} id={id}/>
            </Fragment> : 
            (<button onClick={() => {addToCart(id)}} className="product__item__btn">Выбрать</button>)}
          </div>
          <p className="product__item__price">от <span>{ price }</span> ₽</p>
        </div>
      </div>
    </Fragment>
  )
}

ProductsCart.propTypes = {
  name: propTypes.string,
  id: propTypes.string,
  description: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
  addToCart: propTypes.func
}

export default ProductsCart