import { productoServices } from "../js/productos.service.js";

const crearNuevaLinea = (url, nombre, precio, tipo, id) => {
  const linea = document.createElement("div");
  const contenido = `
        <div class="producto">
            <img src="${url}" alt="Imagen de consola" class="producto__imagen" />
            <p class="producto__nombre">${nombre}</p>
            <p class="producto__precio">${precio}</p>
            <a class="verProducto" id="${id}" href="producto-descripcion.html">Ver Producto</a><br />
            <a class="modificar" href="producto-modificar.html?id=${id}">Modificar</a>
            <a class="eliminar" id="${id}" href="">Eliminar</a>
        </div>`;
  linea.innerHTML = contenido;
  const btnEliminar = linea.querySelector(".eliminar");
  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    productoServices
      .eliminarProducto(id)
      .then((respuesta) => {
        console.log(respuesta);
      })
      .catch((err) => console.log("Ocurrió un error", err));
  });
  return linea;
};

const starWars = document.querySelector("[data-starWars]");
const consolas = document.querySelector("[data-consolas]");
const diversos = document.querySelector("[data-diversos]");

productoServices
  .listaProductos()
  .then((data) => {
    let contadorStarWars = 0;
    let contadorConsolas = 0;
    let contadorDiversos = 0;
   
    data.forEach((producto) => {
   
      if (producto.tipo === "starWars" && contadorStarWars < 6) {
        console.log(contadorStarWars)
        contadorStarWars = contadorStarWars + 1;
        const nuevaLinea = crearNuevaLinea(
          producto.url,
          producto.nombre,
          producto.precio
        );
        starWars.appendChild(nuevaLinea);
      }
      console.log(contadorStarWars)
      if (producto.tipo === "consolas" && contadorConsolas < 6) {
        contadorConsolas = contadorConsolas + 1;
        const nuevaLinea = crearNuevaLinea(
          producto.url,
          producto.nombre,
          producto.precio
        );
        consolas.appendChild(nuevaLinea);
      }
      if (producto.tipo === "diversos" && contadorDiversos < 6) {
        contadorDiversos = contadorDiversos + 1;
        const nuevaLinea = crearNuevaLinea(
          producto.url,
          producto.nombre,
          producto.precio
        );
        diversos.appendChild(nuevaLinea);
      }
    });
  })
  .catch((err) => console.log("Ocurrió un error"));

const verTodosProductos = document.querySelector("[data-verTodos]");

productoServices
  .listaProductos()
  .then((data) => {
    data.forEach((producto) => {
      const nuevaLinea = crearNuevaLinea(
        producto.url,
        producto.nombre,
        producto.precio,
        producto.descripcion,
        producto.id
      );
      verTodosProductos.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log("Ocurrió un error"));
