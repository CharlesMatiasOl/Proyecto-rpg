import producto from "./producto.js";

const contenedor = document.getElementById("contenedor");

let contenidoHTML = "";

producto.juegos.forEach((juego) => {
    contenidoHTML += `
        <article>
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <p>${juego.nombre}</p>
            <span>$${juego.precio}</span>
            <button class="productos__boton" data-btn-carro data-id=${juego.id}>
            <img src="./media/carrito.svg" alt="Icono carrito compras"
            />
             Agregar carrito
    </button>
        </article>
    `;
});

contenedor.innerHTML = contenidoHTML;





document.addEventListener("DOMContentLoaded", () => {
    const carroCantidadItems = document.getElementById("carro-contidad-items");
    const botonesProductos = document.querySelectorAll("[data-btn-carro]");
    let carroCompras = [];
    let carroSession = JSON.parse(sessionStorage.getItem("carro"));

    if (carroSession) {
        carroCompras = carroSession;
        actualizarCantidadItems(carroCompras.length);
    }

    botonesProductos.forEach((boton) => {
        boton.addEventListener("click", () => {
            const productoId = Number(boton.dataset.id);
            agregarAlCarrito(productoId);
        });
    });

    function agregarAlCarrito(productoId) {
        carroCompras.push(productoId);
        sessionStorage.setItem("carro", JSON.stringify(carroCompras));
        actualizarCantidadItems(carroCompras.length);
    }

    function actualizarCantidadItems(cantidad) {
        carroCantidadItems.innerHTML = cantidad;
    }
});
























// let catalogo;
// fetch("./catalogo.json")
//     .then((datos)=>{
//     return datos.json()
// }
// ).then(
//     (datos)=>{
//         console.log(datos)
//     }
// )


console.log('Se tu encuentra esta mensaje en el console log, te amo <3')