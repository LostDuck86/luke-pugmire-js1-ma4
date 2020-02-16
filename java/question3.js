


const detailsUrl = "https://api.rawg.io/api/games/4200";


function detailsUrlResponse(response) {
    return response.json();
}
function gameDetails(json) {
    createGameDetails(json);
}
function detailsUrlError(error) {
    console.log(error);
}


fetch(detailsUrl)
.then(detailsUrlResponse)
.then(gameDetails)
.catch(detailsUrlError);

function createGameDetails(json) {
    console.dir(json);

    const title = document.querySelector("h1");
    title.innerHTML = json.name;
    
    
    const description = document.querySelector(".description");
    description.innerHTML = json.description;
    
    const image = document.querySelector(".image");
    image.style.backgroundImage = "url('${json.background_image_additional}')";
};


