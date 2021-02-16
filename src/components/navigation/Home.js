import React, { useState } from 'react'
import Footer from '../body/Footer'
import ReactPlayer from 'react-player'

import { contactAction } from '../Auths/Action'
import { useDispatch, useSelector } from 'react-redux'
import { isEmpty, isLoaded, useFirebase } from 'react-redux-firebase'
import { Dialog, makeStyles, Snackbar } from '@material-ui/core'
import { Link } from 'react-router-dom'
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
  content: {
    backgroundColor: theme.palette.info.main,
  },
}))

function Home() {
  const authState = useSelector((state) => state.firebase.auth)
  const [teamOpen, setTeamOpen] = useState('')
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
  const [openVideo, setOpenVideo] = useState(false)
  const [openSnack, setopenSnack] = useState(false)

  const dispatch = useDispatch()
  const firebase = useFirebase()

  const handleSubmit = (e) => {
    e.preventDefault()

    contactAction(userData, firebase, dispatch, setuserData, setopenSnack)
  }
  return (
    <div className="v_royal_blue" data-spy="scroll" data-offset="110">
      {/* START HEADER */}
      <NavBar />
      {/* END HEADER */}

      {/* START SECTION BANNER */}
      <section
        id="home_section"
        className="section_banner gradient_box2 pb-0"
        data-image-src="https://bestwebcreator.com/cryptocash/demo/assets/images/banner_bg3.png"
        data-parallax="scroll"
        data-z-index="1"
      >
        <canvas
          id="banner_canvas"
          className="transparent_effect fixed"
        ></canvas>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 order-lg-first">
              <div className="banner_text text_md_center">
                <h1
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  CryptoGold: golden and reliable platform for your crypto
                  investment
                </h1>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  The earning starts immediately after confirmed payment. First
                  payouts within 24 hours.{' '}
                </p>
                <div
                  className="btn_group animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
                >
                  {isLoaded(authState) && !isEmpty(authState) ? (
                    <a href="/user" className="btn btn-default btn-radius">
                      Dashboard <i className="fa fa-long-arrow-right"></i>
                    </a>
                  ) : (
                    <a href="/login" className="btn btn-default btn-radius">
                      Get started <i className="fa fa-long-arrow-right"></i>
                    </a>
                  )}
                </div>
                <div id="whitepaper" className="team_pop mfp-hide">
                  <div className="row m-0">
                    <div className="col-md-7">
                      <div className="pt-3 pb-3">
                        <div className="title_blue_dark title_border">
                          <h4>Download Whitepaper</h4>
                          <p>
                            A purely peer-to-peer version of electronic cash
                            would allow online payments to be sent directly from
                            one party to another without going through a
                            financial institution.Digital signatures provide
                            part of the solution, but the main benefits are lost
                            if a trusted third party is still required to
                            prevent double-spending.
                          </p>
                          <p>
                            The network timestamps transactions by hashing them
                            into an ongoing chain of hash-based proof-of-work,
                            forming a record that cannot be changed without
                            redoing the proof-of-work.
                          </p>
                          <a
                            href="#whitepaper"
                            className="btn btn-default btn-radius"
                          >
                            Download Now{' '}
                            <i className="fa fa-long-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <img
                        className="pt-3 pb-3"
                        src="https://bestwebcreator.com/cryptocash/demo/assets/images/whitepaper3.png"
                        alt="whitepaper3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 order-first">
              <div
                className="banner_image_right res_md_mb_50 res_xs_mb_20 animation animated"
                data-animation-delay="1.5s"
                data-animation="fadeInRight"
              >
                <img
                  alt="banner_vector6"
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/banner_img6.png"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="divider small_divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="divider small_divider"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="banner_inner">
                <div
                  className="blue_dark_bg banner_token text-center animation animated"
                  data-animation="fadeIn"
                  data-animation-delay="1.1s"
                >
                  <div className="tk_counter_inner p-0 mw-100 d-lg-flex align-items-center">
                    <div className="token_col">
                      <div
                        className="tk_countdown_time border-0 p-0 counter_medium animation animated fadeInUp"
                        data-animation="fadeInUp"
                        data-animation-delay="1.2s"
                        data-time="2020/05/08 00:00:00"
                        style={{ animationDelay: '1.2s', opacity: '1' }}
                      >
                        <span className="counter_box">
                          <span className="tk_counter days">
                            {new Date().getDay()}
                          </span>
                          <span className="tk_text">Days</span>
                        </span>
                        <span className="counter_box">
                          <span className="tk_counter hours">
                            {new Date().getHours()}
                          </span>
                          <span className="tk_text">Hours</span>
                        </span>
                        <span className="counter_box">
                          <span className="tk_counter minutes">
                            {new Date().getMinutes()}
                          </span>
                          <span className="tk_text">Minutes</span>
                        </span>
                        <span className="counter_box">
                          <span className="tk_counter seconds">
                            {new Date().getSeconds()}
                          </span>
                          <span className="tk_text">Seconds</span>
                        </span>
                      </div>
                    </div>
                    <div className="progress_col">
                      <div
                        className="progress animation animated"
                        data-animation="fadeInUp"
                        data-animation-delay="1.3s"
                      >
                        <div
                          className="progress-bar progress-bar-striped gradient"
                          role="progressbar"
                          aria-valuenow="46"
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: '46%' }}
                        >
                          {' '}
                          46%{' '}
                        </div>
                        <span
                          className="progress_label bg-white"
                          style={{ left: '30%' }}
                        >
                          {' '}
                          <strong> 46,000 BCC </strong>
                        </span>
                        <span
                          className="progress_label bg-white"
                          style={{ left: '75%' }}
                        >
                          {' '}
                          <strong> 90,000 BCC </strong>
                        </span>
                        <span className="progress_min_val">Sale Raised</span>
                        <span className="progress_max_val">Soft-caps</span>
                      </div>
                    </div>
                    <div className="btn_col">
                      <a
                        href="/signup"
                        className="btn btn-default btn-radius animation animated"
                        data-animation="fadeInUp"
                        data-animation-delay="1.40s"
                      >
                        Register <i className="fa fa-long-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION ABOUT US */}
      <section id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center res_md_mb_30 res_sm_mb_20">
                <img
                  className="animation bounceimg animated"
                  data-animation="zoomIn"
                  data-animation-delay="0.2s"
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/about_img6.png"
                  alt="aboutimg6"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 text_md_center">
              <div className="title_default_light">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  About The CryptoGold
                </h4>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  CryptoGold is one of the most transformative technologies
                  since the invention of the Internet. CryptoGold stands firmly
                  in support of financial freedom and the liberty that Bitcoin
                  provides globally for anyone to voluntarily participate in a
                  permissionless and decentralized network.
                </p>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  which empowers people to not be marginalized by governments
                  and financial institutions. We stand and focus in the common
                  wealth and financial growth of our clients.{' '}
                </p>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                >
                  We are have contributed greatly in the grown of many standard
                  companies in the United Kingdom.We provide a stable, reliable
                  and trusted means of financial investment through bitcoinand
                  other cryptocurrencies.
                </p>
              </div>
              <button
                className="btn btn-primary video animation animated text-white"
                data-animation-delay="1s"
                data-animation="fadeInUp"
                onClick={() => setOpenVideo(!openVideo)}
              >
                <span className="ion-play gradient_box"></span>Let's Start
              </button>
            </div>
            <Dialog
              open={openVideo}
              onClose={() => setOpenVideo(false)}
              maxWidth="xl"
            >
              <ReactPlayer
                controls
                playing
                url={'https://www.youtube.com/watch?v=ZE2HxTmxfrI'}
                style={{ border: 'none', outline: 'none' }}
              />
            </Dialog>
          </div>
        </div>
      </section>
      {/* END SECTION ABOUT US */}

      {/* START SECTION SERVICES */}
      <section id="service" className="gradient_box2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div className="title_default_light title_border text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Meet our solution for you
                </h4>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center box_shadow_none p-0 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.2s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/Wallet.png"
                  alt="Wallet"
                />
                <h4>Secure Wallet</h4>
                <p>
                  Bitcoin is received, stored, and sent using software known as
                  a Bitcoin Wallet. There are many variations of wallets but we
                  give you a standard and trusted wallet.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center box_shadow_none p-0 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/Protection.png"
                  alt="Protection"
                />
                <h4>Fully Protection</h4>
                <p>
                  your wallet must be secured. Bitcoin makes it possible to
                  transfer value any where in a very easy way and it allows you
                  to be in control of your money.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center box_shadow_none p-0 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/Analysis.png"
                  alt="Analysis"
                />
                <h4>Analysis & Planning</h4>
                <p>
                  Each user has unique needs, so there is no one size fits all
                  for exchanges. Our Bitcoin exchange reviews detail each
                  exchange's supported countries
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center box_shadow_none p-0 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/Project.png"
                  alt="Projects"
                />
                <h4>Investment projects</h4>
                <p>
                  Bitcoin investment opportunities exist outside of simply
                  speculating on the Bitcoin exchange rate. sell bitcoins and
                  profit from extreme changes
                </p>
              </div>
            </div>
            <div className="col-lg-4  col-md-6 col-sm-12">
              <div
                className="box_wrap text-center box_shadow_none p-0 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="1.0s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/Trading.png"
                  alt="Trading"
                />
                <h4>Crypto Trading Platform</h4>
                <p>
                  We take careful measures to ensure that your bitcoin is as
                  safe as possible. Offline storage provides an important
                  security measure against theft or loss.{' '}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap text-center box_shadow_none p-0 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="1.2s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/Buy_Sell.png"
                  alt="Buy_Sell"
                />
                <h4>Buy & invest Coin</h4>
                <p>
                  Blockchain works with exchange partners all around the world
                  to make buying bitcoin in your wallet both a seamless and
                  secure experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION SERVICES */}

      {/* START SECTION TOKEN SALE */}
      <section id="token" className="section_token">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-sm-12">
              <div className="title_default_light text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  CryptoGold Investment Analysis
                </h4>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Join the industry leaders to discuss where the markets are
                  heading. We accept all kinds of cryptocurrencies.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center small_space">
            <div className="col-xl-4 col-lg-5 col-md-12">
              <div className="token_info_table_s2 h-100">
                <table className="table table-blue m-0 h-100">
                  <tbody>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.2s"
                    >
                      <td>Starting Time :</td>
                      <td>APR 23,2022</td>
                    </tr>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.3s"
                    >
                      <td>Ending Time :</td>
                      <td>JUN 18,2018</td>
                    </tr>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <td>Monthly Pay Out :</td>
                      <td>90,000 USD</td>
                    </tr>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <td>Total Pay Out :</td>
                      <td>55,000 USD</td>
                    </tr>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <td> Online Clients :</td>
                      <td>30000</td>
                    </tr>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.7s"
                    >
                      <td>Exchange Rate :</td>
                      <td>1 BTC = 1940 USD</td>
                    </tr>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <td>Total Investment :</td>
                      <td>850,000</td>
                    </tr>
                    <tr
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.9s"
                    >
                      <td>Total Transactions :</td>
                      <td>7,543</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-xl-5 col-lg-4 col-sm-7">
              <div
                className="res_md_mt_30 res_sm_mt_20 text-center animation animated"
                data-animation="fadeInRight"
                data-animation-delay="0.6s"
              >
                <canvas id="token_dist2" width="650"></canvas>
                <div className="chart_icon ">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/chart_icon.png"
                    alt="chart"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-5">
              <ul className="list_none chart_info_list text-white ml-0 res_xs_mt_20 ">
                <li
                  className="animation animated"
                  data-animation="fadeInUp "
                  data-animation-delay="0.2s"
                >
                  <span className="chart_bx color3"></span>
                  <span>Private/Pre Sale</span>
                </li>
                <li
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.3s"
                >
                  <span className="chart_bx color4"></span>
                  <span> Public ICO</span>
                </li>
                <li
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  <span className="chart_bx color11"></span>
                  <span>Team & Advisor</span>
                </li>
                <li
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.5s"
                >
                  <span className="chart_bx color1"></span>
                  <span>Marketing & General</span>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  <span className="chart_bx color2"></span>
                  <span>Bounty</span>
                </li>
                <li
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.7s"
                >
                  <span className="chart_bx color12"></span>
                  <span>interconnection Dev</span>
                </li>
                <li
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                >
                  <span className="chart_bx color13"></span>
                  <span>Marketing & General</span>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.9s"
                >
                  <span className="chart_bx color8"></span>
                  <span>Mobile Ad Platform</span>
                </li>
                <li
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.0s"
                >
                  <span className="chart_bx color7"></span>
                  <span>Ad Platform Integration</span>
                </li>
                <li
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  <span className="chart_bx color6"></span>
                  <span>Operational Overhead</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TOKEN SALE */}

      {/* SECTION MOBILE APP */}
      <section id="mobileapp" className="gradient_box2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="title_default_light text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Download Mobile App
                </h4>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  The use of crypto-currencies has become more widespread, and
                  they are now increasingly accepted as a legitimate currency
                  for transactions.
                </p>
              </div>
            </div>
          </div>
          <div className="row align-items-center small_space">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div
                className="res_md_mt_40 res_md_mb_40 res_sm_mt_20 res_sm_mb_20 text-center animation"
                data-animation="zoomIn"
                data-animation-delay="0.2s"
              >
                <img
                  className="bounceimg"
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/mobile_app5.png"
                  alt="mobile_app5"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6">
                  <ul className="list_none app_content">
                    <li
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <div className="app_icon">
                        <img
                          src="https://bestwebcreator.com/cryptocash/demo/assets/images/Devices.png"
                          alt="Devices"
                        />
                      </div>
                      <div className="app_desc">
                        <h6>Different devices compatible</h6>
                        <p>
                          If you are going to use a passage of device, you need
                          to be anything middle
                        </p>
                      </div>
                    </li>
                    <li
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <div className="app_icon">
                        <img
                          src="https://bestwebcreator.com/cryptocash/demo/assets/images/Online_Buy_Sell.png"
                          alt="Online_Buy_Sell"
                        />
                      </div>
                      <div className="app_desc">
                        <h6>Online Buy & Sell</h6>
                        <p>
                          If you are going to use a passage of device, you need
                          to be anything middle
                        </p>
                      </div>
                    </li>
                    <li
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="app_icon">
                        <img
                          src="https://bestwebcreator.com/cryptocash/demo/assets/images/Transformative.png"
                          alt="Transformative"
                        />
                      </div>
                      <div className="app_desc">
                        <h6>Transformative technologies</h6>
                        <p>
                          If you are going to use a passage of device, you need
                          to be anything middle
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list_none app_content">
                    <li
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <div className="app_icon">
                        <img
                          src="https://bestwebcreator.com/cryptocash/demo/assets/images/Manage_wallet.png"
                          alt="Manage_wallet"
                        />
                      </div>
                      <div className="app_desc">
                        <h6>Manage your Wallet</h6>
                        <p>
                          If you are going to use a passage of device, you need
                          to be anything middle
                        </p>
                      </div>
                    </li>
                    <li
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.5s"
                    >
                      <div className="app_icon">
                        <img
                          src="https://bestwebcreator.com/cryptocash/demo/assets/images/Stay_friend.png"
                          alt="Stay_friend"
                        />
                      </div>
                      <div className="app_desc">
                        <h6>Stay with Friend</h6>
                        <p>
                          If you are going to use a passage of device, you need
                          to be anything middle
                        </p>
                      </div>
                    </li>
                    <li
                      className="animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="app_icon">
                        <img
                          src="https://bestwebcreator.com/cryptocash/demo/assets/images/Bonus.png"
                          alt="Bonus"
                        />
                      </div>
                      <div className="app_desc">
                        <h6>Reward & Bonus</h6>
                        <p>
                          If you are going to use a passage of device, you need
                          to be anything middle
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div
                    data-animation-delay="0.8s"
                    data-animation="fadeInUp"
                    className="btn_group text_md_center mt-4 pt-2 mt-lg-0 pt-lg-0 animation animated"
                  >
                    <Link className="btn btn-default btn-radius" to="/">
                      <em className="fa fa-android"></em>Google Store{' '}
                    </Link>
                    <Link className="btn btn-default btn-radius" to="/">
                      <em className="fa fa-apple"></em>Apple Store
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION MOBILE APP */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Choose Your Plan
                </h4>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_20">
                <div className="pr_title blue_light_bg">
                  <h3>Basic</h3>
                  <div className="price_tage">
                    <h3>$3000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none text-light">
                    <li>Normal Deposit</li>
                    <li>$200</li>
                    <li>Initial Withdrawal</li>
                    <li>$3900</li>
                    <li>Bonus</li>
                    <li>$50</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_30">
                <div className="pr_title pink_bg">
                  <h3>Standard</h3>
                  <div className="price_tage">
                    <h3>$3000.00</h3>
                    <span>Token plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none text-light">
                    <li>Normal Deposit</li>
                    <li>$400</li>
                    <li>Initial Withdrawal</li>
                    <li>$5900</li>
                    <li>Bonus</li>
                    <li>$100</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="pricing_box text-center res_sm_mt_30">
                <div className="pr_title yellow_bg">
                  <h3>Untimate</h3>
                  <div className="price_tage">
                    <h3>$5000.00</h3>
                    <span>Token Plan</span>
                  </div>
                </div>
                <div className="pr_content">
                  <ul className="list_none text-light">
                    <li>Normal Deposit</li>
                    <li>$1000</li>
                    <li>Initial Withdrawal</li>
                    <li>$7800</li>
                    <li>Bonus</li>
                    <li>$200</li>
                  </ul>
                </div>
                <div className="pr_footer">
                  <a href="/login" className="btn btn-default btn-radius">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* START SECTION TIMELINE */}
      <section id="roadmap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_light text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Roadmap
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  The use of crypto-currencies has become more widespread, and
                  they are now increasingly accepted as a legitimate currency
                  for transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row roadmap_list small_space align-items-end">
            <div className="col-lg">
              <div className="single_roadmap roadmap_done">
                <div className="roadmap_icon"></div>
                <h6
                  className="animation animated"
                  data-animation="fadeInDown"
                  data-animation-delay="0.2s"
                >
                  April 2018
                </h6>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.3s"
                >
                  Inotial Coin Distribution & maketing{' '}
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="single_roadmap roadmap_done">
                <div className="roadmap_icon"></div>
                <h6
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  February 2018
                </h6>
                <p
                  className="animation animated"
                  data-animation="fadeInDown"
                  data-animation-delay="0.2s"
                >
                  Exchange Bitcontent to Bitcoin
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="single_roadmap">
                <div className="roadmap_icon"></div>
                <h6
                  className="animation animated"
                  data-animation="fadeInDown"
                  data-animation-delay="0.2s"
                >
                  March 2018
                </h6>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  BTCC mode of payment in Bitconcent
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="single_roadmap">
                <div className="roadmap_icon"></div>
                <h6
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  June 2018
                </h6>
                <p
                  className="animation animated"
                  data-animation="fadeInDown"
                  data-animation-delay="0.2s"
                >
                  Send-Receive Bitcon & mobile
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="single_roadmap">
                <div className="roadmap_icon"></div>
                <h6
                  className="animation animated"
                  data-animation="fadeInDown"
                  data-animation-delay="0.2s"
                >
                  October 2018
                </h6>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Coin Marketcap, World Coin Index
                </p>
              </div>
            </div>
            <div className="col-lg">
              <div className="single_roadmap">
                <div className="roadmap_icon"></div>
                <h6
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  December 2018
                </h6>
                <p
                  className="animation animated"
                  data-animation="fadeInDown"
                  data-animation-delay="0.2s"
                >
                  Online & Trading ICO Token Sale
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TIMELINE */}

      {/* START SECTION TEAM */}
      <section id="team" className="section_team gradient_box2">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_light title_border text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Leadership Team
                </h4>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  we are proud of our great team. He is one of the most
                  motivated and enthusiastic people we have, and is always ready
                  and willing to help out where needed.{' '}
                </p>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
              <div
                className="blue_bg radius_box team_box_s3 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img1.png"
                    alt="team1"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team1" onClick={() => setTeamOpen('team1')}>
                      Derek Castro
                    </a>
                  </h4>
                  <p>Head Of Marketing</p>
                </div>
                <Dialog
                  open={teamOpen === 'team1' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team1" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-1.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Derek Castro</h4>
                            <span>Head Of Marketing</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-pinterest-p"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="pt-3">
                          <h5>About</h5>
                          <hr />
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
              <div
                className="blue_bg radius_box team_box_s3 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img2.png"
                    alt="team2"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team2" onClick={() => setTeamOpen('team2')}>
                      Jessica Bell
                    </a>
                  </h4>
                  <p>Head Of Sale</p>
                </div>
                <Dialog
                  open={teamOpen === 'team2' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team2" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-2.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Jessica Bell</h4>
                            <span>Head Of Sale</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-pinterest-p"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="pt-3">
                          <h5>About</h5>
                          <hr />
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
              <div
                className="blue_bg radius_box team_box_s3 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img3.png"
                    alt="team3"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team3" onClick={() => setTeamOpen('team3')}>
                      Alvaro Martin
                    </a>
                  </h4>
                  <p>Blockchain App Developer</p>
                </div>
                <Dialog
                  open={teamOpen === 'team3' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team3" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-3.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Alvaro Martin</h4>
                            <span>Blockchain App Developer</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-pinterest-p"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="pt-3">
                          <h5>About</h5>
                          <hr />
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="blue_bg radius_box team_box_s3 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img4.png"
                    alt="team4"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team4" onClick={() => setTeamOpen('team4')}>
                      Maria Willium
                    </a>
                  </h4>
                  <p>Community Manager</p>
                </div>
                <Dialog
                  open={teamOpen === 'team4' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team4" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-4.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Maria Willium</h4>
                            <span>Community Manager</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <i className="fa fa-pinterest-p"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="pt-3">
                          <h5>About</h5>
                          <hr />
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                          <p>
                            Founder of Venus Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a videographer, photographer and
                            producer with a big number of successful
                            entrepreneurships under his name over the last 18
                            years.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="divider large_divider"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="title_default_light title_border text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Invester Board
                </h4>
              </div>
            </div>
          </div>
          <div className="row small_space justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                  <div
                    className="blue_bg radius_box team_box_s3 animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    <div className="text-center">
                      <img
                        src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img5.png"
                        alt="team5"
                      />
                      <div className="team_social_s2 list_none">
                        <ul>
                          <li>
                            <Link to="/">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info text-center">
                      <h4>
                        <a href="#team5" onClick={() => setTeamOpen('team5')}>
                          Tricia Diyana
                        </a>
                      </h4>
                      <p>Invester</p>
                    </div>
                    <Dialog
                      open={teamOpen === 'team5' ? true : false}
                      maxWidth="lg"
                      onClose={() => setTeamOpen(false)}
                    >
                      <div
                        id="team5"
                        className="team_pop "
                        style={{ display: 'block' }}
                      >
                        <div className="row m-0">
                          <div className="col-md-4 text-center">
                            <div className="team_img_wrap">
                              <img
                                className="w-100"
                                src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-5.jpg"
                                alt="user_img-lg"
                              />
                              <div className="team_title">
                                <h4>Tricia Diyana</h4>
                                <span>Invester</span>
                              </div>
                            </div>
                            <div className="social_single_team list_none mt-3">
                              <ul>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-pinterest-p"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="pt-3">
                              <h5>About</h5>
                              <hr />
                              <p>
                                Founder of Venus Media Ltd and Owner of leading
                                website for affiliates in the entertainment
                                industry TakeBucks, he is a videographer,
                                photographer and producer with a big number of
                                successful entrepreneurships under his name over
                                the last 18 years.
                              </p>
                              <p>
                                Founder of Venus Media Ltd and Owner of leading
                                website for affiliates in the entertainment
                                industry TakeBucks, he is a videographer,
                                photographer and producer with a big number of
                                successful entrepreneurships under his name over
                                the last 18 years.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                  <div
                    className="blue_bg radius_box team_box_s3 animation animated"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    <div className="text-center">
                      <img
                        src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img6.png"
                        alt="team6"
                      />
                      <div className="team_social_s2 list_none">
                        <ul>
                          <li>
                            <Link to="/">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info text-center">
                      <h4>
                        <a href="#team6" onClick={() => setTeamOpen('team6')}>
                          Kent Pierce
                        </a>
                      </h4>
                      <p>Invester</p>
                    </div>
                    <Dialog
                      open={teamOpen === 'team6' ? true : false}
                      maxWidth="lg"
                      onClose={() => setTeamOpen(false)}
                    >
                      <div id="team6" className="team_pop ">
                        <div className="row m-0">
                          <div className="col-md-4 text-center">
                            <div className="team_img_wrap">
                              <img
                                className="w-100"
                                src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-6.jpg"
                                alt="user_img-lg"
                              />
                              <div className="team_title">
                                <h4>Kent Pierce</h4>
                                <span>Invester</span>
                              </div>
                            </div>
                            <div className="social_single_team list_none mt-3">
                              <ul>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-pinterest-p"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="pt-3">
                              <h5>About</h5>
                              <hr />
                              <p>
                                Founder of Venus Media Ltd and Owner of leading
                                website for affiliates in the entertainment
                                industry TakeBucks, he is a videographer,
                                photographer and producer with a big number of
                                successful entrepreneurships under his name over
                                the last 18 years.
                              </p>
                              <p>
                                Founder of Venus Media Ltd and Owner of leading
                                website for affiliates in the entertainment
                                industry TakeBucks, he is a videographer,
                                photographer and producer with a big number of
                                successful entrepreneurships under his name over
                                the last 18 years.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </div>
                </div>
                <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-6 offset-sm-3">
                  <div
                    className="blue_bg radius_box team_box_s3 animation animated"
                    data-animation="fadeInUp"
                    data-animation-delay="0.6s"
                  >
                    <div className="text-center">
                      <img
                        src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img7.png"
                        alt="team7"
                      />
                      <div className="team_social_s2 list_none">
                        <ul>
                          <li>
                            <Link to="/">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/">
                              <i className="fa fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info text-center">
                      <h4>
                        <a
                          href="#team7"
                          data-toggle="team"
                          onClick={() => setTeamOpen('team7')}
                        >
                          Rose Morgen
                        </a>
                      </h4>
                      <p>Invester</p>
                    </div>
                    <Dialog
                      open={teamOpen === 'team7' ? true : false}
                      maxWidth="lg"
                      onClose={() => setTeamOpen(false)}
                    >
                      <div id="team7" className="team_pop ">
                        <div className="row m-0">
                          <div className="col-md-4 text-center">
                            <div className="team_img_wrap">
                              <img
                                className="w-100"
                                src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-7.jpg"
                                alt="user_img-lg"
                              />
                              <div className="team_title">
                                <h4>Rose Morgen</h4>
                                <span>Invester</span>
                              </div>
                            </div>
                            <div className="social_single_team list_none mt-3">
                              <ul>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/">
                                    <i className="fa fa-pinterest-p"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="pt-3">
                              <h5>About</h5>
                              <hr />
                              <p>
                                Founder of Venus Media Ltd and Owner of leading
                                website for affiliates in the entertainment
                                industry TakeBucks, he is a videographer,
                                photographer and producer with a big number of
                                successful entrepreneurships under his name over
                                the last 18 years.
                              </p>
                              <p>
                                Founder of Venus Media Ltd and Owner of leading
                                website for affiliates in the entertainment
                                industry TakeBucks, he is a videographer,
                                photographer and producer with a big number of
                                successful entrepreneurships under his name over
                                the last 18 years.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Dialog>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION TEAM */}

      {/* START SECTION FAQ */}
      <section id="faq" className="blue_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_light text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Frequently Asked Questions
                </h4>
                <p
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Frequently asked questions (FAQ) or Questions and Answers
                  (Q&A), are listed questions and answers, all supposed to be
                  commonly asked in some context
                </p>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-3 col-md-12">
              <ul
                className="nav nav-pills d-block tab_s2"
                id="pills-tab"
                role="tablist"
              >
                <li
                  className="nav-item animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.5s"
                >
                  <a className="tab-link active" data-toggle="tab" href="#tab1">
                    General
                  </a>
                </li>
                <li
                  className="nav-item animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  <a className="tab-link" data-toggle="tab" href="#tab2">
                    Token Info{' '}
                  </a>
                </li>
                <li
                  className="nav-item animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.7s"
                >
                  <a className="tab-link" data-toggle="tab" href="#tab3">
                    CryptoGold pricing
                  </a>
                </li>
                <li
                  className="nav-item animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.7s"
                >
                  <a className="tab-link" data-toggle="tab" href="#tab4">
                    Client
                  </a>
                </li>
                <li
                  className="nav-item animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                >
                  <a className="tab-link" data-toggle="tab" href="#tab5">
                    Legal
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-9 col-md-12">
              <div className="tab-content res_md_mt_30 res_sm_mt_20">
                <div
                  className="tab-pane fade show active"
                  id="tab1"
                  role="tabpanel"
                >
                  <div id="accordion1" className="faq_content2">
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <div className="card-header" id="headingOne">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            What is cryptocurrency?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          {' '}
                          The best cryptocurrency to buy is one we are willing
                          to hold onto even if it goes down. For example, I
                          believe in Steem enough that I am willing to hold it
                          even if it goes down 99% and would start buying more
                          of it if the price dropped.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="card-header" id="headingTwo">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Which cryptocurrency is best to buy today?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          {' '}
                          The best cryptocurrency to buy is one we are willing
                          to hold onto even if it goes down. For example, I
                          believe in Steem enough that I am willing to hold it
                          even if it goes down 99% and would start buying more
                          of it if the price dropped.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <div className="card-header" id="headingThree">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            How about day trading crypto?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          {' '}
                          While profits are possible trading cryptocurrencies,
                          so are losses. My first year involved me spending
                          hundreds of hours trading Bitcoin with a result of
                          losing over $5,000 with nothing to show for it. Simply
                          trading digital currencies is very similar to gambling
                          because no one really knows what is going to happen
                          next although anyone can guess! While I was lucky to
                          do nothing expect lose money when I started, the worst
                          thing that can happen is to get lucky right away and
                          get a big ego about what an amazing cryptocurrency
                          trader we are.{' '}
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <div className="card-header" id="headingFour">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            When to sell a cryptocurrency?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                        data-parent="#accordion1"
                      >
                        <div className="card-body">
                          {' '}
                          Before Steem I was all in an another altcoin and
                          really excited about it. When I first bought the price
                          was low and made payments to me every week just for
                          holding it. As I tried to participate in the community
                          over the next several months, I was consistently met
                          with a mix of excitement and hostility. When I began
                          talking openly about this, the negative emotions won
                          over in the community and in me. Originally I had
                          invested and been happy to hold no matter what the
                          price which quickly went up after I bought it.{' '}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab2" role="tabpanel">
                  <div id="accordion2" className="faq_content2">
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <div className="card-header" id="headingFive">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            data-toggle="collapse"
                            href="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            How does one acquire bitcoins?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse show"
                        aria-labelledby="headingFive"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          {' '}
                          While it may be possible to find individuals who wish
                          to sell bitcoins in exchange for a credit card or
                          PayPal payment, most exchanges do not allow funding
                          via these payment methods. This is due to cases where
                          someone buys bitcoins with PayPal, and then reverses
                          their half of the transaction. This is commonly
                          referred to as a chargeback.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="card-header" id="headingSix">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Can I make money with Bitcoin?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          {' '}
                          You should never expect to get rich with Bitcoin or
                          any emerging technology. It is always important to be
                          wary of anything that sounds too good to be true or
                          disobeys basic economic rules.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <div className="card-header" id="headingSeven">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            What happens when bitcoins are lost?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        aria-labelledby="headingSeven"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          When a user loses his wallet, it has the effect of
                          removing money out of circulation. Lost bitcoins still
                          remain in the block chain just like any other
                          bitcoins. However, lost bitcoins remain dormant
                          forever because there is no way for anybody to find
                          the private key(s) that would allow them to be spent
                          again. Because of the law of supply and demand, when
                          fewer bitcoins are available, the ones that are left
                          will be in higher demand and increase in value to
                          compensate.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <div className="card-header" id="headingEight">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Who controls the Bitcoin network?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseEight"
                        className="collapse"
                        aria-labelledby="headingEight"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Nobody owns the Bitcoin network much like no one owns
                          the technology behind email. Bitcoin is controlled by
                          all Bitcoin users around the world. While developers
                          are improving the software, they can't force a change
                          in the Bitcoin protocol because all users are free to
                          choose what software and version they use.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab3" role="tabpanel">
                  <div id="accordion3" className="faq_content2">
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <div className="card-header" id="headingNine">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            data-toggle="collapse"
                            href="#collapseNine"
                            aria-expanded="true"
                            aria-controls="collapseNine"
                          >
                            How are bitcoins created?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseNine"
                        className="collapse show"
                        aria-labelledby="headingNine"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          {' '}
                          New bitcoins are generated by a competitive and
                          decentralized process called "mining". This process
                          involves that individuals are rewarded by the network
                          for their services. Bitcoin miners are processing
                          transactions and securing the network using
                          specialized hardware and are collecting new bitcoins
                          in exchange.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="card-header" id="headingTen">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTen"
                            aria-expanded="false"
                            aria-controls="collapseTen"
                          >
                            Why do bitcoins have value?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseTen"
                        className="collapse"
                        aria-labelledby="headingTen"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          Bitcoins have value because they are useful as a form
                          of money. Bitcoin has the characteristics of money
                          (durability, portability, fungibility, scarcity,
                          divisibility, and recognizability) based on the
                          properties of mathematics rather than relying on
                          physical properties (like gold and silver) or trust in
                          central authorities (like fiat currencies). In short,
                          Bitcoin is backed by mathematics.{' '}
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <div className="card-header" id="headingEleven">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEleven"
                            aria-expanded="false"
                            aria-controls="collapseEleven"
                          >
                            What determines bitcoin's price?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseEleven"
                        className="collapse"
                        aria-labelledby="headingEleven"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          {' '}
                          The price of a bitcoin is determined by supply and
                          demand. When demand for bitcoins increases, the price
                          increases, and when demand falls, the price falls.
                          There is only a limited number of bitcoins in
                          circulation and new bitcoins are created at a
                          predictable and decreasing rate
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <div className="card-header" id="headingTwelve">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwelve"
                            aria-expanded="false"
                            aria-controls="collapseTwelve"
                          >
                            Can bitcoins become worthless?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseTwelve"
                        className="collapse"
                        aria-labelledby="headingTwelve"
                        data-parent="#accordion3"
                      >
                        <div className="card-body">
                          {' '}
                          Yes. History is littered with currencies that failed
                          and are no longer used, such as the German Mark during
                          the Weimar Republic and, more recently, the Zimbabwean
                          dollar.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab4" role="tabpanel">
                  <div id="accordion2" className="faq_content2">
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <div className="card-header" id="headingFive">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            data-toggle="collapse"
                            href="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            How does one acquire bitcoins?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse show"
                        aria-labelledby="headingFive"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          {' '}
                          While it may be possible to find individuals who wish
                          to sell bitcoins in exchange for a credit card or
                          PayPal payment, most exchanges do not allow funding
                          via these payment methods. This is due to cases where
                          someone buys bitcoins with PayPal, and then reverses
                          their half of the transaction. This is commonly
                          referred to as a chargeback.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="card-header" id="headingSix">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            Can I make money with Bitcoin?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseSix"
                        className="collapse"
                        aria-labelledby="headingSix"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          {' '}
                          You should never expect to get rich with Bitcoin or
                          any emerging technology. It is always important to be
                          wary of anything that sounds too good to be true or
                          disobeys basic economic rules.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <div className="card-header" id="headingSeven">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            What happens when bitcoins are lost?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseSeven"
                        className="collapse"
                        aria-labelledby="headingSeven"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          When a user loses his wallet, it has the effect of
                          removing money out of circulation. Lost bitcoins still
                          remain in the block chain just like any other
                          bitcoins. However, lost bitcoins remain dormant
                          forever because there is no way for anybody to find
                          the private key(s) that would allow them to be spent
                          again. Because of the law of supply and demand, when
                          fewer bitcoins are available, the ones that are left
                          will be in higher demand and increase in value to
                          compensate.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <div className="card-header" id="headingEight">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseEight"
                            aria-expanded="false"
                            aria-controls="collapseEight"
                          >
                            Who controls the Bitcoin network?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseEight"
                        className="collapse"
                        aria-labelledby="headingEight"
                        data-parent="#accordion2"
                      >
                        <div className="card-body">
                          Nobody owns the Bitcoin network much like no one owns
                          the technology behind email. Bitcoin is controlled by
                          all Bitcoin users around the world. While developers
                          are improving the software, they can't force a change
                          in the Bitcoin protocol because all users are free to
                          choose what software and version they use.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab5" role="tabpanel">
                  <div id="accordion4" className="faq_content2">
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <div className="card-header" id="headingThirteen">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            data-toggle="collapse"
                            href="#collapseThirteen"
                            aria-expanded="true"
                            aria-controls="collapseThirteen"
                          >
                            Is Bitcoin legal?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseThirteen"
                        className="collapse show"
                        aria-labelledby="headingThirteen"
                        data-parent="#accordion4"
                      >
                        <div className="card-body">
                          To the best of our knowledge, Bitcoin has not been
                          made illegal by legislation in most jurisdictions.
                          However, some jurisdictions (such as Argentina and
                          Russia) severely restrict or ban foreign currencies.
                          Other jurisdictions (such as Thailand) may limit the
                          licensing of certain entities such as Bitcoin
                          exchanges.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="card-header" id="headingFourteen">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFourteen"
                            aria-expanded="false"
                            aria-controls="collapseFourteen"
                          >
                            Is Bitcoin useful for illegal activities?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseFourteen"
                        className="collapse"
                        aria-labelledby="headingFourteen"
                        data-parent="#accordion4"
                      >
                        <div className="card-body">
                          Bitcoin is money, and money has always been used both
                          for legal and illegal purposes. Cash, credit cards and
                          current banking systems widely surpass Bitcoin in
                          terms of their use to finance crime. Bitcoin can bring
                          significant innovation in payment systems and the
                          benefits of such innovation are often considered to be
                          far beyond their potential drawbacks.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <div className="card-header" id="headingFifteen">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFifteen"
                            aria-expanded="false"
                            aria-controls="collapseFifteen"
                          >
                            Can Bitcoin be regulated?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseFifteen"
                        className="collapse"
                        aria-labelledby="headingFifteen"
                        data-parent="#accordion4"
                      >
                        <div className="card-body">
                          {' '}
                          The Bitcoin protocol itself cannot be modified without
                          the cooperation of nearly all its users, who choose
                          what software they use. Attempting to assign special
                          rights to a local authority in the rules of the global
                          Bitcoin network is not a practical possibility.
                        </div>
                      </div>
                    </div>
                    <div
                      className="card animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <div className="card-header" id="headingSixteen">
                        <h6 className="mb-0">
                          {' '}
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseSixteen"
                            aria-expanded="false"
                            aria-controls="collapseSixteen"
                          >
                            What about Bitcoin and taxes?
                          </a>{' '}
                        </h6>
                      </div>
                      <div
                        id="collapseSixteen"
                        className="collapse"
                        aria-labelledby="headingSixteen"
                        data-parent="#accordion4"
                      >
                        <div className="card-body">
                          {' '}
                          Bitcoin is not a fiat currency with legal tender
                          status in any jurisdiction, but often tax liability
                          accrues regardless of the medium used. There is a wide
                          variety of legislation in many different jurisdictions
                          which could cause income, sales, payroll, capital
                          gains, or some other form of tax liability to arise
                          with Bitcoin.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION FAQ */}

      {/* START CLIENTS SECTION */}
      <section className="client_logo gradient_box2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_default_light text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Our Clients
                </h4>
              </div>
            </div>
          </div>
          <div className="row align-items-center text-center overflow_hide small_space">
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.3s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt1.png"
                  alt="client_logo_wt1"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt2.png"
                  alt="client_logo_wt2"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.5s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt3.png"
                  alt="client_logo_wt3"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt4.png"
                  alt="client_logo_wt4"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animated animation"
                data-animation="fadeInUp"
                data-animation-delay="0.7s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt5.png"
                  alt="client_logo_wt5"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt6.png"
                  alt="client_logo_wt6"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation animated"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt7.png"
                  alt="client_logo_wt7"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_wt8.png"
                  alt="client_logo_wt8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CLIENTS SECTION */}

      {/* START SECTION CONTACT */}
      <section id="contact" className="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_light title_border text-center">
                <h4
                  className="animation animated"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Get In Touch!
                </h4>
              </div>
            </div>
          </div>
          <div className="row align-items-center small_space">
            <div className="col-lg-4 col-md-6 offset-lg-2">
              <div
                className="blue_dark_bg contact_box_s2 animation animated"
                data-animation="fadeInLeft"
                data-animation-delay="0.1s"
              >
                <div className="contact_title">
                  <h5
                    className="animation animated"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Contact With Us
                  </h5>
                  <p
                    className="animation animated"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    Our office is located in a beautiful building and garden
                  </p>
                </div>
                <ul className="list_none contact_info mt-margin">
                  <li
                    className="animation animated"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
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
                    className="animation animated"
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
                    className="animation animated"
                    data-animation="fadeInUp"
                    data-animation-delay="0.5s"
                  >
                    <i className="fa fa-whatsapp"></i>
                    <div className="contact_detail">
                      {' '}
                      <span>WhatsApp</span>
                      <p>+447459755944</p>
                    </div>
                  </li>
                  <li
                    className="animation animated"
                    data-animation="fadeInUp"
                    data-animation-delay="0.6s"
                  >
                    <i className="fa fa-envelope"></i>
                    <div className="contact_detail">
                      {' '}
                      <span>Email-id</span>
                      <p>support@cryptoGold.info</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div
                className="pt-4 pt-md-0 animation animated"
                data-animation="fadeInRight"
                data-animation-delay="0.1s"
              >
                <Snackbar
                  onClose={() => setopenSnack(false)}
                  open={openSnack}
                  message={contactSuccess ? contactSuccess : contactError}
                  ContentProps={{ className: classes.content }}
                  autoHideDuration={5000}
                  anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
                ></Snackbar>
                <form
                  method="post"
                  name="enq"
                  className="field_form"
                  onChange={handleSubmit}
                >
                  <div className="row">
                    <div
                      className="form-group col-md-12 animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.4s"
                    >
                      <input
                        type="text"
                        required
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
                      className="form-group col-md-12 animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <input
                        type="email"
                        required
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
                      className="form-group col-md-12 animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="0.8s"
                    >
                      <input
                        type="text"
                        required
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
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="1s"
                    >
                      <textarea
                        required
                        placeholder="Message *"
                        id="description"
                        className="form-control"
                        name="message"
                        rows="2"
                        value={userData.message}
                        onChange={(e) =>
                          setuserData({ ...userData, message: e.target.value })
                        }
                      ></textarea>
                    </div>
                    <div
                      className="col-md-12 text-center animation animated"
                      data-animation="fadeInUp"
                      data-animation-delay="1.2s"
                    >
                      <button
                        type="submit"
                        title="Submit Your Message!"
                        className="btn btn-default btn-radius btn-block"
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
      {/* END SECTION CONTACT */}
      <Footer />
    </div>
  )
}

export default Home
