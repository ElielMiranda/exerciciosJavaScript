function formataBr(valor) {

    return  valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

}





console.log(formataBr(0.30000000000000004));