import * as types from './actionTypes';

export default function reduce(state = {}, action) {
  switch(action.type) {
    case types.AUTH_USER:
      return { ...state, authenticated: true };
    case types.UNAUTH_USER:
      return { ...state, authenticated: false };
    default:
      return state;  
  }
}