function jurosSimples (capitalInicial, taxJuros, tempo){
    let jurosNoPeriodo = capitalInicial * taxJuros * tempo / 100;
    return capitalInicial + jurosNoPeriodo;
}

function jurosCompostos(capitalInicial, taxJuros, tempo) {
    return capitalInicial * (1 + taxJuros/100) ** tempo;
}

console.log(jurosSimples(100,10,4));
console.log(jurosCompostos(100,10,4));
