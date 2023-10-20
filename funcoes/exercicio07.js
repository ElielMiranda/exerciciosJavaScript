function formBhaskara(a, b, c) {
    let xs= [];
    let delta = b ** 2 - (4*a*c);

    if(delta < 0){
        return "Delta é negativo";
    } 
    let x1 = (-b + Math.sqrt(delta)) / (2*a);
    let x2 = (-b - Math.sqrt(delta)) / (2*a);

    xs.push(x1);
    xs.push(x2);
    
    return xs;

}

console.log(formBhaskara(4,6,0));