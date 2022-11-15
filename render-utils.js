export function renderPokemonCard(pokemon) {
    const div = document.createElement('div');
    const a = document.createElement('a');
    const img = document.createElement('img');
    const p = document.createElement('p');

    div.classList.add('pokemon-card');

    p.textContent = pokemon.name;
    img.src = `./assets/${pokemon.type}.jpeg`;
    a.href = `./detail/?id=${pokemon.id}`; // link to the pokemon's detail page here

    div.append(p, img);

    a.append(div);

    return a;
}

export function renderPokemonDetail(pokemon) {
    const div = document.createElement('div');
    const img = document.createElement('img');
    const descriptionEl = document.createElement('p');
    const nameEl = document.createElement('p');
    // const ageEl = document.createElement('p');
    const typeEl = document.createElement('p');
    // const ageAndtypeEl = document.createElement('div');

    div.classList.add('pokemon-detail');

    nameEl.textContent = pokemon.name;
    nameEl.classList.add('name');

    descriptionEl.textContent = pokemon.description;
    descriptionEl.classList.add('description');

    typeEl.textContent = pokemon.type;
    typeEl.classList.add('type');

    typeEl.append(typeEl);

    img.src = `../assets/${pokemon.type}.jpeg`;

    div.append(nameEl, img, typeEl, descriptionEl);

    return div;
}
