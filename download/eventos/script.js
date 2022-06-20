//Eventos
/* AddEvenetListener - Adiciona uma função ao elemento, chamada de callback, que será ativada assim que o evento ocorrer no elemento */

const img = document.querySelector("img");

function clicarImagem() {
  console.log("Clicou");
}
img.addEventListener("click", clicarImagem);

const aniamisLista = document.querySelector(".animais-lista");

function callbackLista(event) {
  console.log(event.currentTarget); //mesma função do this
  console.log(event.target); //mostra exatamente onde foi o click na tela
  console.log(event.type); //tipo de evento
  console.log(event.path); //mostra o caminho
}
aniamisLista.addEventListener("click", callbackLista);

//this
const imag = document.querySelector("img");
function callback(event) {
  console.log(this);
  console.log(this.getAttribute("src"));
}
imag.addEventListener("click", callback);

//evento keybord
function handlekeyboard(event) {
  if (event.key === "a") {
    document.body.classList.toggle("azul");
  }
}

window.addEventListener("keydown", handlekeyboard);

//links internos selecionados add a classe "ativo" e remova dos demais
const linksInternos = document.querySelectorAll('a[href^="#"]')
  function handleLink(event) {
    event.preventDefault()
    linksInternos.forEach((link) => {
      link.classList.remove('ativo')
    })
    event.currentTarget.classList.add('ativo')
  }
  linksInternos.forEach((link) => {
  link.addEventListener("click", handleLink)
})


//Selecionar todos os elementos do site
const todosElementos = document.querySelectorAll('body *')
  function handleElemento(event) {
    console.log(event.currentTarget)
    //event.currentTarget.remove() //remove as áreas que forem clicadas dos site
  }

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento)
})


//se o usário clicar na tecla T , aumente todo o texto do site
function handleClickT(event) {
  console.log(event.key)
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
  }
}
window.addEventListener('keydown', handleClickT)