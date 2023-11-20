
import producto from "./producto.js";

const carroCantidadItems = document.getElementById("carro-contidad-items");


let carroSession = JSON.parse(sessionStorage.getItem("carro"));


if (carroSession) {
    
    carroCantidadItems.innerHTML = carroSession.length;

    
    const productosEnCarro = producto.juegos.filter((juego) => {
        return carroSession.includes(juego.id);
    });

    let htmlVista = "";

   
    productosEnCarro.forEach((productoEnCarro) => {
        htmlVista += `
            <article class="productos">
                <figure class="productos__fig">
                    <img src="${productoEnCarro.imagen}" alt="${productoEnCarro.nombre}" />
                </figure>
                <div class="productos__datos">
                    <h3>${productoEnCarro.nombre}</h3>
                    <div>$ ${productoEnCarro.precio}</div>
                </div>   
            </article>
        `;
    });


    const contenedorProductos = document.getElementById("contenedor-productos");
    contenedorProductos.innerHTML = htmlVista;
} else {

    console.log("Não há produtos no carrinho.");
}

let htmlVista = "";

        productosEnCarro.forEach((juego) => {
            htmlVista += `
            <article>
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <p>${juego.nombre}</p>
            <span>$${juego.precio}</span>
            
          </article>`;
        });

    
    
    const contenedor = document.getElementById("contenedor-productos");
    contenedor.innerHTML = htmlVista;

