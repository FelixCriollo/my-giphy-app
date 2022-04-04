const KEY = "p88qXdPVnu6HNwUq0CxwKIdxlYDbC5se"

export async function searchGiphys(query) {
  const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`)
  const result = await res.json()
  
  return result
} 