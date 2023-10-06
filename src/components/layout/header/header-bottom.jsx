import { Fragment, useContext } from "react"
import { Link } from "react-router-dom";

import SiteLogoImg from "../../../assets/images/site-logo.svg"
import CartLogoImg from "../../../assets/images/cart-shop-korzinki.svg"

import "./header.scss"
import { LanguageContext } from "../../../contexts/LanguageContext";
import { CartContext } from "../../../contexts/CartContext";


const HeaderBottom = () => {

  const { lang } = useContext(LanguageContext)
  const { countTotalPrice } = useContext(CartContext)

  return (
    <Fragment>
      <header>
        <div className="container header__container">
          <div className="header__siteLogo__box">
            <Link to="/">
              <img src={SiteLogoImg} alt="Site Logo" />
            </Link>
          </div>
          <nav>
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <Link to="/">
                  {lang.discount}
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to="/">
                {lang.pizza}
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to="/">
                {lang.sushi}
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to="/">
                {lang.water}
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to="/">
                  {lang.zakuski}
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to="/">
                  {lang.kombo}
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to="/">
                  {lang.desert}
                </Link>
              </li>
              <li className="header__nav__item">
                <Link to="/">
                {lang.sous}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header__cart__box">
            <Link to="/cart" className="header__cart__box">
              <span><img src={CartLogoImg} alt="Cart Logo" /></span> <span>{countTotalPrice} ₽</span>
            </Link>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default HeaderBottom;