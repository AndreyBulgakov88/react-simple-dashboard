import * as types from './actionTypes';

export function loginUser() {
  return dispatch => {  
    localStorage.setItem('token', 'fake-token');
    dispatch({ type: types.AUTH_USER });
  }
}

export function logoutUser() {
  localStorage.clear();

  return {
    type: types.UNAUTH_USER
  }
}