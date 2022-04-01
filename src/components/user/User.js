import React from 'react'

import { CircularProgressbarWithChildren } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Card } from 'react-bootstrap'
import * as Icons from 'react-bootstrap-icons'

import { Link } from 'react-router-dom'

import Chart from './Chart'

import { useSelector } from 'react-redux'
import UserNav from './UserNav'
import UserPlans from './UserPlans'
import MarketPrice from './MarketPrice'

function User() {
  const userProfile = useSelector((state) => state.firebase.profile)

  const percentage = userProfile.totalBalance

  return (
    <div className="v_royal_blue" data-spy="scroll" data-offset="110">
      <UserNav />

      <section id="home_section" className="section_banner gradient_box2 pb-0">
        <div className="divider small_divider"></div>
        <div className="row text-center mb-3 d-flex justify-content-around mx-2">
          <div className=" text-light  " style={{ width: '17rem' }}>
            <CircularProgressbarWithChildren
              strokeWidth={3}
              value={percentage}
              styles={{
                path: {
                  stroke: '#f87d18',
                  strokeLinecap: 'square',
                },
              }}
            >
              <div className="text-primary">
                <h3 className="btn-default userTextColor">Total Balance</h3>
                <h1>
                  <strong className="text-light">
                    ${percentage ? percentage : '0000'}
                  </strong>
                </h1>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className=" text-light mt-3 " style={{ width: '17rem' }}>
            <CircularProgressbarWithChildren
              value={userProfile.initialDeposite}
              strokeWidth={3}
              styles={{
                path: {
                  stroke: '#f87d18',
                  strokeLinecap: 'square',
                },
              }}
            >
              <div className="text-primary">
                <h3 className="btn-default userTextColor">Initial Deposit</h3>
                <h1>
                  <strong className="text-light">
                    $
                    {userProfile.initialDeposite
                      ? userProfile.initialDeposite
                      : '0000'}
                  </strong>
                </h1>
              </div>
            </CircularProgressbarWithChildren>
          </div>
          <div className=" text-light mt-3 " style={{ width: '17rem' }}>
            <div>
              <CircularProgressbarWithChildren
                value={userProfile.bonus}
                strokeWidth={3}
                styles={{
                  path: {
                    stroke: '#f87d18',
                    strokeLinecap: 'square',
                  },
                }}
              >
                <div>
                  <h3 className="btn-default userTextColor">Bonus Balance</h3>
                  <h1>
                    <strong className="text-light">
                      ${userProfile.bonus ? userProfile.bonus : '0000'}
                    </strong>
                  </h1>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </div>
        </div>
        <div
          className=" text-center text-uppercase mx-auto mt-4"
          style={{ width: '50%', fontStyle: 'italic' }}
        >
          <h2 className="text-light">Transaction Update</h2>
        </div>
        <div className="row mb-3 container-fluid  mx-4 d-flex justify-content-around mt-4">
          <Card style={{ width: '18rem' }} className=" text-light bg-dark mt-3">
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Envelope size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">
                  $
                  {userProfile.totalBalance
                    ? Number(userProfile.totalBalance) +
                      Number(userProfile.bonus)
                    : '0000'}
                </h2>
                <p className="text-light">Total income</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex justify-centent-center align-items-center btn-default">
              <Icons.Calendar2Date className="mr-3" />
              <Card.Text className="text-light">Today so far</Card.Text>
            </Card.Footer>
          </Card>
          <Card style={{ width: '18rem' }} className=" text-light mt-3 bg-dark">
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Wallet size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">
                  $
                  {userProfile.totalBalance ? userProfile.totalBalance : '0000'}
                </h2>
                <p className="text-light">Account balance</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex justify-centent-center align-items-center btn-default ">
              <Icons.Calendar2Date className="mr-3" />

              <Card.Text className="text-light"> This month so far</Card.Text>
            </Card.Footer>
          </Card>
          <Card style={{ width: '18rem' }} className=" text-light mt-3 bg-dark">
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Bag size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">95%</h2>
                <p className="text-light">Rate of Return</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex justify-centent-center align-items-center btn-default ">
              <Icons.Calendar2Date className="mr-3" />
              <Card.Text className="text-light">This month so far</Card.Text>
            </Card.Footer>
          </Card>
          <Card style={{ width: '18rem' }} className=" text-light mt-3 bg-dark">
            <div className="d-flex justify-content-around align-items-center">
              <Icons.Calendar size={80} className="btn-default userTextColor" />
              <div>
                <h2 className="btn-default userTextColor">
                  ${userProfile.bonus ? Number(userProfile.bonus) + 2 : '0000'}
                </h2>
                <p className="text-light">Bonus rate</p>
              </div>
            </div>
            <Chart />
            <Card.Footer className="d-flex justify-centent-center align-items-center btn-default">
              <Icons.Calendar2Date className="mr-3" />
              <Card.Text className="text-light">This month </Card.Text>
            </Card.Footer>
          </Card>
        </div>
        <div className="divider small_divider"></div>
        <MarketPrice />
        <div className="divider small_divider"></div>
        <UserPlans />

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
      </section>
    </div>
  )
}

export default User
