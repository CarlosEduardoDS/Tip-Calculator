const inputValor = document.getElementById('inputValordaConta');
const buttonCalcular = document.getElementById('resetButton');
const valorPessoa = document.getElementById('valorPorPessoa');
const botoes = document.querySelectorAll('.botaocalculo');
const botaoCustom = document.getElementById('botaocustom');
const numeroPessoas = document.getElementById('inputNumeroPessoas');
const gorjetaPorPessoa = document.getElementById('gorjetaPorPessoa');

let porcentagemGorjeta = 0

function resetarBotoes() {
    botoes.forEach(button => button.classList.remove('active'));
}

botoes.forEach(button => {
    button.addEventListener('click', () => {
        if (button !== botaoCustom) {
            porcentagemGorjeta = parseFloat(button.value); 
            botaoCustom.value = "";
            console.log(porcentagemGorjeta)
        }
    });
});

botaoCustom.addEventListener('input', () => {
    const customValue = parseFloat(botaoCustom.value);
    if (!isNaN(customValue)) {
        porcentagemGorjeta = customValue;
        console.log(porcentagemGorjeta);
    }
})


buttonCalcular.addEventListener('click', () => {
    const valueInput = parseFloat(inputValor.value);
    const valuePessoa = parseInt(numeroPessoas.value);
    
    if (!isNaN(valueInput) && porcentagemGorjeta > 0) {

        const valorgorjeta = (valueInput * porcentagemGorjeta) / 100;
        const gorjeta = valorgorjeta / valuePessoa;

        const valortotal = valorgorjeta + valueInput;
        const valorfinal = valortotal / valuePessoa;

        console.log(`Valor da conta: ${valueInput}`);
        console.log(`Porcentagem da gorjeta: ${porcentagemGorjeta}`);
        console.log(`Valor da gorjeta: ${valorgorjeta}`);
        console.log(`Gorjeta por pessoa ${gorjeta}`);
        console.log(`Valor total por pessoa: ${valorfinal}`)


        gorjetaPorPessoa.textContent = `$${gorjeta.toFixed(2)}`;
        valorPessoa.textContent = `$${valorfinal.toFixed(2)}`;
    } else {
        console.error("Por favor, insira um valor válido para a conta e selecione uma porcentagem.");
    }
})

function resetarBotoes() {
    botoes.forEach(button => {
      button.classList.remove('clicado');
    });
  }
  
  botoes.forEach(button => {
    button.addEventListener('click', () => {
      resetarBotoes();
      button.classList.add('clicado');
    });
  });
  
  botaoCustom.addEventListener('input', () => {
    // ... (resto do seu código)
    resetarBotoes();
    botaoCustom.classList.add('clicado');
  });
  
  buttonCalcular.addEventListener('click', () => {
    resetarBotoes();
    // ... (resto do seu código)
  });
