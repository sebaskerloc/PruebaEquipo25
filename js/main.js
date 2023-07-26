//Hoisting
function suma(a,b){
    return a+b;
} //suma

function resta(x,y){
    return x-y;
}//resta



console.log(suma(45,13));
console.log(resta(45,13));



let multiplica = function (a,b){
    return a*b;
}//multiplica

console.log("multiplica 3x6:", multiplica(3,6));

const suma3 = (a,b,c)=>(a+b+c);
console.log("Suma 3 números:(5,48,79):", suma3(5,48,79));

const suma4 = (a,b,c,d) => {
    let e = a+b+c+d;
    return e;
}
console.log("Suma 4 números:(5,48,79,7):", suma4(5,48,79,7));














