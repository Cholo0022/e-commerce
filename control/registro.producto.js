import { productoServices } from "../js/productos.service.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = document.getElementById("img").files[0].name;
  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const descripcion = document.getElementById("descripcion").value;
  const tipoProducto = document.getElementById("tipo").value;

  productoServices
    .crearProducto("images/" + url, nombre, precio, descripcion, tipoProducto)
    .then((respuesta) => {
      console.log(respuesta);
    })
    .catch((err) => console.log(err));
});
