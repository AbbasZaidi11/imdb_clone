import axios from "axios";
async function categoryMovies(API_URL) {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.log(error.message);
    return error.response.data;
  }
}
export default categoryMovies;
