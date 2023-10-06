import { Fragment, createContext, useState } from "react";
import languages from "../data/languages";
import propTypes from "prop-types";
import { LANGLOCKEY } from "../constants/localstorageKeys/keys";

export const LanguageContext = createContext();


const LanguageContextProvider = ({ children }) => {

  const [langType, setLangType] = useState(localStorage.getItem(LANGLOCKEY) || "ru");
  
  const changeLanguages = (e) => {
    let lang = e.target.value
    setLangType(lang)
    localStorage.setItem(LANGLOCKEY, lang)
  }

  const state = {langType, lang: languages[langType], changeLanguages}

  return (
    <Fragment>
      <LanguageContext.Provider value={state}>
        {children}
      </LanguageContext.Provider>
    </Fragment>
  )
}

LanguageContextProvider.propTypes = {
  children: propTypes.node
}

export default LanguageContextProvider