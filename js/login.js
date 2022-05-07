const emailUsuario = "andres@gmail.com";
const passwordUsuario = "As123456";

const btnLogin = document.getElementById("btnLogin");

// producto-agregar.html

btnLogin.addEventListener("click", (evento) => {
  evento.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const noRegistrado = document.getElementById("noRegistrado");

  if (emailUsuario === email.value && passwordUsuario === password.value) {
    noRegistrado.textContent = "";
    window.location.href = "../producto-agregar.html";
    console.log(email, password);
  } else {
    noRegistrado.textContent = "Usuario no Registrado";
  }
});
