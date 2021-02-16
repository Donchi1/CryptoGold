import React from 'react'
import { Carousel } from 'react-bootstrap'

function Testimonials() {
  return (
    <section className="small_pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12 offset-lg-2">
            <div className="title_default_dark title_border text-center">
              <h4
                className="animation"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                Testimonial
              </h4>
            </div>
          </div>
        </div>
        <div className="row small_space">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <Carousel controls={false}>
              <Carousel.Item>
                <div className="testimonial_wrap rounded_img">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/testmonial_client1.jpg"
                    className="animation"
                    data-animation="zoomIn"
                    data-animation-delay="0.2s"
                    alt="testmonial_client1"
                  />
                  <h5
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.3s"
                  >
                    Kerri Reece
                  </h5>
                  <span
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    CEO Company
                  </span>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    You should not expect anything more. This is a fantastic
                    program, punctual paying, thanks a lot. I recommend this
                    hyip!
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial_wrap rounded_img item">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/testmonial_client2.jpg"
                    className="animation"
                    data-animation="zoomIn"
                    data-animation-delay="0.2s"
                    alt="testmonial_client2"
                  />
                  <h5
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.3s"
                  >
                    Alvaro Martin
                  </h5>
                  <span
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    CEO Company
                  </span>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    This is a realistic program for anyone looking for site to
                    invest. Paid to me regularly, keep up good work.This is a
                    realistic program for anyone looking{' '}
                  </p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="testimonial_wrap rounded_img ">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/testmonial_client3.jpg"
                    className="animation"
                    data-animation="zoomIn"
                    data-animation-delay="0.2s"
                    alt="testmonial_client3"
                  />
                  <h5
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.3s"
                  >
                    Jessica Bell
                  </h5>
                  <span
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    Head Of Sale
                  </span>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    This is a realistic program for anyone looking for site to
                    invest. Paid to me regularly, keep up good work.This is a
                    realistic program for anyone looking{' '}
                  </p>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
