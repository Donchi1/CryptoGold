import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../body/Footer'
import NavBar from './NavBar'

function Blogs() {
  return (
    <>
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
                  Our Blog
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
                    <span>Blog</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}

      {/* START SECTION BLOG- */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-12">
              <div className="post-details">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <article className="blog_content_detail">
                      <div className="post_content">
                        <h3 className="blog_title">
                          <Link to="/blogs">
                            Bitcoin Price Slightly Recovers as{' '}
                          </Link>
                        </h3>
                        <ul className="list_none blog_meta">
                          <li>
                            <Link to="/blogs">
                              Posted By <span>admin</span>
                            </Link>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-clock"></i> April 14, 2018
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fas fa-comment-dots"></i> 5 Comments
                            </span>
                          </li>
                        </ul>
                        <div className="blog-img mt-3 mb-3">
                          <img
                            alt="blog_largel_img1.jpg"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/blog_large_img1.jpg"
                          />
                        </div>
                        <p>
                          The crypto markets continued to build on April's gains
                          this week, with alternative cryptocurrencies like
                          nano, VeChain and bytecoin leading the way. The
                          Enterprise Blockchain Gap A number of large
                          corporations, including Microsoft, IBM, Oracle, and
                          SAP, have started to take notice of, and invest in,
                          blockchain technology. Enterprise customers are
                          interested in the blockchain because it can help
                          reduce fraud, increase transparency, and provide
                          secure record keeping.{' '}
                        </p>
                        <p>
                          Blockchain technology has started showing up in such
                          diverse fields as cybersecurity, insurance, and supply
                          chain management. Less technically savvy corporations
                          are starting to dip their toes in the water, but
                          there's a huge gap between the desire to invest in
                          blockahin technology and developers with the skills to
                          implement it.
                        </p>
                      </div>
                      <div className="action_block">
                        <a href="/login" className="btn btn-default btn-radius">
                          {' '}
                          Get Started Now
                        </a>
                        <ul className="social-share list_none">
                          <li className="facebook">
                            <a href="clone.html#">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li className="twitter">
                            <Link to="/blogs">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li className="google-plus">
                            <Link to="/blogs">
                              <i className="fa fa-google-plus"></i>
                            </Link>
                          </li>
                          <li className="pinterest">
                            <Link to="/blogs">
                              <i className="fa fa-pinterest"></i>
                            </Link>
                          </li>
                          <li className="linkedin">
                            <Link to="/blogs">
                              <i className=" fa fa-linkedin"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </article>
                    <article className="blog_content_detail">
                      <div className="post_content">
                        <h3 className="blog_title">
                          <Link to="/blogs">
                            The Year Cryptocurrencies Seized the{' '}
                          </Link>
                        </h3>
                        <ul className="list_none blog_meta">
                          <li>
                            <Link to="/blogs">
                              Posted By <span>admin</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="/blogs">
                              <i className="fas fa-clock"></i> April 14, 2018
                            </Link>
                          </li>
                          <li>
                            <Link to="blogs">
                              <i className="fas fa-comment-dots"></i> 8 Comments
                            </Link>
                          </li>
                        </ul>
                        <div className="blog-img mt-3 mb-3">
                          <img
                            alt="blog_largel_img2.jpg"
                            src="https://bestwebcreator.com/cryptocash/demo/assets/images/blog_large_img2.jpg"
                          />
                        </div>
                        <p>
                          The crypto markets continued to build on April's gains
                          this week, with alternative cryptocurrencies like
                          nano, VeChain and bytecoin leading the way. The
                          Enterprise Blockchain Gap A number of large
                          corporations, including Microsoft, IBM, Oracle, and
                          SAP, have started to take notice of, and invest in,
                          blockchain technology. Enterprise customers are
                          interested in the blockchain because it can help
                          reduce fraud, increase transparency, and provide
                          secure record keeping.{' '}
                        </p>
                        <p>
                          Blockchain technology has started showing up in such
                          diverse fields as cybersecurity, insurance, and supply
                          chain management. Less technically savvy corporations
                          are starting to dip their toes in the water, but
                          there's a huge gap between the desire to invest in
                          blockahin technology and developers with the skills to
                          implement it.
                        </p>
                      </div>
                      <div className="action_block">
                        <Link
                          to="/blogs"
                          className="btn btn-default btn-radius"
                        >
                          {' '}
                          Read More
                        </Link>
                        <ul className="social-share list_none">
                          <li className="facebook">
                            <Link to="/blogs">
                              <i className="fa fa-facebook"></i>
                            </Link>
                          </li>
                          <li className="twitter">
                            <Link to="/blogs">
                              <i className="fa fa-twitter"></i>
                            </Link>
                          </li>
                          <li className="google-plus">
                            <Link to="/blogs">
                              <i className="fa fa-google-plus"></i>
                            </Link>
                          </li>
                          <li className="pinterest">
                            <Link to="/blogs">
                              <i className="fa fa-pinterest"></i>
                            </Link>
                          </li>
                          <li className="linkedin">
                            <Link to="/blogs">
                              <i className="fa fa-linkedin"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </article>
                    <div className="row">
                      <div className="col-md-12">
                        <ul className="pagination">
                          <li>
                            <Link to="/blogs">Prev</Link>
                          </li>
                          <li className="active">
                            <Link to="/blogs">1</Link>
                          </li>
                          <li>
                            <Link to="/blogs">2</Link>
                          </li>
                          <li>
                            <Link to="/blogs">Next</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BLOG- */}
      <Footer />
    </>
  )
}

export default Blogs
