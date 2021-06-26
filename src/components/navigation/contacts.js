import React, { useState } from 'react'
import Footer from '../body/Footer'

import { contactAction } from '../Auths/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { makeStyles, Snackbar } from '@material-ui/core'
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.info.main,
  },
}))

function Contacts() {
  const classes = useStyles()
  const [userData, setuserData] = useState({
    name: '',
    email: '',
    message: '',
    subject: '',
  })
  const contactSuccess = useSelector(
    (state) => state.projectReducer.contactMessageSuccess,
  )
  const contactError = useSelector(
    (state) => state.projectReducer.contactMessageError,
  )
  const [openSnack, setopenSnack] = useState(false)

  const dispatch = useDispatch()
  const firebase = useFirebase()

  const handleSubmit = (e) => {
    e.preventDefault()

    contactAction(userData, firebase, dispatch, setuserData, setopenSnack)
  }

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
                  Contact Us
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
                    <span>Contact</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION CONTACT */}
      <section className="contact_section small_pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Contact Information
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 pr-0 res_md_pr_15">
              <div className="lg_pt_20 res_sm_pt_0">
                <ul className="list_none contact_info info_contact text-center">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="contact_detail">
                      {' '}
                      <span>Address</span>
                      <p>
                        22 International Division Abbey Road London United
                        Kingdom
                      </p>
                    </div>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    <i className="fa fa-phone"></i>
                    <div className="contact_detail">
                      {' '}
                      <span>Phone</span>
                      <p>+447459850386</p>
                    </div>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    <i className="fa fa-whatsapp"></i>
                    <div className="contact_detail">
                      {' '}
                      <span>WhatsApp</span>
                      <p>+447724648772</p>
                    </div>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.8s"
                  >
                    <i className="fa fa-envelope"></i>
                    <div className="contact_detail">
                      {' '}
                      <span>Email-id</span>
                      <p>support@cryptosgold.info</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION CONTACT */}

      {/* START SECTION MAP */}
      <section className="pt-0 small_pb">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 p-0">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47339848557!2d-0.24168083557398898!3d51.528558242090796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2sin!4v1528521418570"
                  width="100%"
                  height="500"
                  frameborder="0"
                  allowfullscreen
                  title="Our Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION MAP */}

      {/* START SECTION CONTACT FORM */}
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
                  Drop Us A Line
                </h4>
              </div>
            </div>
          </div>
          <Snackbar
            onClose={() => setopenSnack(false)}
            open={openSnack}
            message={contactSuccess ? contactSuccess : contactError}
            ContentProps={{ className: classes.content }}
            autoHideDuration={5000}
            anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
          ></Snackbar>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12 pr-0 res_md_pr_15">
              <div className="lg_pt_20 res_sm_pt_0">
                <form
                  method="post"
                  name="enq"
                  className="field_form_s2"
                  onSubmit={handleSubmit}
                >
                  <div className="row">
                    <div
                      className="form-group col-md-6 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <input
                        type="text"
                        required="required"
                        placeholder="Enter Name *"
                        id="first-name"
                        className="form-control"
                        name="name"
                        value={userData.name}
                        onChange={(e) =>
                          setuserData({ ...userData, name: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-6 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <input
                        type="email"
                        required="required"
                        placeholder="Enter Email *"
                        id="email"
                        className="form-control"
                        name="email"
                        value={userData.email}
                        onChange={(e) =>
                          setuserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-6 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <input
                        type="text"
                        required="required"
                        placeholder="Enter Subject"
                        id="subject"
                        className="form-control"
                        name="subject"
                        value={userData.subject}
                        onChange={(e) =>
                          setuserData({ ...userData, subject: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-6 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <input
                        type="text"
                        placeholder="Enter Phone No."
                        id="phone"
                        className="form-control"
                        name="phone"
                        value={userData.phone}
                        onChange={(e) =>
                          setuserData({ ...userData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.2s"
                    >
                      <textarea
                        required="required"
                        placeholder="Message *"
                        id="description"
                        className="form-control"
                        name="message"
                        rows="3"
                        value={userData.message}
                        onChange={(e) =>
                          setuserData({ ...userData, message: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <div
                      className="col-md-12 text-center animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1.4s"
                    >
                      <button
                        type="submit"
                        title="Submit Your Message!"
                        className="btn btn-default btn-radius"
                        id="submitButton"
                        name="submit"
                        value="Submit"
                      >
                        Submit <i className="fa fa-long-arrow-right"></i>
                      </button>
                    </div>
                    <div className="col-md-12">
                      <div
                        id="alert-msg"
                        className="alert-msg text-center"
                      ></div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION CONTACT FORM */}

      <Footer />
    </>
  )
}

export default Contacts
