const exercicio1 = () => {
  // capturar o elemento "resposta"
  let resposta = document.getElementById("resposta");

  //variavel para armazenar o resultado do programa
  let resultado = "#";

  // loop de 1 até 10 usando for
  for (let i = 0; i <= 10; i++) {
    resultado += i + "#";
  }
  // exibir o resultado
  resposta.innerHTML = resultado;
  return;
};

const exercicio2 = () => {
  let resposta = document.getElementById("resposta");
  let numero = document.getElementById("num").value;
  let resultado = "@";

  for (let i = 0; i <= numero; i++) {
    if (numero % 2 == 0) {
      resultado += i + "@";
    }
  }
  resposta.innerHTML = resultado;
};

const exercicio3 = () => {
    let resultado = document.getElementById("resultado");

    let erro = document.getElementById("erro");

    let numero = document.getElementById("num").value;

    // Variável Booleana apenas true/false
    let primo = true

    if (numero <= 0){
        erro.innerHTML = 'Digite um número maior que 0'
        resultado.innerHTML = '';
        return; //interrompe a função
    } else {
        //  Loop para verificar se existe algum divisor
        // além de 1 e ele mesmo
        for(let i = 2; i < numero; i++){
            if(numero % i == 0){
                primo = false;
            }
        }
    }

    //Verificação Final
    if(primo){
        // Se permacer true ao tentar validar
        // ele será primo
        resultado.innerHTML = `O número ${numero} é primo`;
        erro.innerHTML = '';
    } else {
        resultado.innerHTML = `O número ${numero} não é primo`;
        erro.innerHTML = '';
    }
}

const exercicio4 = () => {
    let resposta = document.getElementById("resposta")

    let erro = document.getElementById("erro")

    let resultado = document.getElementById("resultado")

    let vaide = '#'
    for (let i = 0; i <= 10;) {
        vaide = i * "#"
    }
  resposta.innerHTML = resultado;


};



const exercicio16 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num1");

  if (numero <= 0) {
    resultado.innerHTML = "";
    erro.innerHTML = "digite um numero maior que 0";
  } else {
    erro.innerHTML = "";
    let calculo = 2 * parseFloat(numero) * Math.PI;
    resultado.innerHTML = calculo;
  }
};

/** Cria as funções para os 25 exercícios propostos. **/

const exercicio25 = () => {};
