function mostrarValor() {
    let escolha = prompt("Escolha uma bebida (café, leite ou chá):").toLowerCase();
    let valor;

    switch (escolha) {
        case 'café':
            valor = 3.50;
            alert("Você escolheu café.");
            break;
        case 'leite':
            valor = 2.50;
            alert("Você escolheu leite.");
            break;
        case 'chá':
            valor = 2.00;
            alert("Você escolheu chá.");
            break;
        default:
            alert("Opção inválida. Escolha entre café, leite ou chá.");
            valor = null; // Valor não definido para opção inválida
    }

    if (valor !== null) {
        alert(`Valor a ser pago: R$ ${valor.toFixed(2)}`);
    }
}

// Chama a função automaticamente quando a página é carregada
window.onload = mostrarValor;
