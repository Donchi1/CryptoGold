import { makeStyles, Snackbar } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import Loading from './Loading'

import { paymentAction } from '../Auths/Action'
import UserNav from './UserNav'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
}))

function Payments() {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const classes = useStyles()
  const transSuccess = useSelector(
    (state) => state.projectReducer.paymentSuccess,
  )
  const profileInfo = useSelector((state) => state.firebase.profile)
  const paymentInfo = useSelector((state) => state.projectReducer)
  const [openLoader, setOpenLoader] = useState(false)
  const [openPay, setOpenPay] = useState({
    btc: false,
    etheruim: false,
    litecoin: false,
    bank: false,
  })

  const checkData = () => setopenError(true)
  const [openError, setopenError] = useState(false)

  const [newAmount, setNewAmount] = useState(1)
  const [paymentAmount, setPaymentAmount] = useState('')

  const handleLoad = () => setOpenLoader(false)

  useEffect(() => {
    axios
      .get(
        `https://blockchain.info/tobtc?currency=USD&value=${paymentInfo.paymentAmountData}`,
      )
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => {})
  }, [paymentInfo.paymentAmountData])

  const [userProve, setUserProve] = useState('')

  const handleAmountPay = (e) => {
    e.preventDefault()
    dispatch({
      type: 'PAYMENT_SET',
      amount: paymentAmount,
      qrcode: true,
    })

    setPaymentAmount('')
  }

  const handleOpen = () => {
    return (
      <div>
        {' '}
        <p>
          You want to invest ${paymentInfo.paymentAmountData} to our platform
        </p>
        <p>Bitcoin : {newAmount && newAmount}</p>
      </div>
    )
  }

  const handleProve = (e) => {
    e.preventDefault()
    if (userProve === '') {
      return
    }
    setOpenPay({
      ...openPay,
      etheruim: false,
      btc: false,
      bank: false,
      litecoin: false,
    })
    setOpenLoader(true)

    paymentAction(
      paymentInfo.paymentAmountData,
      profileInfo,
      userProve,
      firebase,
      dispatch,
      checkData,
      handleLoad,
    )
  }

  return (
    <div>
      {openLoader ? (
        <Loading />
      ) : (
        <>
          <UserNav />
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
                      Payment
                    </h1>
                    <ul
                      className="breadcrumb bg-transparent justify-content-center animation m-0 p-0"
                      data-animation="fadeInUp"
                      data-animation-delay="1.3s"
                    >
                      <li>
                        <a href="/user">Dashboard</a>{' '}
                      </li>
                      <li>
                        <span>User payments</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <Snackbar
                open={openError}
                onClose={() => setopenError(false)}
                message={transSuccess}
                autoHideDuration={9000}
                ContentProps={{ className: classes.content }}
                anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
              />
              <div className="row">
                <div className="col-lg-12">
                  <div className="authorize_box">
                    <div className="title_default_dark title_border text-center">
                      <h4
                        className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.2s"
                      >
                        Payment Methods
                      </h4>
                      <p
                        className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.4s"
                      >
                        Invest in our plateform today and never regret <br />
                        choose your investment method
                      </p>
                    </div>
                    <div className="field_form authorize_form">
                      <div>
                        <div
                          className="form-group col-md-12 text-center animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.6s"
                        >
                          <button
                            className="btn-default btn-radius w-100"
                            onClick={() =>
                              setOpenPay({
                                ...openPay,
                                btc: !openPay.btc,
                                bank: false,
                                etheruim: false,
                                litecoin: false,
                              })
                            }
                          >
                            Bitcoin
                          </button>
                        </div>
                        {openPay.btc && (
                          <div className="text-center">
                            {handleOpen()}
                            <form onSubmit={handleAmountPay}>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="Amount"
                                  required
                                  label="Input Amount"
                                  value={paymentAmount}
                                  onChange={(e) => {
                                    setPaymentAmount(e.target.value)
                                  }}
                                />
                              </div>
                              <div
                                className="form-group col-md-12 text-center animation "
                                data-animation="fadeInUp"
                                data-animation-delay="0.8s"
                              >
                                <button
                                  type="submit"
                                  className="btn-default btn-radius mb-2"
                                >
                                  submit
                                </button>
                              </div>
                            </form>
                            {paymentInfo.qrCode && (
                              <>
                                <h4>
                                  Make payment with the above btc wallet and
                                  upload Prove
                                </h4>
                                <div>
                                  <img
                                    src={require('../../assets/qrcode.jpg')}
                                    width="300px"
                                    alt="Code"
                                  />
                                  <p>1MEwuPBB4vRGuYveGQBBott9Pp3q3BVdyq</p>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                        <div
                          className="form-group col-md-12 text-center animation btn-radius"
                          data-animation="fadeInUp"
                          data-animation-delay="0.7s"
                        >
                          <button
                            className="btn-default  btn-radius w-100"
                            onClick={() =>
                              setOpenPay({
                                ...openPay,
                                etheruim: !openPay.etheruim,
                                bank: false,
                                litecoin: false,
                                btc: false,
                              })
                            }
                          >
                            Etherium
                          </button>
                          {openPay.etheruim && (
                            <div className="pt-2">
                              <h4 className="text-warning">
                                Unavailable at the moment
                              </h4>
                            </div>
                          )}
                        </div>

                        <div
                          className="form-group col-md-12 text-center animation btn-radius"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <button
                            className="btn-default btn-radius w-100"
                            onClick={() =>
                              setOpenPay({
                                ...openPay,
                                litecoin: !openPay.litecoin,
                                bank: false,
                                etheruim: false,
                                btc: false,
                              })
                            }
                          >
                            Litecoin
                          </button>

                          {openPay.litecoin && (
                            <div className="pt-2">
                              <h4 className="text-warning">
                                Unavailable at the moment
                              </h4>
                            </div>
                          )}
                        </div>
                        <div
                          className="form-group col-md-12 text-center animation  "
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <button
                            className="btn-default btn-radius w-100"
                            onClick={() =>
                              setOpenPay({
                                ...openPay,
                                bank: !openPay.bank,
                                litecoin: false,
                                etheruim: false,
                                btc: false,
                              })
                            }
                          >
                            Bank Deposit
                          </button>
                          {openPay.bank && (
                            <div className="pt-2">
                              <h4 className="text-warning">
                                Unavailable at the moment
                              </h4>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="divider small_divider"></div>
                      <form onSubmit={handleProve}>
                        <div
                          className="form-group col-md-12 animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.7s"
                        >
                          <h5>Upload prove</h5>
                          <input
                            type="file"
                            className="form-control"
                            required
                            label="Upload Prove"
                            onChange={(e) => {
                              const newFile = e.target.files[0]
                              setUserProve(newFile)
                            }}
                          />
                        </div>
                        <div
                          className="form-group col-md-12 text-center animation"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <button
                            type="submit"
                            className="btn-default btn-radius w-100"
                          >
                            Upload
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="divider small_divider"></div>
                  <div className="text-center"></div>
                </div>
              </div>
            </div>
          </section>
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
                      contact our team for more investment methods
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
          <div className="bottom_footer">
            <div className="container-fluid">
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
                      <Link to="/payments">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/payments">Terms & Conditions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Payments
