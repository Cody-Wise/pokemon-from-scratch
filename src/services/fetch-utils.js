export default async function getPokemon(query) {
  const rawResponse = await fetch(`/.netlify/functions/Pokemon?pokemon=${query}`);
  const data = await rawResponse.json();

  return data;
}
