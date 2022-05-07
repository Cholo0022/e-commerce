import { productoServices } from "../js/productos.service.js";

const form = document.querySelector("[data-form]");

const obtenerInformacion = () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null){
    console.log("Hacer redireccionamiento");
  }
  
  const nombre = document.querySelector("[data-nombre]");
  const precio = document.querySelector("[data-precio]");
  const descripcion = document.querySelector("[data-descripcion]");
  const tipo = document.querySelector("[data-tipo]");

  productoServices.detalleProducto(id).then((producto) => {

    nombre.value = producto.nombre;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
    tipo.value = producto.tipo;
  });
};

obtenerInformacion();

form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const img = document.querySelector("[data-img]").files[0].name;
  const nombre = document.querySelector("[data-nombre]").value;
  const precio = document.querySelector("[data-precio]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const tipo = document.querySelector("[data-tipo]").value;

  console.log(img, nombre, precio, descripcion, tipo)

  productoServices.actualizarProducto("images/" + img, nombre, precio, descripcion, tipo, id).then(() => {
    window.location.href = "./registro_completado.html";
  });    
})