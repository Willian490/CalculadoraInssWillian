document.addEventListener('DOMContentLoaded', () => {
    const salarioInput = document.getElementById('salario');
    const inssSpan = document.getElementById('inss');
    const liquidoSpan = document.getElementById('liquido');
    const calcularButton = document.getElementById('calcular');

    // Função para calcular o desconto do INSS
    function calcularINSS(salario) {
        let inss = 0;

        if (salario <= 1412.00) {
            inss = salario * 0.075;
        } else if (salario <= 2666.68) {
            inss = salario * 0.09;
        } else if (salario <= 4000.03) {
            inss = salario * 0.12;
        } else if (salario <= 7786.02) {
            inss = salario * 0.14;
        }
        else if(salario > 7786.03){
            inss = salario *0.14;
        }

        return inss;
    }

    // Função para atualizar os valores
    function atualizarValores() {
        const salarioBruto = parseFloat(salarioInput.value) || 0;
        const inss = calcularINSS(salarioBruto);
        const salarioLiquido = salarioBruto - inss;

        // Atualiza os spans com os novos valores
        inssSpan.textContent = `R$ ${inss.toFixed(2)}`;
        liquidoSpan.textContent = `R$ ${salarioLiquido.toFixed(2)}`;
    }

    // Adiciona um listener para o botão de calcular
    calcularButton.addEventListener('click', atualizarValores);
});
