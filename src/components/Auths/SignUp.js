import React, { useState } from 'react'

//import { RegionDropdown, CountryDropdown } from 'react-country-region-selector'

import { useFirebase } from 'react-redux-firebase'

import { registerAction } from './Action'
import { useDispatch, useSelector } from 'react-redux'
import { Snackbar, makeStyles } from '@material-ui/core'

import Footer from '../body/Footer'
import NavBar from '../navigation/NavBar'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
}))

export default function SignUp() {
  const classes = useStyles()
  const [userData, setuserData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',
    phone: '',
    country: '',
  })
  const [openSnack, setopenSnack] = useState(false)
  const firebase = useFirebase()

  const dispatch = useDispatch()
  const authState = useSelector((state) => state.firebase.auth)
  const authError = useSelector((state) => state.authReducer.signupError)
  const [numberError, setNumberError] = useState(false)
  const [numberErrorMessage, setNumberErrorMessage] = useState('')

  const checkAuth = () => setopenSnack(true)

  const validity = () => {
    setNumberErrorMessage('Invalid number')
    setNumberError(true)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userData.phone.match(/12345/) || userData.phone.match(/1234/)) {
      return validity()
    }

    registerAction(userData, firebase, dispatch, checkAuth, setuserData)
  }

  return (
    <>
      {/*<!-- START HEADER -->*/}

      <NavBar />
      <Snackbar
        onClose={() => setopenSnack(false)}
        open={openSnack}
        message={authError}
        autoHideDuration={9000}
        ContentProps={{ className: classes.content }}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      ></Snackbar>
      <Snackbar
        onClose={() => setNumberError(false)}
        open={numberError}
        message={numberErrorMessage}
        autoHideDuration={9000}
        ContentProps={{ className: classes.content }}
        anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
      ></Snackbar>

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
                  Register
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
                    <span>Sign Up</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION SIGN UP */}
      <section>
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <h4
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Register in
                  </h4>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    Create your Free account
                  </p>
                </div>
                <div className="field_form authorize_form">
                  <form onSubmit={handleSubmit}>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="firstname"
                        name="fname"
                        value={userData.firstname}
                        onChange={(e) =>
                          setuserData({
                            ...userData,
                            firstname: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="lastname"
                        name="lname"
                        value={userData.lastname}
                        onChange={(e) =>
                          setuserData({ ...userData, lastname: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <input
                        type="email"
                        className="form-control"
                        required=""
                        placeholder="Email"
                        name="Email"
                        value={userData.email}
                        onChange={(e) =>
                          setuserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.7s"
                    >
                      <input
                        type="password"
                        className="form-control"
                        required=""
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={(e) =>
                          setuserData({ ...userData, password: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <input
                        type="tel"
                        className="form-control"
                        required
                        placeholder="Number"
                        name="number"
                        value={userData.phone}
                        onChange={(e) =>
                          setuserData({ ...userData, phone: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <input
                        type="text"
                        className="form-control"
                        required
                        placeholder="country"
                        name="country"
                        value={userData.country}
                        onChange={(e) =>
                          setuserData({ ...userData, country: e.target.value })
                        }
                      />
                    </div>

                    <div
                      className="form-group col-md-12 text-center animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <button
                        className="btn btn-default btn-radius"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="divider small_divider"></div>
              <div className="text-center">
                <span
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1s"
                >
                  Already have an account? <a href="/login"> Login</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION SIGN UP */}

      <Footer />
    </>
  )
}
