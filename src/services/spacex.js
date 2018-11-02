import _ from 'lodash';

class spacexService {

  async getSpacexImages() {
    const url = 'https://api.spacexdata.com/v3/launches/latest';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Space X's getSpacexImages failed, HTTP status ${response.status}`);
    }
    
    const data = await response.json();
    const items = _.get(data, 'links.flickr_images');
    if (!items) {
      throw new Error(`Space X's getSpacexImages failed, items not returned`);
    }
    
    return _.assign({}, items);
  }

  
}

export default new spacexService();
