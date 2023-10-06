import { Fragment } from "react"
import propTypes from "prop-types"
import { LazyLoadImage } from "react-lazy-load-image-component"



import "./products-cart.scss"

const ProductsCart = ({id, name, image, description, price, addToCart}) => {
  return (
    <Fragment>
      <div className="product__item__box">
        <div className="product__item__img__box">
          <LazyLoadImage effect="blur" src={image} alt={name} />
        </div>
        <h3 className="product__item__title">{name}</h3>
        <p className="product__item__text">{description}</p>
        <div className="product__item__bottom">
          <button onClick={() => {addToCart(id)}} className="product__item__btn">Выбрать</button>
          <p className="product__item__price">от <span>{ price }</span> ₽</p>
        </div>
      </div>
    </Fragment>
  )
}

ProductsCart.propTypes = {
  name: propTypes.string,
  id: propTypes.number,
  description: propTypes.string,
  image: propTypes.string,
  price: propTypes.number,
  addToCart: propTypes.func
}

export default ProductsCart