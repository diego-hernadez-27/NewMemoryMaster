const formulario = document.getElementById('registrarse');
const inputs = document.querySelectorAll('#registrarse input');

const expresiones = {
	username: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zzA-ZÀ-ÿ\s]{1,20}$/, // Letras y espacios, pueden llevar acentos.
  appe: /^[a-zA-ZÀ-ÿ\s]{1,30}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{8,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validarFormulario = (e) => {
  switch (e.target.name) {
		case "name":
			if(expresiones.name.test(e.target.value)){
				document.getElementById('grupo__name').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__name').classList.add('formulario__grupo-correcto');
				document.querySelector('#grupo__name .formulario__validacion-estado').classList.add('fa-check-circle');
				document.querySelector('#grupo__name .formulario__validacion-estado').classList.remove('fa-times-circle');
				document.querySelector('#grupo__name .formulario__input-error').classList.remove('formulario__input-error-activo');
			}else{
				document.getElementById('grupo__name').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__name').classList.remove('formulario__grupo-correcto');
				document.querySelector('#grupo__name .formulario__validacion-estado').classList.add('fa-times-circle');
				document.querySelector('#grupo__name .formulario__validacion-estado').classList.remove('fa-check-circle');
			  document.querySelector('#grupo__name .formulario__input-error').classList.add('formulario__input-error-activo');
			}
		break;
		case "appe":
			console.log('funciona!');
		break;
		case "email":
			console.log('funciona!');
		break;
		case "username":
			console.log('funciona!');
		break;
		case "password":
			console.log('funciona!');
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
