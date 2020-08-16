import Api from '@/services/Api'

/*
	API for the recipes database
*/

export default {
  getCharacterSheet( characterName ) {
    let url = `/characters/${characterName}`;
    return Api().get(url);
  },
  updateCharacterSheet( characterName, updatedSheet ) {
    let url = `/characters/${characterName}`;
    return Api().put(url, updatedSheet);
  }
}
