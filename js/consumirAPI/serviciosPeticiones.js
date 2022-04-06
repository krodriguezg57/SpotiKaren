//Consumir los recursos del API
export async function consumirAPI(URI,TOKEN){
    
    const PARAMATROS_PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }   

    let respuesta=await fetch(URI,PARAMATROS_PETICION)
    let canciones=respuesta.json()
    return(canciones)
}

