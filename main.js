//Temporal Arrays
let pokemonId=[]
let nextid=[]
let pokemon=[]
//Axios Form for data
const pokemonInfo= async ()=>{
    try{ 
        let id=parseFloat(pokemonId[0])+1
        const name=document.getElementById("name")
        const type=document.getElementById("type")
        const species=document.getElementById("species")
        const height=document.getElementById("height")
        const weight=document.getElementById("weight")
        const abilities=document.getElementById("abilities")
        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        name.innerHTML=`${res.data.name}`     
        type.innerHTML=`Types:${res.data.types[0].type.name}`
        if(res.data.types[1]){
            type.innerHTML=`Types: ${res.data.types[0].type.name}`+`   `+`${res.data.types[1].type.name}`
        }else{type.innerHTML=`Types: ${res.data.types[0].type.name}`}  
        species.innerHTML=`Species: ${res.data.species.name}`
        height.innerHTML=`Height: ${res.data.height}`
        weight.innerHTML=`Weight: ${res.data.weight}`
        abilities.innerHTML=`Abilities: ${res.data.abilities[0].ability.name}`
        if(res.data.abilities[1]){
            abilities.innerHTML=`Abilities: ${res.data.abilities[0].ability.name}`+`   `+`${res.data.abilities[1].ability.name}`
        }else{abilities.innerHTML=`Abilities: ${res.data.abilities[0].ability.name}`}

    }

    catch (err) {
        console.error(err);
    }
}

//All pokemons push to an Array in case more are added
const pokemonlist=()=>{
let pokemons=document.getElementsByClassName("pokemon")
for (let i = 0; i < pokemons.length; i++) {
    pokemon.push(pokemons[i].innerHTML)    
}
console.log(pokemon)
}
pokemonlist()

const transform=(pkmid)=>{
const pokemonDsiaplay=document.getElementById("pkmdis")
 const pokemon=document.getElementById(`${pkmid}`)
const back=document.getElementById("back")
const number=document.getElementById("displayNumber")
const info=document.getElementById("info")
const searchBar=document.getElementById("searchBar")
const suggPokemon=document.getElementById("suggestionPokemon")
const Suggestions1=document.getElementById("Suggestions1")
const Suggestions2=document.getElementById("Suggestions2")
const Suggestions3=document.getElementById("Suggestions3")
const sound=new Audio("./Media/Sounds/Data.m4a")
sound.play()
Suggestions1.innerHTML=""
Suggestions2.innerHTML=""
Suggestions3.innerHTML=""
suggPokemon.style.display="none"
   pokemon.style.backgroundColor=("#A1CAE2")
   searchBar.style.display="none"
    pokemon.style.width=("100%")
    pokemon.style.height=("100%")
    pokemon.style.border="none"
    pokemon.style.boxShadow="none"
    pokemon.style.position="absolute"
    pokemon.style.transition="ease-in-out 0.7s"
     back.style.width=("12%")
     back.style.height=("10%")
     back.style.transition="ease 1s"
pokemonDsiaplay.style.overflowY="scroll"
pokemonDsiaplay.scrollBy(0,-100000000)
pokemonDsiaplay.style.overflow="hidden"
number.innerHTML=`${pkmid+1}`
pokemonId.push(`${pkmid}`)
console.log(pokemonId)
info.style.display="flex"
info.style.position="absolute"
pokemonInfo()
}



const backing=()=>{
    const number=document.getElementById("displayNumber")
    const pokemonDsiaplay=document.getElementById("pkmdis")
    const  pkmid= pokemonId[0]
    const pokemonB=document.getElementById(`${pkmid}`)
    const back=document.getElementById("back")
    const info=document.getElementById("info")
    const searchBar=document.getElementById("searchBar")
    const sound=new Audio("./Media/Sounds/Data.m4a")
sound.play()
    info.style.display="none"
   pokemonB.style.width=("19%")
   pokemonB.style.height=("15%")
   pokemonB.style.position="fixed"
   pokemonB.style.border= ("2px #A1CAE2")
   pokemonB.style.margin="2.5% 2.5%"
   pokemonB.style.position="initial"
   pokemonB.style.backgroundColor=("#A1CAE2")
     pokemonDsiaplay.style.overflowY="scroll"
     back.style.width=("0%")
     back.style.height=("0%")
     searchBar.style.display="initial"
   pokemonB.style.transition="ease-in-out 1s"
   number.innerHTML=""
   pokemonId.shift()
}

//Buttons

const on=()=>{
    const displays=document.getElementById("pkmdis")
    const displays2=document.getElementById("disInf")
    const button=document.getElementById("off")
    if(displays.style.display="none"){
        displays.style.display="flex"
        displays2.style.display="flex"
        button.style.display="block"
        const sound=new Audio("./Media/Sounds/On.m4a")
sound.play()
    }
}

const off=()=>{
    const displays=document.getElementById("pkmdis")
    const displays2=document.getElementById("disInf")
    const button=document.getElementById("off")
    const sound=new Audio("./Media/Sounds/Off.m4a")
    sound.play()
        displays.style.display="none"
        displays2.style.display="none"
        button.style.display="none"
    
}


const next=()=>{
    let id=parseFloat(pokemonId[0])+1
    const sound=new Audio("./Media/Sounds/select.mp3")
sound.play()

nextid.push(id)

 backing()
 transform(nextid[0])
 nextid.shift()
}


const prev=()=>{
    let id=parseFloat(pokemonId[0])-1
    const sound=new Audio("./Media/Sounds/select.mp3")
    sound.play()
    nextid.push(id)
   
    backing()
    transform(nextid[0])
    nextid.shift()
   }



//Suggestions filter
const searchBar=document.getElementById("searchBar")
searchBar.addEventListener("keyup",(e)=>{
    const search=e.target.value
    const filter=pokemon.filter((name)=>{
        return(
            name.includes(search)
    )
    })
    const filtrado=pokemon.indexOf(filter[0])
    console.log(filtrado)
    const Suggestions1=document.getElementById("Suggestions1")
    const Suggestions2=document.getElementById("Suggestions2")
    const Suggestions3=document.getElementById("Suggestions3")
    if(search===""){
    
    }
if(filter[0]===undefined){
    Suggestions1.innerHTML="Pokemon no encontrado"
}

if(filter[2]){
    Suggestions1.innerHTML=(filter[0])
    Suggestions2.innerHTML=(filter[1])
    Suggestions3.innerHTML=(filter[2])
}

else if(filter[1]){
    Suggestions1.innerHTML=(filter[0])
    Suggestions2.innerHTML=(filter[1])
    Suggestions3.innerHTML=""
}

else {
    Suggestions1.innerHTML=(filter[0])
    Suggestions2.innerHTML=""
    Suggestions3.innerHTML=""}
})

searchBar.addEventListener("keyup",(e)=>{
    const search=e.target.value
    const filter=pokemon.filter((name)=>{
        return(
            name.includes(search)
      
    )
    })
 const filtrado=pokemon.indexOf(filter[0])
    const urladjust=parseFloat(filtrado)+1
    const url=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${urladjust}.png`
    const suggPokemon=document.getElementById("suggestionPokemon")
    suggPokemon.style.backgroundImage=`url(${url})`

})


//Search
searchBar.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
 
     const search=e.target.value
     const filter=pokemon.filter((name)=>{
         return(
             name.includes(search)
     )
     })
     const Suggestions=document.getElementById("Suggestions1")
     if(e.target.value===""){Suggestions.innerHTML=""
     }

     else {Suggestions.innerHTML=(filter[0])}
 const filtrado=pokemon.indexOf(filter[0])
 const Suggestions1=document.getElementById("Suggestions1")
 const Suggestions2=document.getElementById("Suggestions2")
 const Suggestions3=document.getElementById("Suggestions3")
 
 
     transform(filtrado)
     searchBar.value=""
     search.value=""
     if(searchBar.value===""){
         Suggestions1.innerHTML=""
         Suggestions2.innerHTML=""
         Suggestions3.innerHTML=""

     }
    
    }
    if(filter[0]===undefined){const Suggestions1=document.getElementById("Suggestions1")
        Suggestions1.innerHTML="Pokemon no encontrado"}
}) 

