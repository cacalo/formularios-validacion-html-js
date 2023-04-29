const form = document.querySelector("form");
const contraseñas = document.querySelectorAll("input[type=password]");
const errorContraseñas = document.getElementById("password2-error");
const botonSubmit = document.querySelector("form button");

document.querySelector("form input[name=nacimiento]").max = 
  (new Date().getFullYear()-18)+
  "-"+(new Date().getMonth()+
  1 < 10 ? "0"+(new Date().getMonth()+1):(new Date().getMonth()+1))+
  "-"+new Date().getDate();

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formulario = getFormulario(e)
  console.log(formulario);
});

/** Revisa un evento del form y crea un elemento de formulario */
function getFormulario(e){
  return {
      nombre: e.target.elements.nombre,
      apellido: e.target.elements.apellido,
      email: e.target.elements.email,
      nacimiento: e.target.elements.nacimiento,
      password: e.target.elements.password,
      password2: e.target.elements.password2,
      invitacion: e.target.elements.invitacion,
      politicas: e.target.elements.politicas,
    };
}