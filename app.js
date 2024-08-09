const imgDomain = "https://img.pokemondb.net/artwork/avif/";
const imgType = ".avif";

let pokemonData = getData();
console.log(pokemonData);

async function getData(){
    const file = await fetch("/data.json");
    console.log(file); // doesn't work without the clogs
    const json = await file.json();
    console.log(json); //DO NOT REMOVE!!
    return json;
}

function generateCard(index, pokemon, digits = 3){
    const len = String(index).length;
    const numStr = "#" + "0".repeat(digits-len) + index;
    const name = pokemon["name"];
    const typeList = pokemon["type"].split(",");

    const card = document.createElement("div");
    newCard.classList.add("card");

    const cardPic = card.appendChild(document.createElement("img"));
    cardPic.classList.add("cardPic");
    cardPic.src = imgDomain + name.toLowerCase() + imgType;
    cardPic.alt = name.toLowerCase();

    const cardInfo = card.appendChild(document.createElement("div"));
    cardInfo.classList.add("cardInfo");
    const numElem = cardInfo.appendChild(document.createElement("h1"));
    numElem.textContent = numStr;
    const nameElem = cardInfo.appendChild(document.createElement("h3"));
    nameElem.textContent = name;

    for (const typeStr of typeList){
        const typeCard = card.appendChild(document.createElement("div"));
        typeCard.classList.push(typeStr.toLowerCase());
        typeCard.classList.push("type");
        typeCard.textContent = typeStr.toUpperCase();
    }
}