
//Guardar info de usuarios en el DOM

const form1 = document.getElementById('form1')

const inputName = document.getElementById('name')

const inputEmail = document.getElementById('email')

const inputPassword = document.getElementById('password')

const inputConfirm_pwrd = document.getElementById('confirm_pwrd')

const message = document.getElementById('message')

const messageWarning = document.getElementsByClassName('messageWarning')

const success_msg = document.getElementById('success_msg')

const sendButton = document.getElementById('sendButton')

function onSubmit(event) {
    event.preventDefault()
    //Recogemos el valor de lo introducido en cada parte
    const nameValue = inputName.value 
    const emailValue = inputEmail.value
    const passwordValue = inputPassword.value
    const confirm_pwrdValue = inputConfirm_pwrd.value   
    
    //Se muestra en cosola
    console.log(nameValue);
    console.log(emailValue);
    console.log(passwordValue);
    console.log(confirm_pwrdValue);

    //Guarda la info recogida en localStorage (EN APARTADO DE APPLICATION)
    localStorage.setItem('name', nameValue)
    localStorage.setItem('email', emailValue)
    localStorage.setItem('password', passwordValue)
    localStorage.setItem('confirm_pwrd', confirm_pwrdValue)

    //Validación que obligue a rellenar todos los campos
    if(nameValue === '' || emailValue === '' || passwordValue === '' || confirm_pwrdValue === ''){
        message.innerHTML = '(Rellena todos los campos)'
        return messageWarning.innerText = '*'
        }
        //Validación para el correo
        else if(/(\w+?@\w+?\x2E.+)/.test(emailValue) !== true){
        return message.innerText = 'Introduzca un correo válido'
        }
  
    //Validación contraseña 1 igual a contraseña 2.

        else if(passwordValue !== confirm_pwrdValue) {
        return  message.innerText = 'Las contraseñas no coinciden'
        }

        //Validación de contraseña
        else if (/()/.test(passwordValue) !== true) {
        return  message.innerText = 'Introduzca caracteres válidos en la contraseña'
        }

    //Llama a la funcion redireccionar en caso de que no hay ningun fallo
    redireccionar()
   
}

//Define la función redireccionar
function redireccionar(){
    success_msg.innerHTML = 'Usuario creado correctamente'
    setTimeout(function () {location.href = "./usuarios.html"}, 3000)
    

}

sendButton.addEventListener('click',onSubmit)


//PAGINA USUARIOS

const card1 = document.getElementById('card1')

const newCard = document.createElement('card')

document.body.appendChild(newCard)



