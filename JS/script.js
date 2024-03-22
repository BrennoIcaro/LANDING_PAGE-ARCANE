const video = document.getElementById('arcaneBackg');
const button = document.getElementById('btn-pause');


button.addEventListener('click', function() {
    if (video.paused) {
        video.play();
        button.textContent = 'PAUSAR VIDEO';
    } else {
        video.pause();
        button.textContent = 'REPRODUZIR VIDEO';
    }
});



/* Tela de login */

function fazer_login(){


    var nome = formlogin.nome;
    var senha = formlogin.senha;


    if(nome.value == ""){

       alert("Nickname não preenchido");
       nome.focus();
       
    }

       else if(senha.value == "") {

          alert("Campo senha não preechido");
          senha.focus();
    }
};

/* Slide */

const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

/* Tela Cadastro */


function fazer_cadastro(){


  var email = formCadastro.email;
  var senha = formCadastro.senha;
  var nick = formCadastro.Nickname;
  var senhaC = formCadastro.senhaC;
  
  if(email.value == ""){

     alert("Email não preenchido");
     email.focus();
     
     } else if(nick.value == "") {

        alert("Nickname não informado");
        nick.focus();

     } else if(senha.value == "") {

         alert("Campo senha não preenchido");
         senha.focus();

     } else if(senhaC.value == "") {

           alert("Confirmação da senha não foi preenchido");
           senhaC.focus();

     } 
};