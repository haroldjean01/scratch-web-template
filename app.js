/* Imports */
import { getPokemons } from './fetch-utils.js';
import { renderPokemonCard } from './render-utils.js';
/* Get DOM Elements */
const pokemonListContainer = document.getElementById('pokemon-list-container');
let pokemons = [];
/* State */

/* Events */
window.addEventListener('load', async () => {
    const response = await getPokemons();
    pokemons = response.data;
    displayPokemons();
});

// fetch all pokemons
getPokemons();

// Render and
