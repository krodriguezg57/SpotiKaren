export function filtrarArtistas(){

    let buscadorArtista = document.getElementById("buscadorArtista")

    buscadorArtista.addEventListener("keyup", function(){
        
        let caracterBuscador = buscadorArtista.value.toUpperCase();
        let listaArtistas = document.getElementById("listaArtistas");
        let artistas = listaArtistas.getElementsByTagName("li");


        for (let i = 0; i < artistas.length; i++){
           let textoetiquetaArtista =  artistas[i].textContent;
          
            if(textoetiquetaArtista.toUpperCase().indexOf(caracterBuscador) > -1) {
                artistas[i].style.display = "";
                listaArtistas.style.display = "block";

                if (buscadorArtista.value === ""){
                    listaArtistas.style.display = "none";  
                }
                
            }else{//si no encuentra el artistas
                artistas[i].style.display = "none";    
            }

        }//cierre del for
    });
}


export function filtrarCards(estoyEnHome){
    if(estoyEnHome==true){
        let buscadorArtista = document.getElementById("buscadorArtista")
        buscadorArtista.addEventListener("keyup", function(){
            let contenedorArtistas = document.getElementById("contenedorArtistas")
            let cardArtista = document.getElementsByClassName("cardArtista")
            let caracterBuscador = buscadorArtista.value.toUpperCase();
            let listaArtistas = document.getElementById("listaArtistas");
            let artistas = listaArtistas.getElementsByTagName("li");

            for (let i = 0; i < artistas.length; i++){
                let nombreCardsArtistas=contenedorArtistas.querySelectorAll(".nombreArtista")
                let nombreCardArtista=nombreCardsArtistas[i].textContent

                if (nombreCardArtista.toUpperCase().indexOf(caracterBuscador)> -1){
                    cardArtista[i].style.display="block"; 
                    contenedorArtistas.style.display="flex";

                    if (buscadorArtista.value === ""){ 
                        contenedorArtistas.style.display="flex"
                    }
                    
                }else{//si no encuentra el artistas
                    cardArtista[i].style.display="none"
                }
            }
        })
    }else{
        console.log("no puedo filtrar las cards")
    }
}
