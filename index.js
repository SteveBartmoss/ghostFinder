import fetch from 'node-fetch'
import readline from 'readline'

export async function buscarEnSearx(consulta){
  const  url = `https://searx.be/search?q=${encodeURIComponent(consulta)}&format=json`

  try{

    const response = await fetch(url)
    if(!response.ok){
      throw new Error(`Error: ${response.status}`)
    }
    const data = await response.json()
    return data.results
  }catch(error){
    console.error("Error al realizar la búsqueda: ",error.message)
  }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\x1b[32mexpectJs\x1b[0m')
console.log('power by \x1b[31msearx\x1b[0m')

rl.question('Buscar: ',(query)=>{
    buscarEnSearx(query).then(resultados => {
      console.log(`Resultados para "${query}":`)

      if(!resultados || resultados.length === 0){
        console.log("No se contraron  resultados")
        return
      }

      resultados.forEach((resultado,index)=>{
        console.log(`${index + 1}. ${resultado.title}`)
        console.log(` URL: ${resultado.url}`)
        console.log("-----")
      })
    }).finally(()=>{
      rl.close()
    })

})
