import { Dialog, Link } from '@material-ui/core'
import React, { useState } from 'react'

import ReactPlayer from 'react-player'
import NavBar from '../navigation/NavBar'
import Footer from './Footer'
import Testimonials from './Testimonials'

function Service() {
  const [openVideo, setOpenVideo] = useState(false)
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
                  Services
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
                    <span>Services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION SERVICES */}
      <section className="small_pb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Services and Solutions
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="rounded_border_icon blue_light_bg">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/service_icon1.png"
                    alt="service_icon1"
                  />
                </div>
                <h4>Secure Storage</h4>
                <p>
                  your wallet must be secured. Bitcoin makes it possible to
                  transfer value any where in a very easy way and it allows you
                  to be in control of your money.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <div className="rounded_border_icon blue_light_bg">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/service_icon2.png"
                    alt="service_icon2"
                  />
                </div>
                <h4>Mobile App</h4>
                <p>
                  The #1 most popular cryptocurrency wallet for those looking to
                  transform the financial system right from their pocket. Cash
                  instantly with anyone in the world.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="rounded_border_icon blue_light_bg">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/service_icon3.png"
                    alt="service_icon3"
                  />
                </div>
                <h4>Exchange Service</h4>
                <p>
                  Each user has unique needs, so there is no one size fits all
                  for exchanges. Our Bitcoin exchange reviews detail each
                  exchange's supported countries
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="rounded_border_icon blue_light_bg">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/service_icon4.png"
                    alt="service_icon4"
                  />
                </div>
                <h4>Investment projects</h4>
                <p>
                  Bitcoin investment opportunities exist outside of simply
                  speculating on the Bitcoin exchange rate. sell bitcoins and
                  profit from extreme changes
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-12">
              <div
                className="box_wrap bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="rounded_border_icon blue_light_bg">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/service_icon5.png"
                    alt="service_icon5"
                  />
                </div>
                <h4>Credit Card Use</h4>
                <p>
                  We are accept any credit or debit card from VISA or
                  MasterCard. This option may be especially useful for those
                  seek ing for the ways
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="rounded_border_icon blue_light_bg">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/service_icon6.png"
                    alt="service_icon6"
                  />
                </div>
                <h4>Planning</h4>
                <p>
                  A cutting edge issue in traditional estate planning is
                  Cryptocash. Cryptocash is a digital or virtual currency that
                  uses cryptography for security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION SERVICES */}

      {/* START SECTION HISTORY */}
      <section className="small_pt small_pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="title_default_dark title_border">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  The History of Money
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  When government has the power to print an unlimited amount of
                  money, it also has the power to fund endless wars.
                </p>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  Paul Krugman, American economist who doesn't like Bitcoin and
                  winner of the Nobel Memorial Prize in Economic Sciences,
                  illustrated the use of force in our current economy by flatly
                  stating:
                </p>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                >
                  "Non-Violent" because people are not forced to use Bitcoin as
                  a currency - it is their choice.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="video_box animation"
                data-animation="fadeInRight"
                data-animation-delay="0.2s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/video_img.jpg"
                  className="w-100"
                  alt="video_img"
                />
                <Dialog
                  open={openVideo}
                  onClose={() => setOpenVideo(false)}
                  maxWidth="lg"
                >
                  <ReactPlayer
                    controls
                    playing
                    url={'https://www.youtube.com/watch?v=ZE2HxTmxfrI'}
                    style={{ border: 'none', outline: 'none' }}
                  />
                </Dialog>
                <Link
                  to="/services"
                  className="play_btn video"
                  onClick={() => setOpenVideo(true)}
                >
                  <span className="play_icon"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION HISTORY */}

      {/* START SECTION TESTIMONIAL */}
      <Testimonials />
      {/* END SECTION TESTIMONIAL */}

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
                Contact Us <i className="fa fa-long-arrow-right"></i>
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

      {/* START FOOTER SECTION */}
      <Footer />
    </>
  )
}

export default Service
