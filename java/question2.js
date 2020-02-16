


function createGamesResponse(response) {
    return response.json();
}
function createGames(json) {

    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".results");

    let html = "";

    results.forEach(function(results) {
        console.log(results.name);
        html += `<div class="game">
        <h2>${results.name}</h2>
        <img src="${results.background_image}" alt="${results.name}">
    </div>`;
    /* I wasn't sure for 
    <img src="/path/to/image" 
    to use 
    <img src="${results.background_image}"
    or if I should have created a placeholder image in a variable and just used
    <img src="${x}"
    */ 
    });

    resultsContainer.innerHTML = html;
}
function createGamesError(error) {
    console.log(error);
}

fetch ("https://api.rawg.io/api/games")
.then(createGamesResponse)
.then(createGames)
.catch(createGamesError) 

