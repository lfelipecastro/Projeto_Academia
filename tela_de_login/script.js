const email = document.getElementById('email-login');
const senha = document.getElementById('senha-login');
const botao = document.getElementById('botão-login');
const cadastro = document.getElementById('cadastro-login');
const esqueci = document.getElementById('esqueci-login');

const emailExemplo = "exemplo@exemplo.com";
const senhaExemplo = "12345678";
let clicado = false;

function botaoPressionado(){
    let emailValor = email.value;
    let senhaValor = senha.value;
    if(emailValor != emailExemplo || senhaValor != senhaExemplo){
        alert("E-mail ou Senha Errado!");
    }else{
        alert("E-mail e Senha Ok!");
    }
}

function irCadastro(){
    window.location.href = "http://127.0.0.1:5500/tela_cadastro/index.html";
}

botao.addEventListener('click', botaoPressionado);
cadastro.addEventListener('click', irCadastro);