import _ from 'lodash';
import * as types from './actionTypes';
import dogsService from '../../services/dogs';
import spacexService from '../../services/spacex';
import animeService from '../../services/anime';


export function fetchApiItems(selectedApiId) {
  return async(dispatch, getState) => {
    try {
      if (selectedApiId === 'dogs') {
        const imageList = await dogsService.getDogs();
        dispatch({ type: types.FETCH_API_ITEMS, apiItems: imageList });
      } else if (selectedApiId === 'spacex') {
        const imageList = await spacexService.getSpacexImages();
        dispatch({ type: types.FETCH_API_ITEMS, apiItems: imageList });
      } else if (selectedApiId === 'anime') {
        const imageList = await animeService.getRandomMonsterMangaCharacterImages();
        dispatch({ type: types.FETCH_API_ITEMS, apiItems: imageList });
      }
    } catch (error) {
      console.error(error);
    }
  };
}

export function clearApiItems() {
  return dispatch => {  
    dispatch({ type: types.CLEAR_API_ITEMS });
  }
}

export function selectApi(apiId) {
  return dispatch => {  
    dispatch({ type: types.SELECT_API, apiId });
  }
}

export function shuffleApis() {
  return dispatch => {  
    dispatch({ type: types.SHUFFLE_APIS });
  }
}
