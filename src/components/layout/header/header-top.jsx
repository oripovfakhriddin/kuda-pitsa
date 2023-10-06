import { Fragment, useContext } from "react"
import { LanguageContext } from "../../../contexts/LanguageContext"


const HeaderTop = () => {

  const {langType, changeLanguages} = useContext(LanguageContext)

  return (
    <Fragment>
      <div className="container header__top__container">
        <div> 
          <h1>Куда пицца</h1>
        </div>
        <div className="selected__lang__box">
          <select value={langType} onChange={changeLanguages} >
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
          </select>
        </div>
      </div>
    </Fragment>
  )
}

export default HeaderTop