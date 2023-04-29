const form = document.querySelector("form");
const contraseñas = document.querySelectorAll("input[type=password]");
const errorContraseñas = document.getElementById("password2-error");
const botonSubmit = document.querySelector("form button");

const validezFormulario = new Array(form.children.length-1).fill(false)

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formulario = getFormulario(e)
  console.log(formulario);
});

//Eventos para cada input que revisan su validez
document.querySelector("form input[name=nombre]").addEventListener("blur",(e)=>{
  validezFormulario[0] = e.target.value.length > 3;
  e.target.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[0])
  controlarFormulario();
})
document.querySelector("form input[name=apellido]").addEventListener("blur",(e)=>{
  validezFormulario[1] = e.target.value.length > 3;
  e.target.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[1])
  controlarFormulario();
})
document.querySelector("form input[name=email]").addEventListener("blur",(e)=>{
  validezFormulario[2] = e.target.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
  e.target.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[2])
  controlarFormulario();
})
document.querySelector("form input[name=nacimiento]").addEventListener("blur",(e)=>{
  const edad = (new Date().getTime() - new Date(e.target.value).getTime())/31556926000;
  validezFormulario[3] = edad >= 18;
  e.target.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[3])
  controlarFormulario();
})
document.querySelector("form input[name=password]").addEventListener("blur",(e)=>{
  validezFormulario[4] = e.target.value.length > 8;
  e.target.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[4])
  controlarFormulario();
})
document.querySelector("form input[name=password2]").addEventListener("blur",(e)=>{
  validezFormulario[5] = e.target.value === document.querySelector("form input[name=password]").value;
  e.target.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[5])
  controlarFormulario();
})
document.querySelector("form input[name=invitacion]").addEventListener("blur",(e)=>{
  validezFormulario[6] = e.target.value.match(/[a-zA-Z]{4}-[0-9]{4}/) || e.target.value.length === 0;
  e.target.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[6])
  controlarFormulario();
})
document.querySelector("form input[name=politicas]").addEventListener("blur",(e)=>{
  validezFormulario[7] = e.target.checked;
  e.target.parentElement.parentElement.querySelector(".error").classList.toggle("escondido",validezFormulario[7])
  controlarFormulario();
})

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

/** Revisa la validez del formulario y habilita/deshabilita el boton submit */
function controlarFormulario(){
  const validez = validezFormulario.reduce((acumulado,actual) => acumulado && actual);
  botonSubmit.disabled = !validez;
}