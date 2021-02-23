import React, { useState } from 'react'

import { newsLetterAction } from '../Auths/Action'
import { useFirebase } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Footer() {
  const [input, setinput] = useState('')

  const dispatch = useDispatch()
  const firebase = useFirebase()
  const letterSuccess = useSelector(
    (state) => state.projectReducer.subcriptionSuccess,
  )
  const letterError = useSelector(
    (state) => state.projectReducer.subcriptionError,
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    newsLetterAction(input, firebase, dispatch, setinput)
  }

  return (
    <>
      {/* START FOOTER SECTION */}
      <footer>
        <div className="top_footer blue_dark_bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-12">
                <div
                  className="footer_logo mb-3 animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  <a href="/" className="page-scroll">
                    <span className="btn-default backtext">
                      <img
                        src="https://bestwebcreator.com/cryptocash/demo/assets/images/chart_icon.png"
                        alt="chart"
                      />
                    </span>
                    <span className="btn-default backtext"> ryptoGold</span>
                  </a>
                </div>
                <div className="footer_desc">
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    CryptoGold stands firmly in support of financial freedom and
                    the liberty that Bitcoin provides globally for anyone to
                    voluntarily participate in a permissionless and
                    decentralized network.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-5 col-sm-8 res_md_mt_30 res_sm_mt_20">
                <div className="newsletter_form newslattter_small text-md-center">
                  <h4
                    className="footer_title animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    SUBSCRIBE OUR NEWSLETTER
                  </h4>
                  <form
                    className="subscribe_form animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                    onSubmit={handleSubmit}
                  >
                    <input
                      className="input-rounded"
                      type="email"
                      required
                      value={input}
                      name="email"
                      placeholder="Enter Email Address"
                      onChange={(e) => setinput(e.target.value)}
                    />
                    <button
                      type="submit"
                      title="Subscribe"
                      className="btn-info"
                      name="submit"
                      value="Submit"
                    >
                      {' '}
                      Subscribe{' '}
                    </button>

                    {letterSuccess && (
                      <Typography color="primary" component="h5">
                        letterSuccess
                      </Typography>
                    )}
                    {letterError && (
                      <Typography color="primary" component="h5">
                        letterSuccess
                      </Typography>
                    )}
                  </form>
                </div>
                <div className="footer_social_s2">
                  <h4
                    className="footer_title animation text-md-center"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Follow Us
                  </h4>
                  <ul className="list_none social_icon d-md-flex justify-content-center text-center">
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <Link to="#">
                        <i className=" fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <Link to="#">
                        <i className=" fa fa-twitter"></i>
                      </Link>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <Link to="#">
                        <i className=" fa fa-google-plus"></i>
                      </Link>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.7s"
                    >
                      <Link to="#">
                        <i className=" fa fa-pinterest"></i>
                      </Link>
                    </li>
                    <li
                      className="animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <Link to="#">
                        <i className=" fa fa-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-4 res_md_mt_30 res_sm_mt_20">
                <h4
                  className="footer_title animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Quick Links
                </h4>
                <ul className="footer_link list_arrow">
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <a href="/teams">Teams</a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.3s"
                  >
                    <a href="/service">Services</a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    <a href="/blogs">Blogs</a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    <a href="/faq">FAQ</a>
                  </li>
                  <li
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.6s"
                  >
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom_footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="copyright">
                  Copyright &copy; cryptoGold {new Date().getFullYear()} All
                  Rights Reserved.
                </p>
              </div>

              <div className="col-md-6">
                <ul className="list_none footer_menu">
                  <li>
                    <Link to="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="#">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* END FOOTER SECTION */}
      <a href="#" className="scrollup btn-default ">
        <i className="fa fa-long-arrow-up"></i>
      </a>
    </>
  )
}

export default Footer
