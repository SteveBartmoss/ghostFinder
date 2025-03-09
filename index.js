import fetch from 'node-fetch';
import readline from 'readline';

export async function buscarEnSearx(query) {
  
  const url = `https://api.duckduckgo.com/?q=${encodeURIComponent(query)}&format=json`;   

  try {

    const response = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    
    console.log(response)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error al realizar la búsqueda:", error.message);
    return [];
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\x1b[32mexpectJs\x1b[0m');
console.log('Powered by \x1b[31mSearxNG\x1b[0m');

rl.question('Buscar: ', async (query) => {
  const resultados = await buscarEnSearx(query);
  console.log(`\nResultados para "${query}":\n`);

  if (!resultados || resultados.length === 0) {
    console.log("No se encontraron resultados.");
  } else {
    resultados.forEach((resultado, index) => {
      console.log(`${index + 1}. ${resultado.title}`);
      console.log(`   URL: ${resultado.url}`);
      console.log("-----");
    });
  }

  rl.close();
});
