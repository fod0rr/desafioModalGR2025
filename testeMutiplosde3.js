function gerarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarVetorAleatorio(tamanho, min, max) {
  const vetor = [];
  for (let i = 0; i < tamanho; i++) {
    vetor.push(gerarNumeroAleatorio(min, max));
  }
  return vetor;
}

function separarMultiplos(vetor, divisor) {
  const multiplos = [];
  const naoMultiplos = [];
  vetor.forEach((numero) => {
    if (numero % divisor === 0) {
      multiplos.push(numero);
    } else {
      naoMultiplos.push(numero);
    }
  });
  return { multiplos, naoMultiplos };
}

// Gerando o vetor com 50 números aleatórios entre 1 e 100
const vetorOriginal = gerarVetorAleatorio(50, 1, 100);

// Separando os números múltiplos de 3 e os não múltiplos de 3
const { multiplos, naoMultiplos } = separarMultiplos(vetorOriginal, 3);

// Exibindo os resultados
console.log("Vetor Original:", vetorOriginal);
console.log("Múltiplos de 3:", multiplos);
console.log("Não Múltiplos de 3:", naoMultiplos);
