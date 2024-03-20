import axios from 'axios';

const BASE_URL="https://youtube-v31.p.rapidapi.com";

const options = {
  url:BASE_URL,
  params: {
    part: 'snippet',
    videoId: 'M7FIvfx5J10'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
// '7f439207e0msh64be164689ae6b7p1f5811jsn7333ee63bd11'

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

export const fetchFromAPI=async(url)=>{
  const {data}=await axios.get(`${BASE_URL}/${url}`,options)
  return data;
}

