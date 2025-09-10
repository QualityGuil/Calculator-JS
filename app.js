// Associando todos os tipos de botoões as suas determinadas variáveis
const botoes = document.querySelectorAll('.botao');
const limparBtn = document.querySelector('.limpar');
const apagarBtn = document.querySelector('.apagar');
const calcularBtn = document.querySelector('.calcular');

// Variável de resultado
let resultado = document.getElementById('resultado');

// Função de inserção de caracteres no input
botoes.forEach(botao => {
    botao.addEventListener('click', function adicionar() {
        let valor = this.innerText;
        resultado.value = resultado.value + valor;
    });
});

// Função para limpar o display da calculadora
function limpar() {
    resultado.value = '';
}

limparBtn.addEventListener('click', () => {
    limpar();
});

// Função para apagar ultimo caractere adicionado ao display
apagarBtn.addEventListener('click', () => {
    resultado.value = resultado.value.slice(0, -1);
})

// Função para realizar calculo
function calcular() {
    if (resultado.value) {
        // eval é uma função especifica para realização de calculos em formato de string
        resultado.value = eval(resultado.value);
    }
}

calcularBtn.addEventListener('click', () => {
    calcular();
})

// Funcionalidades do teclado
resultado.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        limpar();
        event.preventDefault();
    }

    if (event.key === 'Enter') {
        calcular();
    }
});