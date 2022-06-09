/*
Variaveis:
let - escopo local (apenas dentro do bloco de codigo)
var - variavel global
const - variavel constante, nao deixa alterar o seu valor ao decorrer do codigo
*/

/*
Poder ser acessado por
Tag: getElementByTagName()
Id: getElementById()
Nome: getElementsByName()
Classe: getElementsByClassName()
Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

/*
function validarNome() {
  if (nome.value.length < x) {
    alert('Nome invalido! Digite um nome com mais de 3 letras')
  }
}

function validarEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if (email.value.indexOf('@') == -1) {
    alert('Email invalido! Digite um email com @')
  }
} */


/*function validarNome() {
  let txtNome = document.querySelector("#txtNome")
  if(nome.value.length < 3) {
    txtNome.innerHTML = 'Nome invalido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Nome valido'
    txtNome.style.color = 'green'
  }
}*/


function validarNome() {
  let txtNome = document.querySelector('#txtNome')
  
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Invalido'
    txtNome.style.color = 'red'
  } else {
    txtNome.innerHTML = 'Nome Valido'
    txtNome.style.color = 'green'
  }
}


function validarEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    txtEmail.innerHTML = 'Email Invalido'
    txtEmail.style.color = 'red'
  } else {
    txtEmail.innerHTML = 'Email Valido'
    txtEmail.style.color = 'green'
  }
}


function validarAssunto() {
  let txtAssunto = document.querySelector('#txtAssunto')
  if (assunto.value.length >= 100) {
    txtAssunto.innerHTML = 'Texto muito grande, digite no maximo 100 caracteres'
    txtAssunto.style.color = 'red'
  } else {
    txtAssunto.innerHTML = 'Mensagem Valida'
    txtAssunto.style.color = 'green'
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

