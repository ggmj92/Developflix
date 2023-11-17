import peliculas from './peliculas'

const rutaRelative = "https://image.tmdb.org/t/p/w500";

const generoAccion = 28;
const generoThriller = 53;
const generoAventura = 12;

const accion = peliculas.filter(peli => peli.genre_ids.includes(28));

const contenedor = document.createElement("div");
contenedor.classList.add("genero");

peliculasPorGenero.forEach(peli => {
    const peliContenedor = document.createElement("div");
    peliContenedor.classList.add("peli-contenedor");

    const imagen = document.createElement("img");
    imagen.src = rutaUrl + peli.poster_path;
    imagen.alt = peli.title;

    const titulo = document.createElement("h3");
    titulo.textContent = peli.title;

    peliContenedor.appendChild(imagen);
    peliContenedor.appendChild(titulo);
    contenedor.appendChild(peliContenedor)
})

const seccion = document.querySelector(".genero-container");
seccion.appendChild(container);