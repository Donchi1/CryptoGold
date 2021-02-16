import React from 'react'

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const MobileInput = ({ user, changeUser, setNumError, setErrorMessage }) => {
  const validate = (value, country) => {
    if (value.match(/12345/)) {
      setErrorMessage(`invalid value ${value}, ${country.name}`)
      setNumError(true)
      return
    } else if (value.match(/1234/)) {
      setErrorMessage(`invalid value ${value}, ${country.name}`)
      setNumError(true)
      return
    } else {
      return true
    }
  }

  return (
    <PhoneInput
      isValid={validate}
      inputProps={{ name: 'phone', required: true }}
      value={user.phone}
      containerClass="numberinfo"
      inputClass="input-number"
      disableInitialCountryGuess={false}
      showDropdown={true}
      enableClickOutside={true}
      onChange={(value) => changeUser({ ...user, phone: value })}
      placeholder="Enter phone number"
      enableAreaCodes={true}
    />
  )
}

export default MobileInput
