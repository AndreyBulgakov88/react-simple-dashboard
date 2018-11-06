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
      const userdata = action.userData;
      return {...state,
              userlist: state.userlist.map(user => 
                  user.id === userdata.id 
                  ? 
                  { ...user, name: userdata.name, about: userdata.about } 
                  : 
                  user)}

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

export function getNextUserId(state) { 
  if (state.users.userlist.length === 0) {
    return 0;
  }

  return _.max(_.map(state.users.userlist, 'id')) + 1;
}
