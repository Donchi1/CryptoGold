export const registerAction = (
  data,
  firebase,
  dispatch,
  checkAuth,
  setuserData,
  handleRoute,
) => {
  const email = data.email
  const password = data.password

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      firebase
        .firestore()
        .collection('users')
        .doc(user.user.uid)
        .set(
          {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phone: data.phone,
            country: data.country,
            uid: user.user.uid,
            initial: data.firstname[0] + data.lastname[0],
            totalBalance: '0000',
            initialDeposite: '0000',
            bonus: '20.00',
            disbleWithdrawal: true,
          },
          { merge: true },
        )
    })
    .then(() => {
      setuserData({
        ...data,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        country: '',
      })
      dispatch({ type: 'SIGNUP_SUCCESS' })
      handleRoute()
    })
    .catch((err) => {
      setuserData({
        ...data,
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        phone: '',
        country: '',
      })
      dispatch({ type: 'SIGNUP_ERROR', error: err })
      handleRoute()
      checkAuth()
    })
}

export const logginAction = (
  data,
  firebase,
  dispatch,
  checkAuth,
  setuserData,
  handleUserRoute,
) => {
  const email = data.email
  const password = data.password

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      setuserData({ ...data, email: '', password: '' })
      dispatch({ type: 'LOGIN_SUCCESS' })
      handleUserRoute()
    })
    .catch((err) => {
      setuserData({ ...data, email: '', password: '' })
      dispatch({ type: 'LOGIN_ERROR', error: err })
      checkAuth()
    })
}

export const forgetAction = (
  dispatch,
  firebase,
  creds,
  setSuccessSnacks,
  setErrorSnacks,
) => {
  firebase
    .auth()
    .sendPasswordResetEmail(creds)
    .then(() => {
      dispatch({ type: 'PASSRESET_SUCCESS' })
      setSuccessSnacks(true)
    })
    .catch(() => {
      dispatch({ type: 'PASSRESET_ERROR' })
      setErrorSnacks(true)
    })
}

export const updateProfileAction = (profile, firebase, dispatch) => {
  const uid = firebase.auth().currentUser.uid
  const userInitial = profile.firstname[0] + profile.lastname[0]
  if (
    profile.firstname ||
    profile.lastname ||
    profile.phone ||
    profile.country ||
    profile.state
  ) {
    firebase
      .firestore()
      .collection('users')
      .doc(uid)
      .update({
        firstname: profile.firstname,
        lastname: profile.lastname,
        country: profile.country,
        phone: profile.phone,
        state: profile.state,
        initial: userInitial.toString(),
      })
      .then(() => dispatch({ type: 'UPLOAD_SUCCESS' }))
      .catch(() => dispatch({ type: 'UPLOAD_ERROR' }))
  }
  if (profile.password) {
    firebase.auth().currentUser.updatePassword(profile.password)
  }
  if (profile.fileUpload) {
    firebase
      .storage()
      .ref('users')
      .child(uid)
      .put(profile.fileUpload)
      .then(() =>
        firebase
          .storage()
          .ref(`users/${uid}`)
          .getDownloadURL()
          .then((imgUrl) =>
            firebase
              .firestore()
              .collection('users')
              .doc(uid)
              .update({ image: imgUrl }),
          ),
      )
  }
}

export const withdrawalAction = (
  profile,
  withdrawalData,
  dispatch,
  firebase,
  dataCheck,
  handleLoading,
  setWithdrawalData,
) => {
  const uid = firebase.auth().currentUser.uid

  const firestore = firebase.firestore()
  firestore
    .collection('withdrawals')
    .doc(uid)

    .set({
      withdrawalAmount: withdrawalData.amount,
      wallet: withdrawalData.wallet,
      date: new Date(),
      currentUserfirstname: profile.firstname,
      currentUserlastname: profile.lastname,
      withdrawerName: withdrawalData.name,
      number: withdrawalData.phone,
      AccountNumber: withdrawalData.AccountNumber,
      uid: uid,
    })
    .then(() => {
      dispatch({ type: 'WITHDRAWAL_ERROR' })
      handleLoading()
      dataCheck()
      setWithdrawalData({
        ...withdrawalData,
        name: '',
        amount: '',
        wallet: '',
        phone: '',
        accountNumber: '',
      })
    })
    .catch(() => {
      dispatch({ type: 'WITHDRAWAL_ERROR' })
      dataCheck()
      handleLoading()
      setWithdrawalData({
        ...withdrawalData,
        name: '',
        amount: '',
        wallet: '',
        phone: '',
        accountNumber: '',
      })
    })
}

export const paymentAction = (
  amount,
  profile,
  file,
  firebase,
  dispatch,
  checkData,
  handleLoading,
) => {
  const uid = firebase.auth().currentUser.uid
  const firestore = firebase.firestore()
  firestore
    .collection('payments')
    .doc(uid)

    .set(
      {
        paymentAmount: amount,
        date: new Date(),
        firstname: profile.firstname,
        lastname: profile.lastname,
        uid: uid,
      },
      { merge: true },
    )
    .then(() => {
      firebase
        .storage()
        .ref('paymentProves')
        .child(uid)
        .put(file)
        .then(() => {
          firebase
            .storage()
            .ref(`paymentProves/${uid}`)
            .getDownloadURL()
            .then((url) => {
              firestore
                .collection('payments')
                .doc(uid)
                .update({ paymentProve: url })
                .then(() => {
                  dispatch({ type: 'PAYMENT_SUCCESS' })
                  checkData()
                  handleLoading()
                })
            })
        })
    })
    .catch(() => dispatch({ type: 'PAYMENT_SUCCESS' }))
}

export const LogoutAction = (firebase, dispatch, handleLogoutRoute) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      handleLogoutRoute()
      dispatch({ type: 'LOGOUT' })
    })
}

export const newsLetterAction = (email, firebase, dispatch, setinput) => {
  firebase
    .firestore()
    .collection('newsletters')
    .add({
      newsLetter: email,
      id: Date.now().toString(),
    })
    .then(() => {
      dispatch({ type: 'SUBCRIPTION_SUCCESSFUL' })
      setinput('')
    })
    .catch(() => {
      dispatch({ type: 'SUBCRIPTION_ERROR' })
      setinput('')
    })
}

//const googleSignimAction = () => {
//  const provider = new firebase.auth().GoogleAuthProvider()
//}

export const contactAction = (
  contactInfo,
  firebase,
  dispatch,
  setContactInfo,
  setopenSnack,
) => {
  firebase
    .firestore()
    .collection('contacts')
    .add({
      contactName: contactInfo.name,
      contactEmail: contactInfo.email,
      message: contactInfo.message,
      subject: contactInfo.subject,
      id: Date.now().toString(),
    })
    .then(() => {
      dispatch({ type: 'MESSAGE_SUCCESS' })
      setContactInfo({
        ...contactInfo,
        name: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
      })
      setopenSnack(true)
    })
    .catch(() => {
      dispatch({ type: 'MESSAGE_ERROR' })
      setContactInfo({
        ...contactInfo,
        name: '',
        email: '',
        message: '',
        subject: '',
        phone: '',
      })
      setopenSnack(true)
    })
}
