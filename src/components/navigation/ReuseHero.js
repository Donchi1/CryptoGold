import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.secondary.main,
  },
}))

function ReuseHero({ title, span, currentClass }) {
  const classes = useStyles()
  return (
    <div
      className={currentClass}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 className="text-center text-light pt-3 bold text-uppercase">
        {title} <span className={classes.text}>{span}</span>
      </h1>
    </div>
  )
}

export default ReuseHero
