import axios from 'axios';

const API_KEY = '8dcc6c3444f0b089c2f82be63d0dc0e1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {
//   orientation: 'landscape',
//   per_page: 15,
// };

export const makeQuery = async () => {
  const response = await axios.get(`/trending/get-trending`);

  return response.data;
};
