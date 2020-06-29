let render = (data) => {
    console.log(data);
    const pokemon = document.createElement('img');
    pokemon.setAttribute('src', data.sprites.front_default);
    document.body.append(pokemon);
}

export default render