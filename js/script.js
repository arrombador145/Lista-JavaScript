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
//----------------------------------------------------

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
//------------------------------------------------------

const exercicio3 = () => {
  let resultado = document.getElementById("resultado");

  let erro = document.getElementById("erro");

  let numero = document.getElementById("num").value;

  // Variável Booleana apenas true/false
  let primo = true;

  if (numero <= 0) {
    erro.innerHTML = "Digite um número maior que 0";
    resultado.innerHTML = "";
    return; //interrompe a função
  } else {
    //  Loop para verificar se existe algum divisor
    // além de 1 e ele mesmo
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) {
        primo = false;
      }
    }
  }

  //Verificação Final
  if (primo) {
    // Se permacer true ao tentar validar
    // ele será primo
    resultado.innerHTML = `O número ${numero} é primo`;
    erro.innerHTML = "";
  } else {
    resultado.innerHTML = `O número ${numero} não é primo`;
    erro.innerHTML = "";
  }
};
//----------------------------------------------------------
const exercicio4 = () => {
  let calc = document.getElementById("num").value;

  resultado.innerHTML = "";
  for (let i = 0; i <= 10; i++) {
    resultado.innerHTML += `${calc} x ${i} = ${calc * i} <br>`;
  }
};

//------------------------------------------------------------
const exercicio5 = () => {
  let numero = document.getElementById("num").value;
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  let contador = 0;

  while (contador <= numero) {
    if (contador % 2 !== 0) resultado.innerHTML += contador + " | ";
    contador++;
  }
};
//------------------------------------------------------------
const exercicio6 = () => {
  let toaki = parseInt(document.getElementById("num").value)
  let resultado = document.getElementById("resultado")

  resultado.innerHTML = ""
  for (let i =+ 0; i <= toaki; let = i++) {
    resultado.innerHTML += `${toaki} + ${i} = ${toaki + i} <br>`;
  }
  
};
//------------------------------------------------------------
const exercicio7 = () => {
   let resultado = document.getElementById("")
  while (10 >= 1) {
    
  }
};
//------------------------------------------------------------
const exercicio8 = () => {
  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let palavra = document.getElementById("palavra").value;

  // Limpar os campos da tela, caso tenha alguma coisa.
  resultado.innerHTML = "";
  erro.innerHTML = "";

  // Variavel para armazenar a palavra invertida
  let palavraInvertida = "";

  //Loop de 1 até o "tamanho" da palavra
  for (let i = palavra.length - 1; i >= 0; i--) {
    palavraInvertida += palavra[i];
  }

  // Exibir a palavra invertida no resultado
  resultado.innerHTML = `A palavra invertida é: ${palavraInvertida}`;
  erro.innerHTML = "";

  if (palavra == palavraInvertida) {
    resultado.innerHTML += "<br/> A palavra é um palíndromo";
  } else {
    resultado.innerHTML += "<br/> A palavra não é um palíndromo";
  }
};


//------------------------------------------------------------
  let soma = 0;
  let  contador = 0;
const exercicio10 = () => {

  let resultado = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let numero = document.getElementById("num").value;

  /*
if (numero != "0"){
  soma += parseFloat(numero)
  contador++
}

resultado.innerHTML = `a média dos numeros  digitados é ${soma/contador}`
erro.innerHTML = "";
};
*/
while (numero != "0") {
  soma += parseFloat(numero)
  contador++
  numero = prompt("digite um número: ")
}
if (contador > 0) {
  resultado.innerHTML = `foram digitados ${contador} numeros. a media da soma dos numeros digitados é: ${soma / contador}`;
  erro.innerHTML = "";
}
soma = 0;
contador = 0;
}
//------------------------------------------------------------
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