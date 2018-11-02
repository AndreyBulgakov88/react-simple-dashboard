import _ from 'lodash';

class animeService {

  async getRandomMonsterMangaCharacterImages() {
    const url = 'https://api.jikan.moe/manga/1/characters';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Anime's getRandomMonsterMangaCharacterImages failed, HTTP status ${response.status}`);
    }
    
    const data = await response.json();
    const items = _.slice(_.shuffle(_.map(_.get(data, 'character'), el => el.image_url)), 0, 9);
    console.log(items);
    if (!items) {
      throw new Error(`Anime's getRandomMonsterMangaCharacterImages failed, items not returned`);
    }
    
    return _.assign({}, items);
  }

  
}

export default new animeService();
