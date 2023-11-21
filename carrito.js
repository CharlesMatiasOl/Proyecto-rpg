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

    const contenedorProductos = document.getElementById("contenedor-productos");
    contenedorProductos.innerHTML = htmlVista;
} else {
    console.log("Não há produtos no carrinho.");
}

// Se você deseja reutilizar a variável 'htmlVista' para outra finalidade, certifique-se de redefini-la antes de usá-la novamente.
let htmlVistaOutroUso = "";

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

const contenedorOutroUso = document.getElementById("contenedor-outro-uso");
contenedorOutroUso.innerHTML = htmlVistaOutroUso;
