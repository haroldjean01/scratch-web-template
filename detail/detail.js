import { getPokemon } from '../fetch-utils.js';
import { renderPokemonDetail } from '../render-utils.js';

const pokemonDetailContainer = document.getElementById('pokemon-detail-container');

// on load
window.addEventListener('load', async () => {
    // get the id from URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    // use the id to fetch the pokemon
    const pokemon = await getPokemon(id);
    console.log(pokemon);
    // render and append this pokemon's details to the container
    const pokemonDetail = renderPokemonDetail(pokemon);
    pokemonDetailContainer.append(pokemonDetail);
});
