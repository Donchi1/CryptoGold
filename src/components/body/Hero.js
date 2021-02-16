import React from 'react'

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { isEmpty, isLoaded } from 'react-redux-firebase'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.secondary.main,
  },
  button: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '1.8rem',
    marginTop: theme.spacing(2),
  },
}))

function HeroComponent() {
  const classes = useStyles()
  const authState = useSelector((state) => state.firebase.auth)

  return (
    <div>
      <div
        className="text-light hero d-flex justify-content-center align-items-center"
        style={{
          textAlign: 'center',
        }}
      >
        <div>
          <h2 className="text-uppercase">
            <span
              style={{ fontSize: '3rem', fontFamily: 'serif' }}
              className={classes.text}
            >
              W
            </span>
            elcome to CryptoGold
          </h2>
          <h5>
            World set out golden platform for your investment. Make great wealth
            with the little you have with ease.
          </h5>
          {isLoaded(authState) && !isEmpty(authState) ? (
            <Link to="/user" style={{ textDecoration: 'none' }}>
              <Button
                size="large"
                className={classes.button}
                variant="contained"
                color="secondary"
              >
                dashboard
              </Button>
            </Link>
          ) : (
            <Link to="/signup" style={{ textDecoration: 'none' }}>
              <Button
                size="large"
                color="secondary"
                className={classes.button}
                variant="contained"
              >
                Get Started
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroComponent
