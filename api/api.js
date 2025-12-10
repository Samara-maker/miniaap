export async function fetchJoke() {
  const res = await fetch('https://api.chucknorris.io/jokes/random');

  if (!res.ok) {
    throw new Error('Erro na API');
  }

  const data = await res.json();

  // tradução simples (didática)
  return `💡 Piada recebida da API:\n${data.value}`;
}
