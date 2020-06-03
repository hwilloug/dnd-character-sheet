import Api from '@/services/Api'

/*
	API for the recipes database
*/

export default {
  getCharacterSheet( characterName ) {
    let url = `/character-sheet?characterName=${characterName}`;
    return Api().get(url);
  },
  updateCharacterSheet( characterName ) {
    let url = `/character-sheet/${characterName}`;
    return Api().put(url);
  }
}
