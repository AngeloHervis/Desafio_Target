// Resolução Exercício 1

const indice = 13;
soma = 0;
k = 0;

if (k < indice) {
  k += 1;
  soma += k;
}
console.log(soma);

// O resultado foi: 1

console.log("*-----------------------*");

//Resolução Exercício 2

const fibonacci = (numero) => {
  const limite = numero;
  const fibonacci = [0, 1];

  while (fibonacci[fibonacci.length - 1] < limite) {
    fibonacci.push(
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]
    );
  }

  const mensagem =
    fibonacci[fibonacci.length - 1] === limite
      ? `${numero} pertence a sequência de Fibonacci.`
      : `${numero} não pertence a sequência de Fibonacci.`;
  console.log(mensagem);
};

// Teste a função com qualquer número
fibonacci(13); // Exemplo de uso

console.log("*-----------------------*");

//Resolução Exercício 5

const inverterString = (str) => {
  let invertedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertedStr += str[i];
  }
  return invertedStr;
};

// Exemplo de uso:
const minhaString = "Hello, world!";
console.log(inverterString(minhaString));
