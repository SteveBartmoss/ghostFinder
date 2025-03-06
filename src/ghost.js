import fetch from 'node-fetch'

export async function daemonSearch(query){

  const url = `htpps://searxng.org/search?=${encodeURIComponent(query)}&format=json`

  try{

    const response = await fetch(url)
    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    return data.results
    
  }catch(error){

    console.error("Error al realizar la busqueda: ",error.message)
    
  }
}
