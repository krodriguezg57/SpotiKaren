export function pintarArtistas(artistas){

    let contenedorArtistas= document.getElementById("contenedorArtistas")

    let tituloArtistas=document.createElement("h1")
    tituloArtistas.classList.add("text-center")
    tituloArtistas.textContent="Conoce el top 10"
    let subtitulo=document.createElement("h5")
    subtitulo.textContent="del los tracks de mis artistas favoritos"
    subtitulo.classList.add("text-center")

    contenedorArtistas.appendChild(tituloArtistas)
    contenedorArtistas.appendChild(subtitulo)

    artistas.forEach(function (artista){  
        
        let card=document.createElement("div")
        card.classList.add("col")
        card.classList.add("col-2")
        card.classList.add("tarjeta")
        card.classList.add("cardArtista")
        

        let imgArtista=document.createElement("img")
        imgArtista.classList.add("imgArtista");
        imgArtista.classList.add("card-img-top")
        imgArtista.classList.add("img-fluid")
        imgArtista.classList.add("w-100")
        imgArtista.src=artista.img

        let nombreArtista= document.createElement("h5")
        nombreArtista.classList.add("nombreArtista")
        nombreArtista.classList.add("card-title")
        nombreArtista.textContent=artista.nombre

        let oyentesArtista=document.createElement("p")
        oyentesArtista.textContent=artista.oyentes

        let contenedorBoton=document.createElement("div")
        contenedorBoton.classList.add("contenedorBoton")
        contenedorBoton.id=artista.id
        let boton=document.createElement("div")
        boton.classList.add("botonIr")
        boton.classList.add("botonIrArtista")

        let icono=document.createElement("i")
        icono.classList.add("fa")
        icono.classList.add("fa-play")

        boton.appendChild(icono)
        contenedorBoton.appendChild(boton)
        card.appendChild(imgArtista)
        card.appendChild(contenedorBoton)
        card.appendChild(nombreArtista)
        card.appendChild(oyentesArtista)
        contenedorArtistas.appendChild(card)
      
    }) 

}
    