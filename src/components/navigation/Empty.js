import React from 'react'
import Footer from '../body/Footer'
import NavBar from './NavBar'

function Empty() {
 
  return (
    <>
      {/* START HEADER */}
  <NavBar />
      {/* END HEADER */}

      {/* START SECTION BANNER */}
      <section
        className="section_breadcrumb blue_light_bg"
        data-z-index="1"
        data-parallax="scroll"
        data-image-src="https://bestwebcreator.com/cryptocash/demo/assets/images/home_banner_bg.png"
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
                  404 Error Page
                </h1>
                <ul
                  className="breadcrumb bg-transparent justify-content-center animation m-0 p-0"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  <li>
                    <a href="/">Home</a>{' '}
                  </li>
                  <li>
                    <span>404 Error Page</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION 404 CONTENT */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 text-center">
              <img
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
                src="https://bestwebcreator.com/cryptocash/demo/assets/images/404_img.png"
                alt="404_img"
              />
              <div className="divider small_divider"></div>
              <div className="not_found">
                <h3
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  PAGE NOT FOUND!
                </h3>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  The page you are looking for was moved, removed, renamed or
                  might never existed.
                </p>
                <a
                  href="/"
                  className="btn btn-default btn-radius animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                >
                  Homepage <i className="ion-ios-arrow-thin-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION 404 CONTENT */}

      <Footer />
    </>
  )
}

export default Empty
