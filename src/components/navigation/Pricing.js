import React from 'react'
import Footer from '../body/Footer'

function Pricing() {
  return (
    <>
      {/* START HEADER */}
      <header className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand animation"
              href="/"
              data-animation="fadeInDown"
              data-animation-delay="1s"
            >
              <img
                className="logo_light"
                src="https://bestwebcreator.com/cryptocash/demo/assets/images/logo.png"
                alt="logo"
              />
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
              <span className="ion-android-menu"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
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
                    className="dropdown-toggle nav-link active"
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
                          className="dropdown-item nav-link nav_item active"
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
                  <a
                    className=" nav-link nav_item"
                    href="/blogs"
                    data-toggle="dropdown"
                  >
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
                        data-image="assets/images/eng.png"
                        data-title="English"
                      >
                        EN
                      </option>
                      <option
                        value="fn"
                        data-image="assets/images/fn.png"
                        data-title="France"
                      >
                        FN
                      </option>
                      <option
                        value="us"
                        data-image="assets/images/us.png"
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
      {/* END HEADER */}

      {/* START SECTION BANNER */}
      <section
        className="section_breadcrumb blue_light_bg"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="assets/images/home_banner_bg.png"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  Pricing Table
                </h1>
                <ul
                  className="breadcrumb bg-transparent justify-content-center animation m-0 p-0"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  <li>
                    <a href="clone.html#">Home</a>{' '}
                  </li>
                  <li>
                    <span>Pricing Table</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION PRICING TABLE- */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Choose Your Plan
                </h4>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_20">
                <div className="pr_title blue_light_bg">
                  <h3>Basic</h3>
                  <div className="price_tage">
                    <h3>$3000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li>Normal Deposit</li>
                    <li>$200</li>
                    <li>Initial Withdrawal</li>
                    <li>$3900</li>
                    <li>Bonus</li>
                    <li>$50</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_30">
                <div className="pr_title pink_bg">
                  <h3>Standard</h3>
                  <div className="price_tage">
                    <h3>$3000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li>Normal Deposit</li>
                    <li>$400</li>
                    <li>Initial Withdrawal</li>
                    <li>$5900</li>
                    <li>Bonus</li>
                    <li>$100</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_30">
                <div className="pr_title yellow_bg">
                  <h3>Untimate</h3>
                  <div className="price_tage">
                    <h3>$5000.00</h3>
                    <span>Token Plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li>Normal Deposit</li>
                    <li>$1000</li>
                    <li>Initial Withdrawal</li>
                    <li>$7800</li>
                    <li>Bonus</li>
                    <li>$200</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Special Plans
                </h4>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_20">
                <div className="pr_title blue_light_bg">
                  <h3>Basic</h3>
                  <div className="price_tage">
                    <h3>$8000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li>Normal Deposit</li>
                    <li>$900</li>
                    <li>Initial Withdrawal</li>
                    <li>$9900</li>
                    <li>Bonus</li>
                    <li>$150</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_30">
                <div className="pr_title pink_bg">
                  <h3>Standard</h3>
                  <div className="price_tage">
                    <h3>$12000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li>Normal Deposit</li>
                    <li>$1000</li>
                    <li>Initial Withdrawal</li>
                    <li>$12900</li>
                    <li>Bonus</li>
                    <li>$250</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_30">
                <div className="pr_title yellow_bg">
                  <h3>Untimate</h3>
                  <div className="price_tage">
                    <h3>$15000.00</h3>
                    <span>Token Plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none ">
                    <li>Normal Deposit</li>
                    <li>$1200</li>
                    <li>Initial Withdrawal</li>
                    <li>$12800</li>
                    <li>Bonus</li>
                    <li>$300</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* END SECTION PRICING TABLE- */}

      {/* START SECTION CALL TO ACTION- */}
      <section className="blue_light_bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9">
              <div className="action-content res_md_mb_20">
                <h3
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Let Us Help You to Find a Solution That Meets Your Needs
                </h3>
                <p
                  className="m-0 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  if you think it's just you're looking for. Please contact us!
                </p>
              </div>
            </div>
            <div className="col-lg-3 text-lg-right">
              <a
                href="/contacts"
                className="btn btn-default btn-radius animation"
                data-animation="fadeInUp"
                data-animation-delay="0.45"
              >
                Contact Us <i className="ion-ios-arrow-thin-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION CALL TO ACTION */}

      {/* START CLIENTS SECTION */}
      <section className="client_logo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Our Sponsers
                </h4>
              </div>
            </div>
          </div>
          <div className="row align-items-center text-center overflow_hide small_space">
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.3s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray1.png"
                  alt="client_logo_dark_gray1"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray2.png"
                  alt="client_logo_dark_gray2"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.5s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray3.png"
                  alt="client_logo_dark_gray3"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray4.png"
                  alt="client_logo_dark_gray4"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.7s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray5.png"
                  alt="client_logo_dark_gray5"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray6.png"
                  alt="client_logo_dark_gray6"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.9s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray7.png"
                  alt="client_logo_dark_gray7"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray8.png"
                  alt="client_logo_dark_gray8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CLIENTS SECTION */}

      <Footer />
    </>
  )
}

export default Pricing
