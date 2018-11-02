import _ from 'lodash';

class DogsService {

  async getDogs() {
    const url = 'https://dog.ceo/api/breed/hound/images/random/9';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Dogs's getDogs failed, HTTP status ${response.status}`);
    }
    
    const data = await response.json();
    const items = _.get(data, 'message');
    if (!items) {
      throw new Error(`Dogs's getDogs failed, items not returned`);
    }
    
    return _.assign({}, items);
  }

  
}

export default new DogsService();
