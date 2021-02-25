import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './components/navigation/Home'
import Login from './components/Auths/Login'
import SignUp from './components/Auths/SignUp'
import Pricing from './components/navigation/Pricing'
import contacts from './components/navigation/contacts'

import About from './components/navigation/About'
import './components/CSS/App.css'

import AdminPage from './components/navigation/AdminPage'
import Empty from './components/navigation/Empty'
import User from './components/user/User'
import Profile from './components/user/Profile'

import { isLoaded, isEmpty } from 'react-redux-firebase'

import ForgetPassword from './components/navigation/ForgetPassword'

import Teams from './components/body/Teams'
import FAQ from './components/navigation/FAQ'
import Blogs from './components/navigation/Blogs'
import Service from './components/body/Service'

import Payments from './components/user/Payments'
import Withdrawals from './components/user/Withdrawals'

import { useSelector } from 'react-redux'

function App() {
  const authState = useSelector((state) => state.firebase.auth)
  const canWithdraw = useSelector(
    (state) => state.firebase.profile.disbleWithdrawal,
  )

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/contacts" component={contacts} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/passReset" component={ForgetPassword} />
        <Route exact path="/teams" component={Teams} />
        <Route exact path="/faq" component={FAQ} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/adm" component={AdminPage} />
        <Route
          exact
          path="/user"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <User />
            } else {
              return <Redirect to="/login" />
            }
          }}
        />

        <Route
          exact
          path="/profile"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <Profile />
            } else {
              return <Redirect to="/login" />
            }
          }}
        />
        <Route
          exact
          path="/payments"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState)) {
              return <Payments />
            } else {
              return <Redirect to="/login" />
            }
          }}
        />
        <Route
          exact
          path="/withdrawals"
          render={() => {
            if (isLoaded(authState) && !isEmpty(authState) && canWithdraw) {
              return <Withdrawals />
            } else if (isLoaded(authState) && isEmpty(authState)) {
              return <Redirect to="/login" />
            } else {
              return <Redirect to="/user" />
            }
          }}
        />
        <Route component={Empty} />
      </Switch>
    </Router>
  )
}

export default App
