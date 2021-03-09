import { Dialog } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../navigation/NavBar'
import Footer from './Footer'
import Testimonials from './Testimonials'

function Teams() {
  const [teamOpen, setTeamOpen] = useState('')
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
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="banner_text text-center">
                <h1
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.1s"
                >
                  Team
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
                    <span>Team</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION TEAM */}
      <section className="section_team">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Our Team
                </h4>
                <p
                  className="animation"
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
                className="bg_gray4 radius_box team_box_s3 animation"
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
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
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
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
              <div
                className="bg_gray4 radius_box team_box_s3 animation"
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
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
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
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                            Founder and owner of allWay plastic company
                            incoperated. A passionate enterpreneur. The owner of
                            Splash real estates ltd. He has contributed greatly
                            to the success of of this golding platform
                            cryptogold.
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
                className="bg_gray4 radius_box team_box_s3 animation"
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
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
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
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                            Founder of Gold Media Ltd and Owner of leading
                            website for affiliates in the entertainment industry
                            TakeBucks, he is a fullstack web developer for 20
                            years.
                          </p>
                          <p>
                            He has contributed so much for the beaulty and and
                            wellbeing of this golding platform for 8years.
                            Building blockchain crypto gateways is the success
                            of every crypto investment platform. He has really
                            mad it easy for our company.
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
                className="bg_gray4 radius_box team_box_s3 animation"
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
                        <Link to="teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
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
                  <div id="team4" className="team_pop">
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
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                            Founder of Exel gas ltd. The manager of the
                            community of investors. she is the the head of all
                            investors over the last 6 years. The successful
                            platform CryptoGold has been made possible by the
                            real contribution and committment of the young lady.
                          </p>
                          <p>
                            Committment, contributions and investing to make
                            this platform the world best is our focus.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
          <div className="divider small_divider d_md_none"></div>
          <div className="row small_space">
            <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
              <div
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img8.png"
                    alt="team8"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team8" onClick={() => setTeamOpen('team8')}>
                      Jack William
                    </a>
                  </h4>
                  <p>Bitcoin App Developer</p>
                </div>
                <Dialog
                  open={teamOpen === 'team8' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team8" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-8.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Jack William</h4>
                            <span>Bitcoin App Developer</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img9.png"
                    alt="team9"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team9" onClick={() => setTeamOpen('team9')}>
                      Alexa Stewart
                    </a>
                  </h4>
                  <p>Community Management</p>
                </div>
                <Dialog
                  open={teamOpen === 'team9' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team9" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-9.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Alexa Stewart</h4>
                            <span>Community Management</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
            <div className="col-lg-3 col-md-6 col-sm-6 res_xs_mb_20">
              <div
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img10.png"
                    alt="team10"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team10" onClick={() => setTeamOpen('team10')}>
                      Mark Robbin
                    </a>
                  </h4>
                  <p>Sale Management</p>
                </div>
                <Dialog
                  open={teamOpen === 'team10' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team10" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-10.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Mark Robbin</h4>
                            <span>Sale Management</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img11.png"
                    alt="team11"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team11" onClick={() => setTeamOpen('team11')}>
                      Kasandra Ford
                    </a>
                  </h4>
                  <p>App Manager</p>
                </div>
                <Dialog
                  open={teamOpen === 'team11' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team11" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-11.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Kasandra Ford</h4>
                            <span>App Manager</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Investor Board
                </h4>
              </div>
            </div>
          </div>
          <div className="row small_space">
            <div className="col-lg-3 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
              <div
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.4s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img12.png"
                    alt="team12"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team12" onClick={() => setTeamOpen('team12')}>
                      Mark Kiese
                    </a>
                  </h4>
                  <p>Invester</p>
                </div>
                <Dialog
                  open={teamOpen === 'team12' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team12" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-12.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Mark Kiese</h4>
                            <span>Investor</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.6s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img13.png"
                    alt="team13"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team13" onClick={() => setTeamOpen('team13')}>
                      Sumera Hureen
                    </a>
                  </h4>
                  <p>Investor</p>
                </div>
                <Dialog
                  open={teamOpen === 'team13' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team13" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-13.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Sumera Hureen</h4>
                            <span>Investor</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="0.8s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img14.png"
                    alt="team14"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team14" onClick={() => setTeamOpen('team14')}>
                      Lioner Messi
                    </a>
                  </h4>
                  <p>Investor</p>
                </div>
                <Dialog
                  open={teamOpen === 'team14' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team14" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-14.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Lioner Messi</h4>
                            <span>Investor</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
                className="bg_gray4 radius_box team_box_s3 animation"
                data-animation="fadeInUp"
                data-animation-delay="1s"
              >
                <div className="text-center">
                  <img
                    src="https://bestwebcreator.com/cryptocash/demo/assets/images/team_img15.png"
                    alt="team15"
                  />
                  <div className="team_social_s2 list_none">
                    <ul>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/teams">
                          <i className="fa fa-pinterest-p"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="team_info text-center">
                  <h4>
                    <a href="#team15" onClick={() => setTeamOpen('team15')}>
                      Berlina Bisne
                    </a>
                  </h4>
                  <p>Investor</p>
                </div>
                <Dialog
                  open={teamOpen === 'team15' ? true : false}
                  maxWidth="lg"
                  onClose={() => setTeamOpen(false)}
                >
                  <div id="team15" className="team_pop ">
                    <div className="row m-0">
                      <div className="col-md-4 text-center">
                        <div className="team_img_wrap">
                          <img
                            className="w-100"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/team-lg-15.jpg"
                            alt="user_img-lg"
                          />
                          <div className="team_title">
                            <h4>Berlina Bisne</h4>
                            <span>Invester</span>
                          </div>
                        </div>
                        <div className="social_single_team list_none mt-3">
                          <ul>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
                                <i className="fa fa-linkedin"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to="/teams">
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
          <div className="divider small_divider d_md_none"></div>
          <div className="row small_space justify-content-center">
            <div className="col-lg-9 col-md-12">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 res_md_mb_30 res_sm_mb_20">
                  <div
                    className="bg_gray4 radius_box team_box_s3 animation"
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
                            <Link to="/teams">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/teams">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/teams">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/teams">
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
                      <p>Investor</p>
                    </div>
                    <Dialog
                      open={teamOpen === 'team5' ? true : false}
                      maxWidth="lg"
                      onClose={() => setTeamOpen(false)}
                    >
                      <div id="team5" className="team_pop ">
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
                                  <Link to="/teams">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
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
                    className="bg_gray4 radius_box team_box_s3 animation"
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
                            <Link to="/team">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/team">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/team">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/team">
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
                      <p>Investor</p>
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
                                  <Link to="/teams">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
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
                    className="bg_gray4 radius_box team_box_s3 animation"
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
                            <Link to="/teams">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/teams">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/teams">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="/teams">
                              <i className="fa fa-pinterest-p"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="team_info text-center">
                      <h4>
                        <a href="#team7" onClick={() => setTeamOpen('team7')}>
                          Rose Morgen
                        </a>
                      </h4>
                      <p>Investor</p>
                    </div>
                    <Dialog
                      open={teamOpen === 'team7' ? true : false}
                      maxWidth="lg"
                      onClose={() => setTeamOpen(false)}
                    >
                      <div id="team7" className="team_pop">
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
                                  <Link to="/teams">
                                    <i className="fa fa-facebook"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
                                    <i className="fa fa-twitter"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
                                    <i className="fa fa-linkedin"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/teams">
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
                href="/contact"
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

      {/* START SECTION TESTIMONIAL */}
      <Testimonials />
      {/* END SECTION TESTIMONIAL */}

      {/* START FOOTER SECTION */}
      <Footer />
    </>
  )
}

export default Teams
