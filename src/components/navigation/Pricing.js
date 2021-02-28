import React from 'react'
import Footer from '../body/Footer'
import NavBar from './NavBar'

function Pricing() {
  return (
    <>
      {/* START HEADER */}
      <NavBar />
      {/* END HEADER */}
      {/* START SECTION BANNER */}/{/* END SECTION CALL TO ACTION */}
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
