import propTypes from "prop-types"


import { Fragment } from "react";
import "./products-list.scss";
import { products } from "../../data/products";
import ProductsCart from "../card/products-cart/products-cart";
import FilterIcon from "../../assets/images/filter-icon.svg"
const ProductsList = ({name}) => {

  return (
    
    <Fragment>
      <section id={name}>
        <div className="categories__title__box">
          <h2>{name}</h2>
          <button>
            <img src={FilterIcon} alt="Filter icon" />
            <span>Фильтры</span>
          </button>
        </div>
        <div className="categories__products__box">
          {products.map((pr)=>{
            if (pr.category === name) {
              return <ProductsCart key={pr.id} {...pr} />
            }
          })}
        </div>
      </section>
      
    </Fragment>
  )
}

ProductsList.propTypes = {
  name: propTypes.string
}

export default ProductsList;