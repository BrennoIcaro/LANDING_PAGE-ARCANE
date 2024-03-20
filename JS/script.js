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