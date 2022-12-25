import axios from  'axios'

const BASE_URL =`https://youtube-v31.p.rapidapi.com/captions`
const options = {
    method: 'GET',
    url: BASE_URL,
    params: {part: 'snippet', videoId: 'M7FIvfx5J10'},
    headers: {
      'X-RapidAPI-Key': '2dd0d47052msh0fadbfce1e1fbb3p103786jsn5ecdde493d14',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });
