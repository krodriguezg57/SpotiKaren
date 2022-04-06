export function pintarAlbumes(albumes){
    
    let contenedorAlbumes = document.getElementById("contenedorAlbumes")

    albumes.items.forEach(function(album){
        let card=document.createElement("div")
        card.classList.add("col")
        card.classList.add("col-2")
        card.classList.add("cardAlbum")
        card.classList.add("tarjeta")

        let imgAlbum=document.createElement("img")
        imgAlbum.classList.add("imgAlbum");
        imgAlbum.classList.add("card-img-top")
        imgAlbum.classList.add("img-fluid")
        imgAlbum.classList.add("w-100")
        imgAlbum.src=album.images[0].url

        let nombreAlbum= document.createElement("p")
        nombreAlbum.classList.add("nombreAlbum")
        nombreAlbum.classList.add("card-title")
        nombreAlbum.classList.add("text-center")
        nombreAlbum.textContent=album.name

        let contenedorBoton=document.createElement("div")
        contenedorBoton.classList.add("contenedorBoton")
        contenedorBoton.id=album.id
        
        let boton=document.createElement("div")
        boton.classList.add("botonIr")
        boton.classList.add("botonIrAlbum")

        let icono=document.createElement("i")
        icono.classList.add("fa")
        icono.classList.add("fa-play")

        let fecha=document.createElement("p")
        fecha.textContent = album.release_date
        fecha.classList.add("text-center")

        boton.appendChild(icono)
        contenedorBoton.appendChild(boton)
        card.appendChild(imgAlbum)
        card.appendChild(contenedorBoton)
        card.appendChild(nombreAlbum)
        card.appendChild(fecha)
        contenedorAlbumes.appendChild(card)
    })

    

}


