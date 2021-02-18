import React, { useState } from 'react'

import { useFirebase } from 'react-redux-firebase'

import { updateProfileAction } from '../Auths/Action'
import { useSelector, useDispatch } from 'react-redux'
import UserNav from './UserNav'
import { Link } from 'react-router-dom'

function Profile() {
  const userProfile = useSelector((state) => state.firebase.profile)
  const profile = useSelector((state) => state.projectReducer)

  const firebase = useFirebase()
  const dispatch = useDispatch()

  const [userData, setuserData] = useState({
    firstname: '',
    lastname: '',
    password: '',
    email: '',

    phone: '',
    country: '',
    fileUpload: '',
    oldPassword: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (
      userData.firstname === '' &&
      userData.lastname === '' &&
      userData.phone === '' &&
      userData.country === '' &&
      userData.fileUpload === ''
    )
      return

    updateProfileAction(userData, firebase, dispatch, setuserData)
  }

  return (
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
                  Profile
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
                    <span>User Profile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* END SECTION BANNER */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="authorize_box">
                <div className="title_default_dark title_border text-center">
                  <h4
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.2s"
                  >
                    Welcome
                  </h4>
                  <p
                    className="animation"
                    data-animation="fadeInUp"
                    data-animation-delay="0.4s"
                  >
                    Update your profile
                  </p>
                </div>
                <h6 className="text-danger">
                  {profile.uploadError && profile.uploadError}
                </h6>

                <h6 className="text-danger">
                  {profile.uploadSuccess ? profile.uploadSuccess : ''}
                </h6>
                <div className="field_form authorize_form">
                  <form onSubmit={handleSubmit}>
                    <div
                      className="form-group text-center col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <div className="text-center">
                        <label
                          htmlFor="img"
                          style={{ fontSize: '1.4rem', cursor: 'pointer' }}
                        >
                          <img
                            src={
                              userProfile.image ||
                              require('../../assets/avater.png')
                            }
                            alt="profileimg"
                            width="150"
                            height="150"
                            className="rounded-circle"
                          />
                        </label>
                      </div>
                      <input
                        type="file"
                        name="img"
                        id="img"
                        title="Upload picture"
                        size="sm"
                        placeholder=" update profile "
                        style={{
                          border: 'none',
                          outline: 'none',
                          visibility: 'hidden',
                        }}
                        onChange={(e) =>
                          setuserData({
                            ...userData,
                            fileUpload: e.target.files[0],
                          })
                        }
                      />
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        name="firstname"
                        id="name"
                        size="sm"
                        defaultValue={userProfile.firstname}
                        placeholder="Enter firstname "
                        className="form-control"
                        min="2"
                        autoCorrect="true"
                        onChange={(e) =>
                          setuserData({
                            ...userData,
                            firstname: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        size="sm"
                        placeholder="Enter lastname "
                        min="2"
                        className="form-control"
                        autoCorrect="true"
                        defaultValue={userProfile.lastname}
                        onChange={(e) =>
                          setuserData({ ...userData, lastname: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        size="sm"
                        className="form-control"
                        placeholder="Enter Email "
                        defaultValue={userProfile.lastname}
                        onChange={(e) =>
                          setuserData({ ...userData, email: e.target.value })
                        }
                      />
                    </div>
                    <div className="form-group col-md-12 animation">
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        size="sm"
                        minLength="2"
                        defaultValue={userProfile.phone}
                        placeholder="Enter phone"
                        autoCorrect="true"
                        className="form-control"
                        autoComplete="true"
                        onChange={(e) => {
                          const data = e.target.value
                          setuserData({ ...userData, phone: data.trim() })
                        }}
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <input
                        type="text"
                        name="country"
                        id="country"
                        size="sm"
                        minLength="2"
                        defaultValue={userProfile.country}
                        placeholder="Enter country"
                        autoCorrect="true"
                        className="form-control"
                        autoComplete="true"
                        onChange={(e) => {
                          const data = e.target.value
                          setuserData({ ...userData, country: data.trim() })
                        }}
                        required
                      />
                    </div>
                    <h4 className="text-center ">CHANGE PASSWORD</h4>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <input
                        type="password"
                        name="password"
                        id="password"
                        size="sm"
                        min="2"
                        defaultValue="******"
                        className="form-control"
                        security="true"
                        autoComplete="true"
                        placeholder="Enter old password "
                        onChange={(e) => {
                          const data = e.target.value
                          setuserData({ ...userData, oldPassword: data.trim() })
                        }}
                      />
                    </div>
                    <div
                      className="form-group col-md-12 animation"
                      data-animation="fadeInUp"
                      data-animation-delay="0.6s"
                    >
                      <input
                        type="password"
                        name="password"
                        id="password"
                        size="sm"
                        title="password must be 6 characters or more and contain at least 1 lower case letter"
                        min="2"
                        className="form-control"
                        defaultValue="******"
                        security="true"
                        autoComplete="true"
                        placeholder="Enter new password "
                        onChange={(e) => {
                          const data = e.target.value
                          setuserData({ ...userData, password: data.trim() })
                        }}
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
                        Save
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="divider small_divider"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="bottom_footer">
        <div className="container">
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
                  <Link to="/user">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/user">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
