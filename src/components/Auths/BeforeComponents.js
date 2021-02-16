import React from 'react'
import { isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

function BeforeComponents({ children }) {
  const authState = useSelector((state) => state.firebase.auth)

  if (isLoaded(authState)) {
    return <>{children}</>
  } else {
    return null
  }
}

export default BeforeComponents
