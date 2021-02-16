import React from 'react'

function NavBar() {
  return (
    <header className="header_wrap fixed-top">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg">
          <a
            className="navbar-brand animation"
            href="/"
            data-animation="fadeInDown"
            data-animation-delay="1s"
          >
            <span>
              <span className="btn-default backtext">
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/chart_icon.png"
                  alt="chart"
                />
              </span>
              <span className="btn-default backtext"> ryptoGold</span>
            </span>
            <img
              className="logo_dark"
              src="https://bestwebcreator.com/cryptocash/demo/assets/images/logo_dark.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler animation"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-animation="fadeInDown"
            data-animation-delay="1.1s"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto list_none">
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="1.8s"
              >
                <a className="nav-link nav_item" href="/">
                  Home
                </a>
              </li>
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="1.2s"
              >
                <a className="nav-link nav_item" href="/about">
                  About
                </a>
              </li>
              <li
                className="dropdown animation"
                data-animation="fadeInDown"
                data-animation-delay="1.3s"
              >
                <a
                  className="dropdown-toggle nav-link "
                  href="/"
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu">
                  <ul className="list_none">
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="/service"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item"
                        href="/teams"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item nav-link nav_item "
                        href="/pricing"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="1.4s"
              >
                <a className=" nav-link nav_item" href="/blogs">
                  Blog
                </a>
              </li>
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="1.5s"
              >
                <a className="nav-link nav_item" href="/faq">
                  Faq's
                </a>
              </li>
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="1.8s"
              >
                <a className="nav-link nav_item" href="/contacts">
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav nav_btn align-items-center">
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="1.9s"
              >
                <div className="lng_dropdown">
                  <select name="countries" id="lng_select">
                    <option
                      value="en"
                      data-image="https://bestwebcreator.com/cryptocash/demo/assets/images/eng.png"
                      data-title="English"
                    >
                      EN
                    </option>
                    <option
                      value="fn"
                      data-image="https://bestwebcreator.com/cryptocash/demo/assets/images/fn.png"
                      data-title="France"
                    >
                      FN
                    </option>
                    <option
                      value="us"
                      data-image="https://bestwebcreator.com/cryptocash/demo/assets/images/us.png"
                      data-title="United States"
                    >
                      US
                    </option>
                  </select>
                </div>
              </li>
              <li
                className="animation"
                data-animation="fadeInDown"
                data-animation-delay="2s"
              >
                <a
                  className="btn btn-default btn-radius nav_item"
                  href="/login"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
