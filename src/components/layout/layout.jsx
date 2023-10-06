import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import HeaderBottom from "./header/header-bottom"
import Footer from "./footer/footer"
import HeaderTop from "./header/header-top"


const Layout = () => {
  return (
    <Fragment>
      <HeaderTop />
      <HeaderBottom />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout