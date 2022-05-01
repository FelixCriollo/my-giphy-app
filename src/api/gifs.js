import axios from "axios"
const GIPHY_KEY = "X2xqzcYaF6cYdZKVDpZJK5fw9qgfGWGU"

const api = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs"
})

// Busca gifs segun una consulta
export async function fetchGifs(query, limit = 20) {
  try {
    const response = await api.get(`/search?api_key=${GIPHY_KEY}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`)    
    return response.data
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
}

// Busca los gifs mas populares
export async function fetchTrendingGifs() {
  try {
    const response = await api.get(`/trending?api_key=${GIPHY_KEY}&limit=20&rating=g`)  
    return response.data
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  }
}
