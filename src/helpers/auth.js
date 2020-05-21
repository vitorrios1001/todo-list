import firebase from 'firebase';

export const getUserLogged = () => {
  try {
    const userLogged = JSON.parse(localStorage.getItem('user'))
    
    return userLogged
  } catch (error) {
    return null
  }
}

export const isAuthenticated = () => {
  let u = JSON.parse(localStorage.getItem('user'))

  // firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {

  //         const userLogged = {
  //             id: user.uid,
  //             fullName: user.displayName,
  //             firtName: user.displayName.split(' ')[0],
  //             email: user.email,
  //             avatar: user.photoURL,
  //         }
  //         console.log(userLogged)
  //         localStorage.setItem('user', JSON.stringify(userLogged))
          
  //     } else {            
  //         localStorage.removeItem('user')
  //         window.location.assign('/login')
  //     }
  // });

  return u !== null;
}