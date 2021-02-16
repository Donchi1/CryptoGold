import { CircularProgress } from '@material-ui/core'
import React from 'react'

function Loading() {
  return (
    <div className="loader v_royal_blue">
      <CircularProgress variant="indeterminate" color="secondary" size={90} />
    </div>
  )
}

export default Loading
