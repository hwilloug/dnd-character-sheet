import Api from '@/services/Api'

/*
	API for the info database
*/

// Parse kwargs into a query statement for an http request
function parseKwargs( kwargs ) {
  let queries = [];
  for (let kwarg in kwargs) {
    queries.push(`${kwarg}=${kwargs[kwarg]}`);
  }
  return "?" + queries.join('&')
}

export default {
  getInfoDocuments( info, ...kwargs ) {
    let url = `/info/${info}`;
    if ( kwargs ) {
      url += parseKwargs(kwargs);
    }
    print(url)
    return Api().get(url);
  }
}
