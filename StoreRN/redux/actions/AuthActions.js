import {SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS} from './types';
import auth from '@react-native-firebase/auth';
function signUp() {
  return {
    type: SIGN_UP,
  };
}

function signUpSuccess(user) {
  return {
    type: SIGN_UP_SUCCESS,
    payload: user,
  };
}

function signUpFailure(error) {
  return {
    type: SIGN_UP_FAILURE,
    payload: error,
  };
}

export const signUpFunction = (email, password) => {
  return (dispatch) => {
    dispatch(signUp());
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(signUpSuccess(user.user));
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(signUpFailure('That email address is already in use!'));
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          dispatch(signUpFailure('That email address is invalid!'));
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
};
