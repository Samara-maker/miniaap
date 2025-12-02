export async function fetchOrder() {
  // usa jsonplaceholder para simular pedidos
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  return res.json();
}

export async function fetchJoke() {
  // JokeAPI (programming or general). Usamos v2
  const res = await fetch("https://v2.jokeapi.dev/joke/Programming?type=single");
  return res.json();
}
