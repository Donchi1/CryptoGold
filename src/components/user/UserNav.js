import React, { useState } from 'react'

import { LogoutAction } from '../Auths/Action'
import { useFirebase, useFirestoreConnect } from 'react-redux-firebase'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Modal, Button } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function UserNav() {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const [accessCodeInfo, setAccessCodeInfo] = useState({
    open: false,
    accessCode: '',
    isSubmitting: false,
  })

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

  const [accessCodeProve, setAccessCodeProve] = useState({
    open: false,
    price: '',
    isSubmitting: false,
  })

  const [accessCodeSchema, setAccessCodeSchema] = useState({
    accessCode: '',
    accessProve: '',
  })

  const withdrawalCheck = () => {
    if (pathname === '/user/withdrawals') {
      return
    }
    if (!userProfile.totalBalance || userProfile.totalBalance === '0000') {
      return MySwal.fire({
        title: <p>No Balance</p>,
        html: <span className="text-warning">No balance for withdrawal</span>,
        icon: 'error',
        showCloseButton: true,
        closeButtonText: 'Ok',
      })
    }

    if (userProfile.accessCode === '') {
      return MySwal.fire({
        title: <p>Access Code Required</p>,
        html: (
          <span className="text-warning">
            Access code required to further your withdrawal
          </span>
        ),
        icon: 'error',
        showCloseButton: true,

        confirmButtonText: 'Check Or Get One',
      }).then((value) => {
        if (value.isConfirmed) {
          return setAccessCodeInfo({ ...accessCodeInfo, open: true })
        }
      })
    }

    return setAccessCodeInfo({ ...accessCodeInfo, open: true })
  }

  const handleSubmit2 = (e) => {
    e.preventDefault()
    setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: true })
    if (accessCodeSchema.accessProve === '') {
      return setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: false })
    }
    return accessCodeProveAction(accessCodeSchema, setAccessCodeSchema)
  }

  const accessCodeProveAction = (values, setFormData) => {
    const user = firebase.auth().currentUser
    firebase
      .storage()
      .ref('accessCodeProves')
      .child(user.uid)
      .put(values.accessProve)
      .then(() => {
        firebase
          .storage()
          .ref(`accessCodeProves/${user.uid}`)
          .getDownloadURL()
          .then((url) => {
            firebase
              .firestore()
              .collection('users')
              .doc(user.uid)
              .update({
                accessCodeProve: url,
              })
              .then(() => {
                setFormData({ ...values, accessCodeProve: '' })
                return MySwal.fire({
                  title: <p>Access prove success</p>,
                  html: (
                    <span>
                      {' '}
                      Your access code prove has been sent successfully. Wait
                      for less than 24hours while we verify your prove..
                    </span>
                  ),
                  icon: 'success',
                  timer: 8000,
                  showCloseButton: true,
                  closeButtonText: 'Ok',
                })
              })
              .catch((err) => {
                setFormData({ ...values, accessCodeProve: '' })
                return MySwal.fire({
                  title: <p>Access prove error</p>,
                  html: <span>{err}</span>,
                  icon: 'error',
                  timer: 3000,
                  showCloseButton: true,
                  closeButtonText: 'Ok',
                })
              })
          })
      })
  }

  const handleSubmit1 = (e) => {
    e.preventDefault()
    setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: true })
    if (accessCodeInfo.accessCode === '') {
      MySwal.fire({
        title: <p>No Access</p>,
        html: <span className="text-warning">Access Code Required</span>,
        showCloseButton: true,
      })
      return setAccessCodeInfo({ ...accessCodeInfo, isSubmitting: false })
    }
    return accessCodeCheck()
  }
  const accessCodeCheck = () => {
    if (accessCodeInfo.accessCode !== userProfile.accessCode) {
      return accessAction('notVerified')
    } else {
      return accessAction('verified')
    }
  }

  const accessAction = (status) => {
    if (status === 'notVerified') {
      return new Promise((resolve, reject) => {
        setTimeout(reject('Expired or Invalid Access Code'), 5000)
      }).catch((e) => {
        setAccessCodeInfo({
          ...accessCodeInfo,
          isSubmitting: false,
        })
        return MySwal.fire({
          title: <p>Access Code Error</p>,
          html: <span className="text-warning">{e}</span>,
          icon: 'error',
          showCloseButton: true,
          closeButtonText: 'Ok',
          footer: <p>Access code expired at {new Date().getFullYear()}</p>,
        })
      })
    }
    if (status === 'verified') {
      return new Promise((resolve, reject) => {
        setTimeout(resolve('Access Code Success'), 4000)
      }).then((message) => {
        setAccessCodeInfo({
          ...accessCodeInfo,

          isSubmitting: false,
        })
        MySwal.fire({
          title: <p>Access Success</p>,
          html: <span className="text-success">{message}</span>,
          icon: 'success',
          timer: 6000,
          showCloseButton: true,
          closeButtonText: 'Ok',
        }).then(() => {
          return window.location.assign('/withdrawals')
        })
      })
    }
  }

  const handleLogoutRoute = () => window.location.assign('/')
  const handleLogout = () => {
    LogoutAction(firebase, dispatch, handleLogoutRoute)
  }
  return (
    <>
      <Modal
        show={accessCodeInfo.open}
        centered
        onHide={() => setAccessCodeInfo({ ...accessCodeInfo, open: false })}
        backdrop="static"
      >
        <Form onSubmit={handleSubmit1}>
          <Modal.Header closeButton>
            <Modal.Title className="userTextColor">Access Code</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Access code is a personal withdrawal authorization code, to secure
              your withdrawal against scammers.
            </p>
            <Form.Control
              type="text"
              name="accessCode"
              required
              placeholder="Enter Access Code"
              onChange={(e) =>
                setAccessCodeInfo({
                  ...accessCodeInfo,
                  accessCode: e.target.value,
                })
              }
              value={accessCodeInfo.accessCode}
            />

            <h6 className="text-dark text-center py-4">Or</h6>

            <Button
              block
              onClick={() =>
                setAccessCodeProve({ ...accessCodeProve, open: true })
              }
            >
              Get One
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button
              disabled={accessCodeInfo.isSubmitting}
              type="submit"
              className="btn"
            >
              Submit
            </Button>
            <Button
              onClick={() =>
                setAccessCodeInfo({ ...accessCodeInfo, open: false })
              }
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      <Modal
        show={accessCodeProve.open}
        onHide={() => setAccessCodeProve({ ...accessCodeProve, open: false })}
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title className="userTextColor">
            Access Code Purchase
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6 className="text-dark">
            Make payment with the above btc wallet and upload Prove
          </h6>
          <div>
            <img
              src={require('../../assets/qrcode.jpg')}
              width="300px"
              alt="Code"
            />
            <p className="userTextColor">37XFpQ2v6GVf1UuMnvCvEcWbD2oEmE3Wbf</p>
          </div>

          <Form onSubmit={handleSubmit2}>
            <Form.Group>
              <Form.Control
                type="file"
                name="accessProve"
                required
                onChange={(e) =>
                  setAccessCodeSchema({
                    ...accessCodeSchema,
                    accessProve: e.target.files[0],
                  })
                }
              />
            </Form.Group>
            <Button
              type="submit"
              className="history-info"
              block
              disabled={accessCodeProve.isSubmitting}
            >
              Upload
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <header className="header_wrap fixed-top ul-color">
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
                  onClick={withdrawalCheck}
                >
                  <Link className=" nav-link nav_item" to="#">
                    Withdrawal
                  </Link>
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
