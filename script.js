const pkmName = document.querySelector(".pkm-name");
const pkmId = document.querySelector(".pkm-id");
const pkmPic = document.querySelector("#pkm-pic");
const choose =  document.querySelector("#choose");
const team = document.querySelector(".team");
const type = document.querySelector("#type");
const attack = document.querySelector("#attack");
const defense = document.querySelector("#defense");
const speed = document.querySelector("#speed");
const specialAttack = document.querySelector("#special-attack");
const specialDefense = document.querySelector("#special-defense");
const arr = [];

function searchPokemon (pokemon) {
    url = `https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`;
    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=> {
            pkmName.innerHTML = data.name;
            pkmId.innerHTML = data.id;
            let img = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            pkmPic.setAttribute('src', img);
            type.innerHTML = data['types']['0']['type']['name'];
            attack.innerHTML = data['stats']['1']['base_stat'];
            defense.innerHTML = data['stats']['2']['base_stat'];
            speed.innerHTML = data['stats']['5']['base_stat'];
            specialAttack.innerHTML = data['stats']['3']['base_stat'];
            specialDefense.innerHTML = data['stats']['4']['base_stat'];

        })
        .then((erro)=>  {
            console.log("Erro: " + erro);
        })
        search.value = ''    
    };
    
    function createTeam () {
        const newCard = document.createElement("div");
        const newPkmName = document.createElement("h2");
        newPkmName.innerText = pkmName.innerHTML;
        newCard.appendChild(newPkmName);
        const newPkmPic = document.createElement("img");
        newPkmPic.src = pkmPic.src;
        newCard.appendChild(newPkmPic);
        const newPkmId = document.createElement("p");
        newPkmId.innerText = pkmId.innerHTML;
        newCard.appendChild(newPkmId);
        team.appendChild(newCard);
        newCard.classList.add('team-card');
    }
    
    choose.addEventListener('click', ()=> {
        arr.push(createTeam);
        if(arr.length > 6){
           alert("Sua equipe ja esta completa")
        }else {
            createTeam();
        }
    })
    
document.querySelector(".form").addEventListener('submit', (ev) => {
    ev.preventDefault();
    searchPokemon(search.value);
});
