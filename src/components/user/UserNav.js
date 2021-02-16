import React from 'react'

import { LogoutAction } from '../Auths/Action'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'

function UserNav() {
  const firebase = useFirebase()
  const dispatch = useDispatch()

  const userProfile = useSelector((state) => state.firebase.profile)

  useFirestoreConnect([
    {
      collection: 'users',
    },
    {
      collection: 'payments',

      doc: userProfile.uid,
    },
    {
      collection: 'withdrawals',

      doc: userProfile.uid,
    },
  ])

  const handleLogoutRoute = () => window.location.assign('/')
  const handleLogout = () => {
    LogoutAction(firebase, dispatch, handleLogoutRoute)
  }
  return (
    <>
      <header className="header_wrap fixed-top">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg">
            <a
              className="navbar-brand animation"
              href="/"
              data-animation="fadeInDown"
              data-animation-delay="1s"
            >
              <span>
                <span className="btn-default backtext">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/chart_icon.png"
                    alt="chart"
                  />
                </span>
                <span className="btn-default backtext"> ryptoGold</span>
              </span>
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
              <span className="fa fa-bars"></span>
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
                  <a className="nav-link nav_item" href="/user">
                    Dashboard
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.2s"
                >
                  <a className="nav-link nav_item" href="/payments">
                    payment
                  </a>
                </li>
                <li
                  className="dropdown animation"
                  data-animation="fadeInDown"
                  data-animation-delay="1.3s"
                >
                  <a className=" nav-link nav_item" href="/withdrawals">
                    Withdrawal
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav nav_btn align-items-center">
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="2s"
                >
                  <a
                    className="btn btn-default btn-radius nav_item"
                    href="/profile"
                  >
                    {userProfile.initial}
                  </a>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInDown"
                  data-animation-delay="2s"
                >
                  <button
                    className="btn btn-default btn-radius nav_item"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default UserNav
