import axios from "axios"

export default async function getMovieById(id) {
  const res = await axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
  const data = await res.data
  return data
}
