import { Dialog, makeStyles, Snackbar } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { Link } from 'react-router-dom'
import { withdrawalAction } from '../Auths/Action'
import Loading from './Loading'
import UserNav from './UserNav'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: 'red',
  },
}))

function Withdrawals() {
  const firebase = useFirebase()
  const dispatch = useDispatch()
  const classes = useStyles()
  const transError = useSelector(
    (state) => state.projectReducer.withdrawalError,
  )
  const profileInfo = useSelector((state) => state.firebase.profile)
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
  const [withdrawalAmount, setWithdrawalAmount] = useState({
    amount: 1,
    wallet: '',
    withdrawalMethod: '',
    name: '',
    accountNumber: '',
    phone: '',
  })

  const handleLoad = () => setOpenLoader(false)

  useEffect(() => {
    axios
      .get(
        `https://blockchain.info/tobtc?currency=USD&value=${withdrawalAmount.amount}`,
      )
      .then((res) => {
        setNewAmount(res.data)
      })
      .catch((err) => {})
  }, [withdrawalAmount.amount])

  const handleWithdrawal = (e) => {
    e.preventDefault()

    setOpenLoader(true)
    setOpenPay({
      ...openPay,
      btc: false,
      etheruim: false,
      litecoin: false,
      bank: false,
    })

    withdrawalAction(
      profileInfo,
      withdrawalAmount,
      firebase,
      dispatch,
      checkData,
      handleLoad,
      setWithdrawalAmount,
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
                      Withdrawals
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
                        <span>User withdrawals</span>
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
                message={transError}
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
                        Withdrawal Methods
                      </h4>
                      <p
                        className="animation"
                        data-animation="fadeInUp"
                        data-animation-delay="0.4s"
                      >
                        Make your instant withdrawal today with ease <br />
                        choose your withdrawal method
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
                            onClick={() => {
                              setOpenPay({
                                ...openPay,
                                btc: !openPay.btc,
                                bank: false,
                                etheruim: false,
                                litecoin: false,
                              })
                              setWithdrawalAmount({
                                ...withdrawalAmount,
                                withdrawalMethod: 'Bitcoin',
                              })
                            }}
                          >
                            Bitcoin
                          </button>
                        </div>

                        <Dialog
                          open={openPay.btc}
                          onClose={() => setOpenPay({ ...openPay, btc: false })}
                        >
                          <div className="field_form authorize_form">
                            <div className="text-center">
                              <p>
                                You want to withdraw ${withdrawalAmount.amount}
                              </p>
                              <p>Bitcoin : {newAmount && newAmount}</p>
                              <p>
                                with {withdrawalAmount.withdrawalMethod}{' '}
                                withdrawal method.
                              </p>
                              <h5 className="text-center">
                                {withdrawalAmount.withdrawalMethod} withdrawal.
                              </h5>
                            </div>
                            <h5 className="text-center">
                              Input your withdrawal information
                            </h5>
                            <form onSubmit={handleWithdrawal}>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.6s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Name"
                                  name="name"
                                  value={withdrawalAmount.name}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="number"
                                  className="form-control"
                                  required
                                  placeholder="Amount"
                                  name="amount"
                                  value={withdrawalAmount.amount}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      amount: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Wallet"
                                  name="wallet"
                                  value={withdrawalAmount.wallet}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      wallet: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="tel"
                                  className="form-control"
                                  required
                                  placeholder="Number"
                                  name="number"
                                  value={withdrawalAmount.phone}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      phone: e.target.value,
                                    })
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
                              <div className="divider small_divider"></div>
                            </form>
                          </div>
                        </Dialog>

                        <div
                          className="form-group col-md-12 text-center animation btn-radius"
                          data-animation="fadeInUp"
                          data-animation-delay="0.7s"
                        >
                          <button
                            className="btn-default  btn-radius w-100"
                            onClick={() => {
                              setOpenPay({
                                ...openPay,
                                etheruim: !openPay.etheruim,
                                bank: false,
                                litecoin: false,
                                btc: false,
                              })
                              setWithdrawalAmount({
                                ...withdrawalAmount,
                                withdrawalMethod: 'Etheruim',
                              })
                            }}
                          >
                            Etherium
                          </button>
                        </div>
                        <Dialog
                          open={openPay.etheruim}
                          onClose={() =>
                            setOpenPay({ ...openPay, etheruim: false })
                          }
                        >
                          <div className="field_form authorize_form">
                            <div className="text-center">
                              <p>
                                You want to withdraw ${withdrawalAmount.amount}
                              </p>
                              <p>Bitcoin : {newAmount && newAmount}</p>
                              <p>
                                with {withdrawalAmount.withdrawalMethod}{' '}
                                withdrawal method.
                              </p>
                            </div>
                            <h5 className="text-center">
                              {withdrawalAmount.withdrawalMethod} withdrawal.
                            </h5>
                            <h5>Input your withdrawal information</h5>
                            <form onSubmit={handleWithdrawal}>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.6s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Name"
                                  name="name"
                                  value={withdrawalAmount.name}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="number"
                                  className="form-control"
                                  required
                                  placeholder="Amount"
                                  name="amount"
                                  value={withdrawalAmount.amount}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      amount: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Wallet"
                                  name="wallet"
                                  value={withdrawalAmount.wallet}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      wallet: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="tel"
                                  className="form-control"
                                  required
                                  placeholder="Number"
                                  name="number"
                                  value={withdrawalAmount.phone}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      phone: e.target.value,
                                    })
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
                              <div className="divider small_divider"></div>
                            </form>
                          </div>
                        </Dialog>

                        <div
                          className="form-group col-md-12 text-center animation btn-radius"
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <button
                            className="btn-default btn-radius w-100"
                            onClick={() => {
                              setOpenPay({
                                ...openPay,
                                litecoin: !openPay.litecoin,
                                bank: false,
                                etheruim: false,
                                btc: false,
                              })
                              setWithdrawalAmount({
                                ...withdrawalAmount,
                                withdrawalMethod: 'Litecoin',
                              })
                            }}
                          >
                            Litecoin
                          </button>
                        </div>
                        <Dialog
                          open={openPay.litecoin}
                          onClose={() =>
                            setOpenPay({ ...openPay, litecoin: false })
                          }
                        >
                          <div className="field_form authorize_form">
                            <div className="text-center">
                              <p>
                                You want to withdraw ${withdrawalAmount.amount}
                              </p>
                              <p>Bitcoin : {newAmount && newAmount}</p>
                              <p>
                                with {withdrawalAmount.withdrawalMethod}{' '}
                                withdrawal method.
                              </p>
                            </div>
                            <h5 className="text-center">
                              {withdrawalAmount.withdrawalMethod} withdrawal.
                            </h5>
                            <h5>Input your withdrawal information</h5>
                            <form onSubmit={handleWithdrawal}>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.6s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Name"
                                  name="name"
                                  value={withdrawalAmount.name}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="number"
                                  className="form-control"
                                  required
                                  placeholder="Amount"
                                  name="amount"
                                  value={withdrawalAmount.amount}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      amount: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Wallet"
                                  name="wallet"
                                  value={withdrawalAmount.wallet}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      wallet: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="tel"
                                  className="form-control"
                                  required
                                  placeholder="Number"
                                  name="number"
                                  value={withdrawalAmount.phone}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      phone: e.target.value,
                                    })
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
                              <div className="divider small_divider"></div>
                            </form>
                          </div>
                        </Dialog>

                        <div
                          className="form-group col-md-12 text-center animation  "
                          data-animation="fadeInUp"
                          data-animation-delay="0.8s"
                        >
                          <button
                            className="btn-default btn-radius w-100"
                            onClick={() => {
                              setOpenPay({
                                ...openPay,
                                bank: !openPay.bank,
                                litecoin: false,
                                etheruim: false,
                                btc: false,
                              })
                              setWithdrawalAmount({
                                ...withdrawalAmount,
                                withdrawalMethod: 'Bank',
                              })
                            }}
                          >
                            Bank Deposit
                          </button>
                        </div>
                        <Dialog
                          open={openPay.bank}
                          onClose={() =>
                            setOpenPay({ ...openPay, bank: false })
                          }
                        >
                          <div className="field_form authorize_form">
                            <div className="text-center">
                              <p>
                                You want to withdraw ${withdrawalAmount.amount}
                              </p>
                              <p>Bitcoin : {newAmount && newAmount}</p>
                              <p>
                                with {withdrawalAmount.withdrawalMethod}{' '}
                                withdrawal method.
                              </p>
                            </div>
                            <h5 className="text-center">
                              {withdrawalAmount.withdrawalMethod} withdrawal.
                            </h5>
                            <h5>Input your withdrawal information</h5>
                            <form onSubmit={handleWithdrawal}>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.6s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Name"
                                  name="name"
                                  value={withdrawalAmount.name}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      name: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="number"
                                  className="form-control"
                                  required
                                  placeholder="Amount"
                                  name="amount"
                                  value={withdrawalAmount.amount}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      amount: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="text"
                                  className="form-control"
                                  required
                                  placeholder="Account number"
                                  name="wallet"
                                  value={withdrawalAmount.accountNumber}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      accountNumber: e.target.value,
                                    })
                                  }
                                />
                              </div>
                              <div
                                className="form-group col-md-12 animation"
                                data-animation="fadeInUp"
                                data-animation-delay="0.7s"
                              >
                                <input
                                  type="tel"
                                  className="form-control"
                                  required
                                  placeholder="Number"
                                  name="number"
                                  value={withdrawalAmount.phone}
                                  onChange={(e) =>
                                    setWithdrawalAmount({
                                      ...withdrawalAmount,
                                      phone: e.target.value,
                                    })
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
                              <div className="divider small_divider"></div>
                            </form>
                          </div>
                        </Dialog>
                      </div>
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
                      contact our team for more withdrawal methods
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
                      <Link to="/withdrawals">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/withdrawals">Terms & Conditions</Link>
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

export default Withdrawals
