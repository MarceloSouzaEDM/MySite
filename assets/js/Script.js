let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


nome.style.width= "100%"
email.style.width= "100%"

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <= 0){
        txtNome.innerHTML = "Campo Obrigatório."
        txtNome.style.color = "red"
}
else if(nome.value.length <= 2){
        txtNome.innerHTML = "Seu nome deve conter no mínimo 3 caracteres."
        txtNome.style.color = "red"

    }else{
        txtNome.innerHTML = "Nome válido."
        txtNome.style.color = "green"
    }
}
function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.length <= 0){
        txtEmail.innerHTML = "Campo Obrigatório."
        txtEmail.style.color = "red"
}
else if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){ 
        txtEmail.innerHTML = "Email inválido, por favor digite novamente seu email."
        txtEmail.style.color = "red"

    }else{
        txtEmail.innerHTML = "Email válido."
        txtEmail.style.color = "green"
    }
}
function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
   
    if(assunto.value.length <= 0){
        txtAssunto.innerHTML = "Campo Obrigatório."
        txtAssunto.style.color = "red"
    }else if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Resuma seu assunto em até 100 caracteres"
        txtAssunto.style.color = "red"

    }else{
        txtAssunto.innerHTML = " "
    }
    
}