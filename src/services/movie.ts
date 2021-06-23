import axios from 'axios';

// Just for testing; 
// Better approach is to retrieved the constants from the environment variables
const OMDB_API = 'http://www.omdbapi.com/?a';
const OMDB_API_KEY = 'omdb_apk_key';

export const fetchMovie = (search: string) => {
  return axios.get(OMDB_API, {
    params: {
      apikey: OMDB_API_KEY,
      t: search
    }
  });
}
