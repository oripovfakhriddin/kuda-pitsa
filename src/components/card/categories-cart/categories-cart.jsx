import { Fragment } from "react"
import { Link } from "react-router-dom"
import propTypes from "prop-types";


import "./categories-cart.scss"

const CategoriesCart = ({name, image}) => {
  return (
    <Fragment>
      <Link to="/">
        <div className="categories__cart__img-box">
          <img src={image} alt={name} />
        </div>
        <p>{name}</p>
      </Link>
    </Fragment>
  )
}

CategoriesCart.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
}


export default CategoriesCart