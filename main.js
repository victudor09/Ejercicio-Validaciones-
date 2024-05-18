
//Guardar info de usuarios en el DOM

const form1 = document.getElementById('form1')

const inputName = document.getElementById('name')

const inputEmail = document.getElementById('email')

const inputPassword = document.getElementById('password')

const inputConfirm_pwrd = document.getElementById('confirm_pwrd')

const message = document.getElementById('message')

const success_msg = document.getElementById('success_msg')

const sendButton = document.getElementById('sendButton')


function onSubmit(event) {
    event.preventDefault()
    //Recogemos el valor de lo introducido en cada parte
    const nameValue = inputName.value 
    const emailValue = inputEmail.value
    const passValue = inputPassword.value
    const passcValue = inputConfirm_pwrd.value

    //Validación que obligue a rellenar todos los campos
    if(nameValue === '' || emailValue === '' || passValue === '' || passcValue === ''){
        return message.innerHTML = '(Rellena todos los campos)'
        }

    //Validación para el correo
        else if(/(\w+?@\w+?\x2E.+)/.test(emailValue) !== true){
        return message.innerText = 'Introduzca un correo válido'
        }
  
    //Validación contraseña 1 igual a contraseña 2.

        else if(passValue !== passcValue) {
        return  message.innerText = 'Las contraseñas no coinciden'
        }

    //Validación de contraseña
        else if (/()/.test(passValue) !== true) {
        return  message.innerText = 'Introduzca caracteres válidos en la contraseña'
        }

    //Llama a la funcion que define y guarda valores de usuarios
    saveDataStorage()

    //Llama a la funcion redireccionar en caso de que no hay ningun fallo
    redireccionar()
}

//Defino la función que guarda datos de usurios

function saveDataStorage(){  
    //Guarda la info recogida en localStorage (EN APARTADO DE APPLICATION)
    const userData = {
        userName: inputName.value,
        userEmail: inputEmail.value,
        userPass: inputPassword.value,
        userPassC: inputConfirm_pwrd.value
    }
    localStorage.setItem('userData', JSON.stringify(userData))
}

//Define la función redireccionar
function redireccionar(){
    success_msg.innerHTML = 'Usuario creado correctamente'
    setTimeout(function () {location.href = "./usuarios.html"}, 3000)
}

sendButton.addEventListener('click',onSubmit)