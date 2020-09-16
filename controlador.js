const url = "https://api.spotify.com/v1/artists/4gzpq5DPGxSnKTe4SA8HAU/top-tracks?country=US";
const token = "Bearer BQCeuCBzAknoJZm2tH9wOHJtLNUcx0kafgnjQm7fgK_So8yJKowj-NfDJP4qmIHZCxwzOYHxAo4-TrZng-F47zTLS-8KEvdQpjAZv3e6NYXG0Sa-CNt6SVmY5wKEsmExPsE_nse-zv6Qww9vAh4";

const parametros = {

    method: "GET",
    headers: { "Authorization": token }
}

fetch(url, parametros)
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos))