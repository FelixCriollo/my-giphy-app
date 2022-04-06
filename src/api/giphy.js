const KEY = "p88qXdPVnu6HNwUq0CxwKIdxlYDbC5se"

// Busca gifs de la API de Giphy, necesita una parametro
// aunque por defecto esta en perro, no se si esto siquiera funciona xd
export async function searchGiphys(query = "perro") {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`)
  const result = await res.json()
  
  return result
} 