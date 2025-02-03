function contarPalavras(frase) {
    if (typeof frase !== 'string' || !frase.trim()) {
        return "Por favor, forneça uma frase válida.";
    }
    
    let palavras = frase.trim().split(/\s+/);
    return `Quantidade de palavras: ${palavras.length}`;
}

// Frase proposta
testFrase = "A ModalGR está criando soluções incríveis.";
console.log(contarPalavras(testFrase));

// Teste interativo
const inputFrase = prompt("Digite uma frase para que seja contada as palavras:");
console.log(contarPalavras(inputFrase));
