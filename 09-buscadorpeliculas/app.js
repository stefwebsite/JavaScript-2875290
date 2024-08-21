const container = document.querySelector('.container');
const buscador = document.querySelector("#buscador");
const textoBusqueda = document.querySelector("#textobusqueda");
const listaStatus = document.querySelector("#listaStatus");

function mostrarResults(result) {
    container.innerHTML = "";  

    result.forEach(element => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
        <div class="card">
            <img src='${element.image}' alt="Imagen de la tarjeta" class="card-imagen">
            <div class="card-contenido">
                <h2 class="card-titulo">${element.nombre}</h2>
                <p class="card-descripcion">${element.genero}</p>
                <p class="card-descripcion">${element.year}</p>
                <p class="card-descripcion">${element.direccion}</p>
                <p class="card-descripcion">${element.guionistas.join(', ')}</p>
            </div>
        </div>
        `;
        container.appendChild(card);
    });
}

function filtrar(e) {
    e.preventDefault();

    let filtro = peliculas;

    if (listaStatus.value !== "All") {
        filtro = filtro.filter(pelicula => pelicula.year === parseInt(listaStatus.value));
    }
    
    if (textoBusqueda.value) {
        filtro = filtro.filter(pelicula => pelicula.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
    }
    
    mostrarResults(filtro);
    textoBusqueda.value = "";  
}

buscador.addEventListener("submit", filtrar);
