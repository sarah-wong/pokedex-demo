const imgDomain = "https://img.pokemondb.net/artwork/avif/";
const imgType = ".avif";
const cardContainer = document.querySelector(".cardContainer");
const searchForm = document.querySelector(".filter");

let pokemonData = [
    {
      "name": "Bulbasaur",
      "type": "Grass,Poison"
    },
    {
      "name": "Ivysaur",
      "type": "Grass,Poison"
    },
    {
      "name": "Venusaur",
      "type": "Grass,Poison"
    },
    {
      "name": "Charmander",
      "type": "Fire"
    },
    {
      "name": "Charmeleon",
      "type": "Fire"
    },
    {
      "name": "Charizard",
      "type": "Fire,Flying"
    },
    {
      "name": "Squirtle",
      "type": "Water"
    },
    {
      "name": "Wartortle",
      "type": "Water"
    },
    {
      "name": "Blastoise",
      "type": "Water"
    },
    {
      "name": "Caterpie",
      "type": "Bug"
    },
    {
      "name": "Metapod",
      "type": "Bug"
    },
    {
      "name": "Butterfree",
      "type": "Bug,Flying"
    },
    {
      "name": "Weedle",
      "type": "Bug,Poison"
    },
    {
      "name": "Kakuna",
      "type": "Bug,Poison"
    },
    {
      "name": "Beedrill",
      "type": "Bug,Poison"
    },
    {
      "name": "Pidgey",
      "type": "Normal,Flying"
    },
    {
      "name": "Pidgeotto",
      "type": "Normal,Flying"
    },
    {
      "name": "Pidgeot",
      "type": "Normal,Flying"
    },
    {
      "name": "Rattata",
      "type": "Normal"
    },
    {
      "name": "Raticate",
      "type": "Normal"
    },
    {
      "name": "Spearow",
      "type": "Normal,Flying"
    },
    {
      "name": "Fearow",
      "type": "Normal,Flying"
    },
    {
      "name": "Ekans",
      "type": "Poison"
    },
    {
      "name": "Arbok",
      "type": "Poison"
    },
    {
      "name": "Pikachu",
      "type": "Electric"
    },
    {
      "name": "Raichu",
      "type": "Electric"
    },
    {
      "name": "Sandshrew",
      "type": "Ground"
    },
    {
      "name": "Sandslash",
      "type": "Ground"
    },
    {
      "name": "Nidoran♀",
      "type": "Poison"
    },
    {
      "name": "Nidorina",
      "type": "Poison"
    },
    {
      "name": "Nidoqueen",
      "type": "Poison,Ground"
    },
    {
      "name": "Nidoran♂",
      "type": "Poison"
    },
    {
      "name": "Nidorino",
      "type": "Poison"
    },
    {
      "name": "Nidoking",
      "type": "Poison,Ground"
    },
    {
      "name": "Clefairy",
      "type": "Normal"
    },
    {
      "name": "Clefable",
      "type": "Normal"
    },
    {
      "name": "Vulpix",
      "type": "Fire"
    },
    {
      "name": "Ninetales",
      "type": "Fire"
    },
    {
      "name": "Jigglypuff",
      "type": "Normal"
    },
    {
      "name": "Wigglytuff",
      "type": "Normal"
    },
    {
      "name": "Zubat",
      "type": "Poison,Flying"
    },
    {
      "name": "Golbat",
      "type": "Poison,Flying"
    },
    {
      "name": "Oddish",
      "type": "Grass,Poison"
    },
    {
      "name": "Gloom",
      "type": "Grass,Poison"
    },
    {
      "name": "Vileplume",
      "type": "Grass,Poison"
    },
    {
      "name": "Paras",
      "type": "Bug,Grass"
    },
    {
      "name": "Parasect",
      "type": "Bug,Grass"
    },
    {
      "name": "Venonat",
      "type": "Bug,Poison"
    },
    {
      "name": "Venomoth",
      "type": "Bug,Poison"
    },
    {
      "name": "Diglett",
      "type": "Ground"
    },
    {
      "name": "Dugtrio",
      "type": "Ground"
    },
    {
      "name": "Meowth",
      "type": "Normal"
    },
    {
      "name": "Persian",
      "type": "Normal"
    },
    {
      "name": "Psyduck",
      "type": "Water"
    },
    {
      "name": "Golduck",
      "type": "Water"
    },
    {
      "name": "Mankey",
      "type": "Fighting"
    },
    {
      "name": "Primeape",
      "type": "Fighting"
    },
    {
      "name": "Growlithe",
      "type": "Fire"
    },
    {
      "name": "Arcanine",
      "type": "Fire"
    },
    {
      "name": "Poliwag",
      "type": "Water"
    },
    {
      "name": "Poliwhirl",
      "type": "Water"
    },
    {
      "name": "Poliwrath",
      "type": "Water,Fighting"
    },
    {
      "name": "Abra",
      "type": "Psychic"
    },
    {
      "name": "Kadabra",
      "type": "Psychic"
    },
    {
      "name": "Alakazam",
      "type": "Psychic"
    },
    {
      "name": "Machop",
      "type": "Fighting"
    },
    {
      "name": "Machoke",
      "type": "Fighting"
    },
    {
      "name": "Machamp",
      "type": "Fighting"
    },
    {
      "name": "Bellsprout",
      "type": "Grass,Poison"
    },
    {
      "name": "Weepinbell",
      "type": "Grass,Poison"
    },
    {
      "name": "Victreebel",
      "type": "Grass,Poison"
    },
    {
      "name": "Tentacool",
      "type": "Water,Poison"
    },
    {
      "name": "Tentacruel",
      "type": "Water,Poison"
    },
    {
      "name": "Geodude",
      "type": "Rock,Ground"
    },
    {
      "name": "Graveler",
      "type": "Rock,Ground"
    },
    {
      "name": "Golem",
      "type": "Rock,Ground"
    },
    {
      "name": "Ponyta",
      "type": "Fire"
    },
    {
      "name": "Rapidash",
      "type": "Fire"
    },
    {
      "name": "Slowpoke",
      "type": "Water,Psychic"
    },
    {
      "name": "Slowbro",
      "type": "Water,Psychic"
    },
    {
      "name": "Magnemite",
      "type": "Electric"
    },
    {
      "name": "Magneton",
      "type": "Electric"
    },
    {
      "name": "Farfetch'd",
      "type": "Normal,Flying"
    },
    {
      "name": "Doduo",
      "type": "Normal,Flying"
    },
    {
      "name": "Dodrio",
      "type": "Normal,Flying"
    },
    {
      "name": "Seel",
      "type": "Water"
    },
    {
      "name": "Dewgong",
      "type": "Water,Ice"
    },
    {
      "name": "Grimer",
      "type": "Poison"
    },
    {
      "name": "Muk",
      "type": "Poison"
    },
    {
      "name": "Shellder",
      "type": "Water"
    },
    {
      "name": "Cloyster",
      "type": "Water,Ice"
    },
    {
      "name": "Gastly",
      "type": "Ghost,Poison"
    },
    {
      "name": "Haunter",
      "type": "Ghost,Poison"
    },
    {
      "name": "Gengar",
      "type": "Ghost,Poison"
    },
    {
      "name": "Onix",
      "type": "Rock,Ground"
    },
    {
      "name": "Drowzee",
      "type": "Psychic"
    },
    {
      "name": "Hypno",
      "type": "Psychic"
    },
    {
      "name": "Krabby",
      "type": "Water"
    },
    {
      "name": "Kingler",
      "type": "Water"
    },
    {
      "name": "Voltorb",
      "type": "Electric"
    },
    {
      "name": "Electrode",
      "type": "Electric"
    },
    {
      "name": "Exeggcute",
      "type": "Grass,Psychic"
    },
    {
      "name": "Exeggutor",
      "type": "Grass,Psychic"
    },
    {
      "name": "Cubone",
      "type": "Ground"
    },
    {
      "name": "Marowak",
      "type": "Ground"
    },
    {
      "name": "Hitmonlee",
      "type": "Fighting"
    },
    {
      "name": "Hitmonchan",
      "type": "Fighting"
    },
    {
      "name": "Lickitung",
      "type": "Normal"
    },
    {
      "name": "Koffing",
      "type": "Poison"
    },
    {
      "name": "Weezing",
      "type": "Poison"
    },
    {
      "name": "Rhyhorn",
      "type": "Ground,Rock"
    },
    {
      "name": "Rhydon",
      "type": "Ground,Rock"
    },
    {
      "name": "Chansey",
      "type": "Normal"
    },
    {
      "name": "Tangela",
      "type": "Grass"
    },
    {
      "name": "Kangaskhan",
      "type": "Normal"
    },
    {
      "name": "Horsea",
      "type": "Water"
    },
    {
      "name": "Seadra",
      "type": "Water"
    },
    {
      "name": "Goldeen",
      "type": "Water"
    },
    {
      "name": "Seaking",
      "type": "Water"
    },
    {
      "name": "Staryu",
      "type": "Water"
    },
    {
      "name": "Starmie",
      "type": "Water,Psychic"
    },
    {
      "name": "Mr. Mime",
      "type": "Psychic"
    },
    {
      "name": "Scyther",
      "type": "Bug,Flying"
    },
    {
      "name": "Jynx",
      "type": "Ice,Psychic"
    },
    {
      "name": "Electabuzz",
      "type": "Electric"
    },
    {
      "name": "Magmar",
      "type": "Fire"
    },
    {
      "name": "Pinsir",
      "type": "Bug"
    },
    {
      "name": "Tauros",
      "type": "Normal"
    },
    {
      "name": "Magikarp",
      "type": "Water"
    },
    {
      "name": "Gyarados",
      "type": "Water,Flying"
    },
    {
      "name": "Lapras",
      "type": "Water,Ice"
    },
    {
      "name": "Ditto",
      "type": "Normal"
    },
    {
      "name": "Eevee",
      "type": "Normal"
    },
    {
      "name": "Vaporeon",
      "type": "Water"
    },
    {
      "name": "Jolteon",
      "type": "Electric"
    },
    {
      "name": "Flareon",
      "type": "Fire"
    },
    {
      "name": "Porygon",
      "type": "Normal"
    },
    {
      "name": "Omanyte",
      "type": "Rock,Water"
    },
    {
      "name": "Omastar",
      "type": "Rock,Water"
    },
    {
      "name": "Kabuto",
      "type": "Rock,Water"
    },
    {
      "name": "Kabutops",
      "type": "Rock,Water"
    },
    {
      "name": "Aerodactyl",
      "type": "Rock,Flying"
    },
    {
      "name": "Snorlax",
      "type": "Normal"
    },
    {
      "name": "Articuno",
      "type": "Ice,Flying"
    },
    {
      "name": "Zapdos",
      "type": "Electric,Flying"
    },
    {
      "name": "Moltres",
      "type": "Fire,Flying"
    },
    {
      "name": "Dratini",
      "type": "Dragon"
    },
    {
      "name": "Dragonair",
      "type": "Dragon"
    },
    {
      "name": "Dragonite",
      "type": "Dragon,Flying"
    },
    {
      "name": "Mewtwo",
      "type": "Psychic"
    },
    {
      "name": "Mew",
      "type": "Psychic"
    }
  ];

function generateCard(index, pokemon, digits = 3){
    const len = String(index).length;
    const numStr = "#" + "0".repeat(digits-len) + index;
    const name = pokemon["name"];
    const typeList = pokemon["type"].split(",");

    const card = document.createElement("div");
    card.classList.add("card");

    const cardPic = card.appendChild(document.createElement("img"));
    cardPic.classList.add("cardPic");
    cardPic.src = imgDomain + name.toLowerCase() + imgType;
    cardPic.alt = name.toLowerCase();

    const cardInfo = card.appendChild(document.createElement("div"));
    cardInfo.classList.add("cardInfo");
    const numElem = cardInfo.appendChild(document.createElement("h1"));
    numElem.classList.add("number");
    numElem.textContent = numStr;
    const nameElem = cardInfo.appendChild(document.createElement("h3"));
    nameElem.classList.add("name");
    nameElem.textContent = name;

    for (const typeStr of typeList){
        const typeCard = card.appendChild(document.createElement("div"));
        typeCard.classList.add(typeStr.toLowerCase(),"type");
        typeCard.textContent = typeStr.toUpperCase();
    }
    return card;
}

for (let i = 0; i < pokemonData.length; i++) {
    const card = generateCard(i+1,pokemonData[i]);
    cardContainer.appendChild(card);
}

function handleTypeSelect(){
    const type1 = searchForm.children["type1"];
    const type2 = searchForm.children["type2"];
    if(type1.value){
        type2.disabled = false;
    }
    else{
        type2.disabled = true;
        type2.value = "";
    }
}
type1.onchange = handleTypeSelect;

function handleSearch(e){
  e.preventDefault();
  const nameInput = searchForm.children["name"].value.toLowerCase();
  const typeInput1 = searchForm.children["type1"].value;
  const typeInput2 = searchForm.children["type2"].value;

  let foundOne = false;

  for(let i = 0; i < pokemonData.length; i++){
    const pokemon = pokemonData[i];
    const card = cardContainer.children[i];

    const name = pokemon["name"].toLowerCase();
    const type = pokemon["type"].toLowerCase();
    
    const nameCheck = !nameInput || name.includes(nameInput);
    const typeCheck1 = !typeInput1 || type.includes(typeInput1);
    const typeCheck2 = !typeInput2 || type.includes(typeInput2);

    const eval = (nameCheck && typeCheck1 && typeCheck2);

    card.style.display = eval? "flex":"none";
    // console.log(`display "${pokemon['name']} set to ${eval}" `);
    if(!foundOne && eval)
    {
      foundOne = true;
    }
  }
  if(!foundOne){
    window.alert("No Pokemon found matching search criteria! Please try again.");
    handleClear();
  }
}

searchForm.addEventListener("submit", handleSearch);

function handleClear(){
  searchForm.clea
  for (const card of cardContainer.children) {
    card.style.display = "flex";
  }
}
searchForm.addEventListener("reset", handleClear);