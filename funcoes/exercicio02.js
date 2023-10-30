function tipoTriangulo(a, b, c){
    if(a==b || a==c || b==c){
        if(a==b && b==c){
            console.log('Equilátero');
        }else{
            console.log('Isósceles');
        }
    }else {
        console.log('Escaleno');
    }
}


tipoTriangulo(1,1,1);
tipoTriangulo(1,1,2);
tipoTriangulo(1,2,1);
tipoTriangulo(7,9,3);
tipoTriangulo(1,2,2);