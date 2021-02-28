import React, { useState } from 'react'
import { forgetAction } from '../Auths/Action'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { makeStyles, Snackbar } from '@material-ui/core'
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
  success: {
    backgroundColor: 'green',
  },
}))

function ForgetPassword() {
  const dispatch = useDispatch()
  const firebase = useFirebase()
  const [openErrorSnacks, setOpenErrorSnacks] = useState(false)
  const [openSuccessSnacks, setOpenSuccessSnacks] = useState(false)

  const resetError = useSelector((state) => state.authReducer.passResetError)
  const resetSuccess = useSelector((state) => state.authReducer.passResetSuccss)
  const [resetEmail, setResetEmail] = useState('')

  const classes = useStyles()

  const handleReset = (e) => {
    e.preventDefault()
    forgetAction(
      dispatch,
      firebase,
      resetEmail,
      setResetEmail,
      setOpenSuccessSnacks,
      setOpenErrorSnacks,
    )
  }

  return (
    <>
      <NavBar />
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
                  Forgotten Password
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
                    <span>Password Reset</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      <Snackbar
        onClose={() => setOpenErrorSnacks(false)}
        open={openErrorSnacks}
        message={resetError}
        autoHideDuration={9000}
        ContentProps={{ className: classes.content }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      />
      <Snackbar
        onClose={() => setOpenSuccessSnacks(false)}
        open={openSuccessSnacks}
        message={resetSuccess}
        autoHideDuration={9000}
        ContentProps={{ className: classes.success }}
        anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    Enter password reset email
                  </p>
                </div>
                <div className="field_form authorize_form">
                  <form onSubmit={handleReset}>
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
                        value={resetEmail}
                        onChange={(e) => setResetEmail(e.target.value)}
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
                      <a className="forgot_pass" href="/register">
                        don't an account register?
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgetPassword
