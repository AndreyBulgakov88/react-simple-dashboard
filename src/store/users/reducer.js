import _ from 'lodash';
import * as types from './actionTypes';

const initialState = {
  userlist: [],
  activeUserId: undefined
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_USER:
      return {...state, userlist: [...state.userlist, action.userData]}
    case types.SELECT_USER:
      return { ...state, activeUserId: action.userId};
    
    case types.EDIT_USER:
      return {...state, userlist: state.userlist.map(user => 
        user.id === action.userData.id ? { ...user, name: action.userData.name, about: action.userData.about } : user)}
    default:
      return state;
  }
}

// selectors

export function getUsers(state) { 
  return state.users.userlist;
}

export function getActiveUserId(state) { 
  return state.users.activeUserId;
}

export function getActiveUser(state) { 
  return state.users.userlist[state.users.activeUserId];
}
