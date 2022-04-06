export async function generarToken(){

    let client_id="client_id=f241eac0ec804fd7b06c53132217c678"
    let client_secret="client_secret=1d3656ccf81b4f458d53414f30663a4f"
    let grant_type="grant_type=client_credentials"

    let URI="https://accounts.spotify.com/api/token"
    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body: `${client_id}&${client_secret}&${grant_type}`
        }
    
        let respuesta=await fetch(URI,parametros)
        let respuestaFINAL=await respuesta.json()
        let token= `${respuestaFINAL.token_type} ${respuestaFINAL.access_token}`
        return token
}