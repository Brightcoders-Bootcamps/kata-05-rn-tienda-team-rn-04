import {
  SIGN_UP,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_IN,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  LOG_OUT,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
} from '../actions/types';
const initialState = {
  user: null,
  message: '',
};
function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP:
      return state;
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_UP_FAILURE:
      return {
        user: null,
        message: action.payload,
      };
    case SIGN_IN:
      return state;
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case SIGN_IN_FAILURE:
      return {
        user: null,
        message: action.payload,
      };
    case LOG_OUT:
      return state;
    case LOG_OUT_SUCCESS:
      return {
        user: null,
        message: '',
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
}

export default AuthReducer;
