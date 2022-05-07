export function valida(boxes) {
  const tipoDeInput = boxes.dataset.tipo;

  if (boxes.validity.valid) {
    boxes.parentElement.classList.remove("input-container--invalid");
    boxes.parentElement.querySelector(".input-mensaje-error").innerHTML = "";
  } else {
    boxes.parentElement.classList.add("input-container--invalid");
    boxes.parentElement.querySelector(".input-mensaje-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, boxes);
  }
}

const tipoDeErrores = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
];

const mensajesDeError = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío",
  },
  email: {
    valueMissing: "El campo correo no puede estar vacío",
    typeMismatch: "El correo no es válido",
  },
  password: {
    valueMissing: "El campo contraseña no puede estar vacío",
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },
  mensaje: {
    valueMissing: "El campo mensaje no puede estar vacío",
  },

  precio: {
    valueMissing: "El campo precio no puede estar vacío",
    patternMismatch: "Solo puede ingresar números",
  },
  descripcion: {
    valueMissing: "El campo Descripción no puede estar vacío",
    patternMismatch: "Solo puede ingresar hasta 150 caracteres",
  },
};

function mostrarMensajeDeError(tipoDeInput, boxes) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (boxes.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(boxes.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}
