import * as types from './actionTypes';

export function loginUser(username, password) {
  return dispatch => {  
    localStorage.setItem('token', username + '_' + password);
    dispatch({ type: types.AUTH_USER });
  }
}

export function logoutUser() {
  localStorage.clear();

  return {
    type: types.UNAUTH_USER
  }
}