// Importa el módulo 'producto' desde el archivo "./producto.js"
import producto from "./producto.js";

// Obtiene el elemento HTML con el id "contenedor"
const contenedor = document.getElementById("contenedor");

// Inicializa una cadena vacía para almacenar el contenido HTML de los productos
let contenidoHTML = "";

// Itera sobre la lista de juegos en el módulo 'producto' y crea elementos HTML para cada juego
producto.juegos.forEach((juego) => {
    contenidoHTML += `
        <article>
            <img src="${juego.imagen}" alt="${juego.nombre}">
            <p>${juego.nombre}</p>
            <span>$${juego.precio}</span>
            <button class="productos__boton" data-btn-carro data-id=${juego.id}>
                <img src="Recursos/media/carrito.svg" alt="Icono carrito compras" />
                Agregar al carrito
            </button>
        </article>
    `;
});

// Actualiza el contenido del elemento con id "contenedor" con el HTML generado
contenedor.innerHTML = contenidoHTML;

// Espera a que el DOM esté completamente cargado antes de ejecutar ciertas funciones
document.addEventListener("DOMContentLoaded", () => {
    // Obtiene el elemento HTML con el id "carro-contidad-items"
    const carroCantidadItems = document.getElementById("carro-contidad-items");

    // Obtiene todos los elementos con el atributo 'data-btn-carro' (botones de agregar al carrito)
    const botonesProductos = document.querySelectorAll("[data-btn-carro]");

    // Inicializa un arreglo para almacenar los IDs de productos en el carrito
    let carroCompras = [];

    // Obtiene el carrito de la sesión del navegador y lo convierte de JSON a objeto
    let carroSession = JSON.parse(sessionStorage.getItem("carro"));

    // Si hay elementos en el carrito almacenado en sesión, actualiza el carrito actual
    if (carroSession) {
        carroCompras = carroSession;
        // Actualiza la cantidad de elementos en el carrito mostrada en la interfaz
        actualizarCantidadItems(carroCompras.length);
    }

    // Agrega un event listener a cada botón de agregar al carrito
    botonesProductos.forEach((boton) => {
        boton.addEventListener("click", () => {
            // Obtiene el ID del producto desde el atributo 'data-id' del botón
            const productoId = Number(boton.dataset.id);
            // Agrega el ID del producto al carrito y actualiza la sesión del navegador
            agregarAlCarrito(productoId);
        });
    });

    // Función que agrega un ID de producto al carrito y actualiza la sesión del navegador
    function agregarAlCarrito(productoId) {
        carroCompras.push(productoId);
        sessionStorage.setItem("carro", JSON.stringify(carroCompras));
        // Actualiza la cantidad de elementos en el carrito mostrada en la interfaz
        actualizarCantidadItems(carroCompras.length);
    }

    // Función que actualiza la cantidad de elementos en el carrito mostrada en la interfaz
    function actualizarCantidadItems(cantidad) {
        carroCantidadItems.innerHTML = cantidad;
    }
});






















