import { Fragment } from "react"
import { categories } from "../../data/categories"
import CategoriesCart from "../card/categories-cart/categories-cart"

import DiscountLogo from "../../assets/images/discount-logo.svg"

import "./categories-list.scss"

const CategoriesList = () => {
  return (
    <Fragment>
      <div className="categories__box">
        <CategoriesCart name = {"Акции"} image={DiscountLogo} />
        {categories.map((category)=>
        <CategoriesCart key={category.name} {...category}/> )}
      </div>
      
    </Fragment>
  )
}

export default CategoriesList