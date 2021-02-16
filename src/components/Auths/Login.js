import React, { useState } from 'react'

import { useFirebase } from 'react-redux-firebase'
import { useSelector, useDispatch } from 'react-redux'
import { logginAction } from './Action'

import { Snackbar, makeStyles } from '@material-ui/core'
import Footer from '../body/Footer'
import NavBar from '../navigation/NavBar'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
}))

export default function SignIn() {
  const [userData, setuserData] = useState({
    password: '',
    email: '',
    validity: false,
  })

  const classes = useStyles()

  const firebase = useFirebase()
  const dispatch = useDispatch()

  const authError = useSelector((state) => state.authReducer.loginError)
  const [openSnack, setopenSnack] = useState(false)

  const checkAuth = () => setopenSnack(true)

  const handleRoute = () => window.location.assign('/user')

  const handleSubmit = (e) => {
    e.preventDefault()

    logginAction(
      userData,
      firebase,
      dispatch,
      checkAuth,
      setuserData,
      handleRoute,
    )
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
        data-image-src="https://bestwebcreator.com/cryptocash/demo/assets/images/home_banner_bg.png"
      >
        <Snackbar
          onClose={() => setopenSnack(false)}
          open={openSnack}
          message={authError}
          autoHideDuration={9000}
          ContentProps={{ className: classes.content }}
          anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  Login
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
                    <span>Login</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION LOGIN */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <h4
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Welcome
                  </h4>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    Sign in to your account
                  </p>
                </div>
                <div className="field_form authorize_form">
                  <form onSubmit={handleSubmit}>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <input
                        type="email"
                        className="form-control"
                        required
                        placeholder="Email"
                        name="email"
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
                        required
                        placeholder="Password"
                        name="password"
                        value={userData.password}
                        onChange={(e) =>
                          setuserData({ ...userData, password: e.target.value })
                        }
                      />
                    </div>
                    <div
                      className="form-group col-md-12 text-center animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <button
                        className="btn btn-default btn-radius"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                    <div
                      className="form-group col-md-12 text-center animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.9s"
                    >
                      <a className="forgot_pass" href="/PassReset">
                        Forgot Password?
                      </a>
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
                  Don't have an account?
                  <a href="/signup"> Register</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
