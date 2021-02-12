import {SIGN_UP, SIGN_UP_FAILURE, SIGN_UP_SUCCESS} from '../actions/types';
const initialState = {
  user: null,
  message: ''
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
    default:
      return state;
  }
}

export default AuthReducer;