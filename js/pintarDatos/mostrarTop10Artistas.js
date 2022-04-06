export function pintarCanciones(resultado, artistas){

    let contenedorCanciones=document.getElementById("contenedorCanciones")
    
    let idAlmbum=resultado.tracks[0].album.id
    let index=0

    if (idAlmbum=="0z7pVBGOD7HCIB7S8eLkLI"){//Britney
        index=0
    }else if(idAlmbum=="58ufpQsJ1DS5kq4hhzQDiI"){//Bruno Mars
        index=1
    }else if(idAlmbum=="1O5kJTerozuI2WLgzvIz2m"){//jarabe de palo
        index=2
    }else  if(idAlmbum=="6GHUywBU0u92lg0Dhrt40R"){//Karol G
        index=3    
    }else if (idAlmbum=="1C2h7mLntPSeVYciMRTF4a"){//Michael Jackson
        index=4
    }
 
   let imgCarousel1=document.getElementById("imgCarousel1")
   imgCarousel1.src=artistas[index].carousel[0]

    let imgCarousel2=document.getElementById("imgCarousel2")
    imgCarousel2.src=artistas[index].carousel[1]

    let imgCarousel3=document.getElementById("imgCarousel3")
    imgCarousel3.src=artistas[index].carousel[2]


    let nombreArtista=document.createElement("h1")
    nombreArtista.textContent=artistas[index].nombre
    contenedorCanciones.appendChild(nombreArtista)
    
    let num=0
    resultado.tracks.forEach(function (cancion){  
        num++

        let contenedorCancion=document.createElement("div")
        contenedorCancion.classList.add("row")
        contenedorCancion.classList.add("contenedorCancion")
        contenedorCancion.style.height="60px"
        contenedorCancion.id=cancion.preview_url

        let colnumeracion=document.createElement("div")
        colnumeracion.classList.add("col")
        colnumeracion.classList.add("col-1")
        colnumeracion.style.width="50px"
        
        let numero=document.createElement("h5")
        numero.textContent=num

        let colimgAlbum=document.createElement("div")
        colimgAlbum.classList.add("col")
        colimgAlbum.classList.add("col-1")
        colimgAlbum.style.width="100px"
    
        let imgAlbum=document.createElement("img")
        imgAlbum.classList.add("p-3")
        imgAlbum.classList.add("img-fluid")
        imgAlbum.classList.add("w-100")
        imgAlbum.classList.add("pt-2")
        imgAlbum.src=cancion.album.images[0].url

        let colnombre= document.createElement("div")
        colnombre.classList.add("col")
        colnombre.classList.add("col-9")
        let nombreCancion = document.createElement("p")
        nombreCancion.textContent=cancion.name

        let colduracion=document.createElement("div")
        colduracion.classList.add("col")
        colnombre.classList.add("col-1")
        let duracion=document.createElement("p")
        duracion.textContent=((cancion.duration_ms)/60000).toFixed(2)+" min"

        colnumeracion.appendChild(numero)
        colimgAlbum.appendChild(imgAlbum)
        colnombre.appendChild(nombreCancion)
        colduracion.appendChild(duracion)
        contenedorCancion.appendChild(colnumeracion)
        contenedorCancion.appendChild(colimgAlbum)
        contenedorCancion.appendChild(colnombre)
        contenedorCancion.appendChild(colduracion)
        contenedorCanciones.appendChild(contenedorCancion) 
    }) 

}
    