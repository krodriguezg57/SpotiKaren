import {generarToken} from './consumirAPI/generarToken.js'

import {consumirAPI} from './consumirAPI/serviciosPeticiones.js'

import {generarURITopArtistas} from './consumirAPI/generacionesUris.js'
import {pintarCanciones} from "./pintarDatos/mostrarTop10Artistas.js"

import {generarURIAlbumes} from "./consumirAPI/generacionesUris.js"
import {pintarAlbumes} from "./pintarDatos/mostrarAlbumes.js"

import {generarURIAlbum} from "./consumirAPI/generacionesUris.js"


import {pintarArtistas} from "./pintarDatos/mostrarCardsArtistas.js"
import {filtrarArtistas} from "./search.js"
import {filtrarCards} from "./search.js"
import {artistas} from "./arregloInfoArtistas.js"


let estoyEnHome=true

filtrarArtistas()
filtrarCards(estoyEnHome)
pintarArtistas(artistas)

//Contenedores del contenido de la pagina
let contenedorCanciones = document.getElementById("contenedorCanciones")
let contenedorArtistas =document.getElementById("contenedorArtistas")
let contenedorAlbumes= document.getElementById("contenedorAlbumes")


//item del menu
let home=document.getElementById("home")
home.addEventListener("click", function(){
    contenedorCanciones.innerHTML=""
    contenedorArtistas.innerHTML=""
    contenedorAlbumes.innerHTML=""

    pintarArtistas(artistas)
    estoyEnHome=true

    let imgCarousel1=document.getElementById("imgCarousel1")
    imgCarousel1.src="../../img/carouselSpotify/spotify.jpg"

    let imgCarousel2=document.getElementById("imgCarousel2")
    imgCarousel2.src="../../img/carouselSpotify/spotify2.jpg"

    let imgCarousel3=document.getElementById("imgCarousel3")
    imgCarousel3.src="../../img/carouselSpotify/spotify3.jpg"
    let carousel =document.getElementById("carousel")
    carousel.style.display="block"
})


let itemBuscar=document.getElementById("itemBuscar")
itemBuscar.addEventListener("click",function(){
    let buscadorArtista = document.getElementById("buscadorArtista")
    buscadorArtista.style.width="350px"
    buscadorArtista.style.backgroundColor= "transparent"
    buscadorArtista.style.paddingLeft="25px"
    buscadorArtista.style.border="2px solid #6d6c6c"
    buscadorArtista.style.transform="translate(-70px,0px)"

    let icono =document.getElementById("icono")
    icono.style.transform="rotate(-360deg)"

    let btnBuscador = document.getElementById("btnBuscador")
    btnBuscador.style.backgroundColor="#1ED760"
    btnBuscador.style.transform= "translate(-70px,-4px)"

})



//si le da click al boton de la card del Artista
contenedorArtistas.addEventListener("click", function(event){
    let artistaSeleccionado
    
   if(event.target.classList.contains("botonIrArtista")){
    contenedorArtistas.innerHTML=""
    event.preventDefault()
    artistaSeleccionado=event.target.parentElement.id
   
    let URI=generarURITopArtistas(artistaSeleccionado)
      
    async function activarAPI(artistas){
        let TOKEN=await generarToken()
        let canciones=await consumirAPI(URI,TOKEN)
        pintarCanciones(canciones,artistas)
    }
    activarAPI(artistas)
    contenedorCanciones.innerHTML=""
    artistaSeleccionado=""
   }
   estoyEnHome=false
   let carousel =document.getElementById("carousel")
    carousel.style.display="block"        
})


//si le da click al la lista de artistas
let listaArtistas = document.getElementById("listaArtistas")

listaArtistas.addEventListener("click",function(event){
    contenedorArtistas.innerHTML=""
    contenedorCanciones.innerHTML=""
    
    event.preventDefault()
   
    let artistaSeleccionado=event.target.id
    let URI=generarURIAlbumes(artistaSeleccionado)
      
    async function activarAPI(){
        let TOKEN=await generarToken()
        let albumes=await consumirAPI(URI,TOKEN)
        pintarAlbumes(albumes)      
    }
    activarAPI()
    contenedorAlbumes.innerHTML=""
    artistaSeleccionado=""
    
    let carousel =document.getElementById("carousel")
    carousel.style.display="none"
    let buscadorArtista = document.getElementById("buscadorArtista")
    buscadorArtista.value=""
    listaArtistas.style.display="";
    let artistasBuscador = listaArtistas.getElementsByTagName("li");
    artistasBuscador[1].style.display="block"
    estoyEnHome=false
})


contenedorAlbumes.addEventListener("click",function(event){
    let albumSeleccionado
    
    albumSeleccionado=event.target.parentElement.id
    if(event.target.classList.contains("botonIrAlbum")){
    

        console.log(albumSeleccionado)
        let URI=generarURIAlbum(albumSeleccionado)
        
        async function activarAPI(){
            let TOKEN=await generarToken()
            let cancionesAlbumes=await consumirAPI(URI,TOKEN)
            console.log(cancionesAlbumes)      
        }
        activarAPI()

}
  
})


contenedorCanciones.addEventListener("click", function(event){
    let cancionSeleccionada
    cancionSeleccionada=event.target.parentElement.id
    let audio= document.getElementById("audio")
    audio.src=cancionSeleccionada
})




let audio= document.getElementById("audio")
let nombreArtista
contenedorCanciones.addEventListener("click", function(event){
    let cancionSeleccionada
    cancionSeleccionada=event.target.parentElement.id
    audio.src=cancionSeleccionada
    console.log(nombreArtista)
})
 
 
let playPause = document.getElementById("btnplay");
let play =document.getElementById("play")
let pause=document.getElementById("pause")
playPause.addEventListener("click", () => {
  if (audio.paused || audio.ended) {
    play.style.display="none"
    pause.style.display="block"
    audio.play();
  } else {
    play.style.display="block"
    pause.style.display="none"
    audio.pause();
  }
});






