import { Fragment } from "react";

import "./homePage.scss"
import CategoriesList from "../../components/categories-list/categories-list";
import ProductsList from "../../components/products-list/products-list";
import { categories } from "../../data/categories";

const HomePage = () => {

  

  return (
  <Fragment>
    <section>
      <div className="container products__container">
        <CategoriesList /> 
        {categories.map((category, index)=><ProductsList key={index} { ...category }/>)}
      </div>
    </section>
  </Fragment> 
  )
}

export default HomePage;