//LLAMADO POST PARA CONSUMR API Y OBTENER UN TOKEN
const llave1 = "grant_type=client_credentials";
const llave2 = "client_id=9899074b9f1b41958d9c18a260ff2bf3";
const llave3 = "client_secret=c167630f125b488cad805bfe64695292";

const parametrosPOST = {
    method: "POST",
    headers: { "Content-Type":   'application/x-www-form-urlencoded' },
    body: llave1 + '&' + llave2 + '&' + llave3
}
const urlPOST = "https://accounts.spotify.com/api/token";
fetch(urlPOST, parametrosPOST)
    .then(respuesta => respuesta.json())
    .then(datos => obtenerToken(datos));



//FUNCION PARA LLAMAR AL SERVICIO GET Y TRAER INFO DEL ARTISTA
function obtenerToken(datos) {

    let token = datos.access_token;
    token = "Bearer " + token;

    const parametrosGET = {
        method: "GET",
        headers: { "Authorization": token }
    }

    const urlGET = "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?country=US";

    fetch(urlGET, parametrosGET)
        .then(respuesta => respuesta.json())
        .then(datos => depurarArtista(datos));
}


function depurarArtista(datos) {

    //Datos que llegan del API
    let titulo1 = (datos.tracks[0].name);
    let audio1 = (datos.tracks[0].preview_url);
    let imagen1 = (datos.tracks[0].album.images[0].url);

    //Referencias a las etiquetas de HTML
    let titulo1DOM = document.getElementById("titulo1");
    let audio1DOM = document.getElementById("audio1");
    let imagen1DOM = document.getElementById("imagen1");

    //Modificando las etiquetas de HTML con los datos del API
    titulo1DOM.textContent = titulo1;
    audio1DOM.src = audio1;
    imagen1DOM.src = imagen1;



}