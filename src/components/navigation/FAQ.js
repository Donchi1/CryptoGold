import React from 'react'
import Footer from '../body/Footer'
import NavBar from './NavBar'

function FAQ() {
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
                  Frequent Asked Questions
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
                    <span>FAQ's</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION FAQ */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 offset-lg-2">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
                  data-animation="fadeInUp"
                  data-animation-delay="0.2s"
                >
                  Frequently Asked Questions
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
                        href="clone.html#collapseFour"
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
                <div
                  className="card animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.2s"
                >
                  <div className="card-header" id="headingFive">
                    <h6 className="mb-0">
                      {' '}
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        href="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        How does one acquire bitcoins?
                      </a>{' '}
                    </h6>
                  </div>
                  <div
                    id="collapseFive"
                    className="collapse"
                    aria-labelledby="headingFive"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      While it may be possible to find individuals who wish to
                      sell bitcoins in exchange for a credit card or PayPal
                      payment, most exchanges do not allow funding via these
                      payment methods. This is due to cases where someone buys
                      bitcoins with PayPal, and then reverses their half of the
                      transaction. This is commonly referred to as a chargeback.
                    </div>
                  </div>
                </div>
                <div
                  className="card animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.4s"
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
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      You should never expect to get rich with Bitcoin or any
                      emerging technology. It is always important to be wary of
                      anything that sounds too good to be true or disobeys basic
                      economic rules.
                    </div>
                  </div>
                </div>
                <div
                  className="card animation"
                  data-animation="fadeInUp"
                  data-animation-delay="1.6s"
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
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      When a user loses his wallet, it has the effect of
                      removing money out of circulation. Lost bitcoins still
                      remain in the block chain just like any other bitcoins.
                      However, lost bitcoins remain dormant forever because
                      there is no way for anybody to find the private key(s)
                      that would allow them to be spent again. Because of the
                      law of supply and demand, when fewer bitcoins are
                      available, the ones that are left will be in higher demand
                      and increase in value to compensate.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION FAQ */}

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
      <section className="client_logo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="title_default_dark title_border text-center">
                <h4
                  className="animation"
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
      <Footer />
    </>
  )
}

export default FAQ
