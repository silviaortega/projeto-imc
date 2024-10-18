document.getElementById('form-imc').addEventListener('submit', function(event) {
    event.preventDefault();
    

    // Pegando valores dos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    // Cálculo do IMC
    const imc = peso / (altura * altura);
    const imcResultado = document.getElementById('resultado-imc');
    const imcMensagem = document.getElementById('mensagem-imc');

    // Exibir o IMC na página
    imcResultado.innerText = `Seu IMC é: ${imc.toFixed(2)}`;

    // Verificar a classificação do IMC
    let mensagem;

    if (imc < 18.5) {
        mensagem = 'Você está abaixo do peso. "Cuide-se"';
    } else if (imc >= 18.5 && imc < 25) {
        mensagem = 'Seu peso está normal.';
    } else if (imc >= 25.1 && imc < 30) {
        mensagem = 'Você está acima do peso. "Alerta"';
    } else if (imc >= 30.1 && imc < 40) {
        mensagem = 'Você está muito acima do peso. "Cuide da alimentação"';
    } else {
        mensagem = 'Alerta Vermelho! "Você está com Obesidade Grave"';
    }

    // Exibir a mensagem na página
    imcMensagem.innerText = mensagem;
});
