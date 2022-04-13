const formulario = document.getElementById('registrarse');
const inputs = document.querySelectorAll('#registrarse input');

const expresiones = {
	username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
  appelidos: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarFormulario = (e) => {
  switch (e.target.name){
    case "username":
      if(expresiones.username.test(e.target.value)){

      }else{
        document.getElementById('grupo__username').classList.add('formulario__grupo-incorrecto')
      }
    break;
    case "name":

    break;
    case "appe":

    break;
    case "email":

    break;
    case "password":

    break;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
});
