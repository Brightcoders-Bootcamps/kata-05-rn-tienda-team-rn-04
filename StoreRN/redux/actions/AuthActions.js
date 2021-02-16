import {
  SIGN_UP,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
} from './types';
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
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(signUpFailure('That email address is already in use!'));
        }

        if (error.code === 'auth/invalid-email') {
          dispatch(signUpFailure('That email address is invalid!'));
        }
      });
  };
};

function signIn() {
  return {
    type: SIGN_IN,
  };
}

function signInSuccess(user) {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
}

function signInFailure(error) {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
}

export const signInFunction = (email, password) => {
  return (dispatch) => {
    dispatch(signIn());
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        dispatch(signInSuccess(user.user));
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          dispatch(signInSuccess('That email address is already in use!'));
        }
        if (error.code === 'auth/invalid-email') {
          dispatch(signInFailure('That email address is invalid!'));
        }
      });
  };
};
