export function generarURITopArtistas(codigo){
    return `https://api.spotify.com/v1/artists/${codigo}/top-tracks?market=US`
}

export function generarURIAlbumes(codigo){
    return `https://api.spotify.com/v1/artists/${codigo}/albums?market=ES&limit=8&offset=5`
}

export function generarURIAlbum(codigo){
    return `https://api.spotify.com/v1/albums/${codigo}`
}

