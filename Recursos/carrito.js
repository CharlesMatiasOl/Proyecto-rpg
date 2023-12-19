// Importa el módulo 'producto' desde el archivo "./producto.js"
import producto from "./producto.js";

// Obtiene el elemento HTML con el id "carro-contidad-items"
const carroCantidadItems = document.getElementById("carro-contidad-items");

// Obtiene el carrito almacenado en la sesión del navegador y lo convierte de JSON a objeto
let carroSession = JSON.parse(sessionStorage.getItem("carro"));

// Verifica si hay elementos en el carrito
if (carroSession) {
    // Actualiza la cantidad de elementos en el carrito mostrada en la interfaz
    carroCantidadItems.innerHTML = carroSession.length;

    // Filtra los productos que están en el carrito basándose en sus IDs
    const productosEnCarro = producto.juegos.filter((juego) => {
        return carroSession.includes(juego.id);
    });

    // Crea una cadena HTML para mostrar los productos en el carrito
    let htmlVista = "";
    productosEnCarro.forEach((productoEnCarro) => {
        htmlVista += `
            <article class="carro__productos">
                <figure class="carro__productos__fig">
                    <img src="${productoEnCarro.imagen}" alt="${productoEnCarro.nombre}" />
                </figure>
                <div class="carro__productos__datos">
                    <h3>${productoEnCarro.nombre}</h3>
                    <div>$ ${productoEnCarro.precio}</div>
                </div>
            </article>
        `;
    });

    // Obtiene el elemento HTML con el id "contenedor-productos" y actualiza su contenido
    const contenedorProductos = document.getElementById("contenedor-productos");
    contenedorProductos.innerHTML = htmlVista;
} else {
    // Si no hay productos en el carrito, muestra un mensaje en la consola
    console.log("Não há produtos no carrinho.");
}

// Intento de acceder a 'productosEnCarro' fuera del bloque 'if' anterior (esto causará un error)
let htmlVistaOutroUso = "";

// Intenta iterar sobre 'productosEnCarro', pero 'productosEnCarro' solo existe dentro del bloque 'if'
productosEnCarro.forEach((juego) => {
    htmlVistaOutroUso += `
        <article class="carro__productos">
            <figure class="carro__productos__fig">
                <img src="${juego.imagen}" alt="${juego.nombre}" />
            </figure>
            <div class="carro__productos__datos">
                <h3>${juego.nombre}</h3>
                <div>$${juego.precio}</div>
            </div>
        </article>`;
});

// Obtiene el elemento HTML con el id "contenedor-outro-uso" y actualiza su contenido
const contenedorOutroUso = document.getElementById("contenedor-outro-uso");
contenedorOutroUso.innerHTML = htmlVistaOutroUso;
