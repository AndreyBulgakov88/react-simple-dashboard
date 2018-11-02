import _ from 'lodash';
import * as types from './actionTypes';

export function createUser(userData) {
  return dispatch => {  
    dispatch({ type: types.CREATE_USER, userData });
  }
}

export function editUser(userData) {
  return dispatch => {  
    dispatch({ type: types.EDIT_USER, userData });
  }
}

export function selectUser(userId) {
  return dispatch => {  
    dispatch({ type: types.SELECT_USER, userId });
  }
}
