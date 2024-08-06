const container = document.querySelector('.container')

peliculas.forEach(element => {
let card = document.createElement('div')

card.innerHTML =
`   <div class="card">
        <img src='${element.image}' alt="Imagen de la tarjeta" class="card-imagen">
        <div class="card-contenido">
            <h2 class="card-titulo">${element.nombre}</h2>
            <p class="card-descripcion">${element.year}</p>
            <p class="card-descripcion">${element.direccion}</p>
            <p class="card-descripcion">${element.guionistas}</p>
            <p class="card-descripcion">${element.genero}</p>
        </div>
    </div>
`
container.appendChild(card);
})