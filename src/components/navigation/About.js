import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../body/Footer'
import NavBar from './NavBar'
import { Dialog } from '@material-ui/core'
import ReactPlayer from 'react-player'

import Testimonials from '../body/Testimonials'

function About() {
  const [teamOpen, setTeamOpen] = useState('')
  const [openVideo, setOpenVideo] = useState(false)
  return (
    <>
      {/* START HEADER */}
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
                  About Us
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
                    <span>About us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION ABOUT */}
      <section className="small_pb ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="res_md_mb_30 res_sm_mb_20">
                <div className="title_default_dark title_border">
                  <h4
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    About The CryptoGold
                  </h4>
                  <p
                    className="animation "
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    CryptoGold is one of the most transformative technologies
                    since the invention of the Internet. CryptoGold stands
                    firmly in support of financial freedom and the liberty that
                    Bitcoin provides globally for anyone to voluntarily
                    participate in a permissionless and decentralized network.
                  </p>
                  <p
                    className="animation "
                    data-animation="fadeInUp"
                    data-animation-delay="0.8s"
                  >
                    which empowers people to not be marginalized by governments
                    and financial institutions. Bitcoin is freedom.{' '}
                  </p>
                </div>
                <button
                  className="btn btn-primary  animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1s"
                  onClick={() => setOpenVideo(!openVideo)}
                >
                  <span className="ion-play"></span>Let's Start
                </button>
              </div>
              <Dialog
                open={openVideo}
                onClose={() => setOpenVideo(false)}
                maxWidth="lg"
              >
                <ReactPlayer
                  controls
                  playing
                  url={'https://www.youtube.com/watch?v=ZE2HxTmxfrI'}
                  style={{ border: 'none', outline: 'none' }}
                />
              </Dialog>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="text-center">
                <img
                  className="animation"
                  data-animation="zoomIn"
                  data-animation-delay="0.2s"
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/about_img2.png"
                  alt="aboutimg2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION ABOUT */}

      {/* START SECTION WHY CHOOSE US */}
      <section className="small_pt">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2 col-md-12 col-sm-12">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Why Choose Us?
                </h4>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  We are stable, reliable and ready to satisfy our client. We
                  are devoted to joint sevice with our client sponsors and
                  teams.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap radius_box bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/wc_icon1.png"
                  alt="wc_icon1"
                />
                <h4>Fully Secured Data</h4>
                <p>
                  CryptoGold bitcoin ensures every block and transaction it
                  accepts is a valid, increasing not only your security but also
                  helping prevent miners and banks from taking control of
                  Bitcoin.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div
                className="box_wrap radius_box bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/wc_icon2.png"
                  alt="wc_icon2"
                />
                <h4>A Better User Interface</h4>
                <p>
                  Bitcoin wallet has features most other wallets don't have. But
                  if you don't need them, you can use several other wallets on
                  top of Bitcoin without losing Bitcoin Core's security and
                  privacy benefits.
                </p>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-0 col-md-6 offset-md-3 col-sm-12">
              <div
                className="box_wrap radius_box bg-white text-center animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/wc_icon3.png"
                  alt="wc_icon3"
                />
                <h4>Support The Network</h4>
                <p>
                  Bitcoin helps support other peers.This isn't as useful as
                  helping to keep Bitcoin decentralized, but it's an easy way
                  for broadband users to contribute to less well-connected
                  users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION WHY CHOOSE US */}

      {/* START SECTION COUNTER */}
      <section className="counter_wrap overlay background_bg counter_bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="box_counter text-center res_sm_mb_20">
                <i
                  className="ion-ios-pie animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                ></i>
                <h3
                  className="counter animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.3s"
                >
                  500
                </h3>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.4s"
                >
                  Recurring Buys
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="box_counter text-center res_sm_mb_20">
                <i
                  className="ion-help-buoy animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.5s"
                ></i>
                <h3
                  className="counter animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.6s"
                >
                  800
                </h3>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.7s"
                >
                  Support Countries
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="box_counter text-center res_xs_mb_20">
                <i
                  className="ion-ios-locked animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.8s"
                ></i>
                <h3
                  className="counter animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.9s"
                >
                  1200
                </h3>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1s"
                >
                  Easy &amp; Secure
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="box_counter text-center">
                <i
                  className="ion-android-contacts animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                ></i>
                <h3
                  className="counter animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.2s"
                >
                  1500
                </h3>
                <p
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.3s"
                >
                  Producers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION COUNTER */}

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
                        <Link to="/about">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center ">
                  <h4>
                    <a
                      className="text-light"
                      href="#team1"
                      onClick={() => setTeamOpen('team1')}
                    >
                      Derek Castro
                    </a>
                  </h4>
                  <p className="text-light">Head Of Marketing</p>
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
                              <Link to="/about">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
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
                        <Link to="/about">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a
                      className="text-light"
                      href="#team2"
                      onClick={() => setTeamOpen('team2')}
                    >
                      Jessica Bell
                    </a>
                  </h4>
                  <p className="text-light">Head Of Sale</p>
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
                              <Link to="/about">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
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
                        <Link to="/about">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a
                      className="text-light"
                      href="#team3"
                      onClick={() => setTeamOpen('team3')}
                    >
                      Alvaro Martin
                    </a>
                  </h4>
                  <p className="text-light">Blockchain App Developer</p>
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
                              <Link to="/about">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
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
                        <Link to="/about">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center ">
                  <h4>
                    <a
                      className="text-light"
                      href="#team4"
                      onClick={() => setTeamOpen('team4')}
                    >
                      Maria Willium
                    </a>
                  </h4>
                  <p className="text-light">Community Manager</p>
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
                              <Link to="/about">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/about">
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
                            <Link to="/about">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info text-center ">
                      <h4>
                        <a
                          className="text-light"
                          href="#team5"
                          onClick={() => setTeamOpen('team5')}
                        >
                          Tricia Diyana
                        </a>
                      </h4>
                      <p className="text-light">Invester</p>
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
                                  <Link to="/about">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
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
                            <Link to="/about">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info text-center ">
                      <h4>
                        <a
                          className="text-light"
                          href="#team6"
                          onClick={() => setTeamOpen('team6')}
                        >
                          Kent Pierce
                        </a>
                      </h4>
                      <p className="text-light">Invester</p>
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
                                  <Link to="/about">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
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
                            <Link to="/about">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/about">
                              <i className="fa fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info text-center ">
                      <h4>
                        <a
                          className="text-light"
                          href="#team7"
                          data-toggle="team"
                          onClick={() => setTeamOpen('team7')}
                        >
                          Rose Morgen
                        </a>
                      </h4>
                      <p className="text-light">Invester</p>
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
                                  <Link to="/about">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/about">
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

      {/* START SECTION TESTIMONIAL */}
      <Testimonials />
      {/* END SECTION TESTIMONIAL */}

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
                  if you think it's just you're looking for. Please contact us!
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

      {/* START CLIENTS SECTION */}
      <section className="client_logo small_pb">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Our Sponsers
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
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray1.png"
                  alt="client_logo_dark_gray1"
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
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray2.png"
                  alt="client_logo_dark_gray2"
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
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray3.png"
                  alt="client_logo_dark_gray3"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray4.png"
                  alt="client_logo_dark_gray4"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.7s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray5.png"
                  alt="client_logo_dark_gray5"
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
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray6.png"
                  alt="client_logo_dark_gray6"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.9s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray7.png"
                  alt="client_logo_dark_gray7"
                />
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-6 logo_border">
              <div
                className="d-flex flex-wrap align-items-center justify-content-center h-100 animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <img
                  src="https://bestwebcreator.com/cryptocash/demo/assets/images/client_logo_dark_gray8.png"
                  alt="client_logo_dark_gray8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END CLIENTS SECTION */}

      {/* START SECTION FAQ */}
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
                  Have Any Questions?
                </h4>
                <p
                  className="animation"
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
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div id="accordion" className="faq_question">
                <div
                  className="card animation"
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
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      {' '}
                      The best cryptocurrency to buy is one we are willing to
                      hold onto even if it goes down. For example, I believe in
                      Steem enough that I am willing to hold it even if it goes
                      down 99% and would start buying more of it if the price
                      dropped.
                    </div>
                  </div>
                </div>
                <div
                  className="card animation"
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
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      {' '}
                      The best cryptocurrency to buy is one we are willing to
                      hold onto even if it goes down. For example, I believe in
                      Steem enough that I am willing to hold it even if it goes
                      down 99% and would start buying more of it if the price
                      dropped.
                    </div>
                  </div>
                </div>
                <div
                  className="card animation"
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
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      {' '}
                      While profits are possible trading cryptocurrencies, so
                      are losses. My first year involved me spending hundreds of
                      hours trading Bitcoin with a result of losing over $5,000
                      with nothing to show for it. Simply trading digital
                      currencies is very similar to gambling because no one
                      really knows what is going to happen next although anyone
                      can guess! While I was lucky to do nothing expect lose
                      money when I started, the worst thing that can happen is
                      to get lucky right away and get a big ego about what an
                      amazing cryptocurrency trader we are.{' '}
                    </div>
                  </div>
                </div>
                <div
                  className="card animation"
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
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      {' '}
                      Before Steem I was all in an another altcoin and really
                      excited about it. When I first bought the price was low
                      and made payments to me every week just for holding it. As
                      I tried to participate in the community over the next
                      several months, I was consistently met with a mix of
                      excitement and hostility. When I began talking openly
                      about this, the negative emotions won over in the
                      community and in me. Originally I had invested and been
                      happy to hold no matter what the price which quickly went
                      up after I bought it.{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION FAQ */}

      <Footer />
    </>
  )
}

export default About
