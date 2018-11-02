import _ from 'lodash';
import * as types from './actionTypes';

const initialState = {
  apis: [{id: 'dogs', name: 'Dog API', description: 'Dogs photos database. Original dataset taken from the the Stanford Dogs Dataset. Click on \'Details\' button to watch 9 random hound dogs photos!'},
         {id: 'spacex', name: 'Space X API', description: 'Open Source REST API for rocket, core, capsule, pad, and launch data. Click on \'Details\' button to watch latest rocket launch photos!'},
         {id: 'anime', name: 'Anime API', description: 'Big anime database. Click on \'Details\' button to view manga\'s \'Monster\' (episode 1) 9 random characters!'}],
  apiItems: undefined,
  selectedApiId: undefined
};

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_API_ITEMS:
      return { ...state, apiItems: action.apiItems};
    case types.SELECT_API:
      return { ...state, selectedApiId: action.apiId}
    case types.SHUFFLE_APIS:
      return { ...state, apis: _.shuffle(state.apis)}      
    default:
      return state;
  }
}

// selectors

export function getApis(state) {
  return state.dashboard.apis;
}

export function getApiById(state, apiId) { 
  return _.find(state.dashboard.apis, { 'id': apiId}); 
}

export function getApiItems(state) {
  return state.dashboard.apiItems;
}