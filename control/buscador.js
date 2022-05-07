import { productoServices } from "../js/productos.service.js";

const buscador = document.querySelector("#buscador");
console.log(buscador);
buscador.addEventListener("input", (evento) => {
  productoServices.listaProductos
});
