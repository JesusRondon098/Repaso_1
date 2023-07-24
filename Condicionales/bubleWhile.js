function hasEven(myNums) {
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 == 0) {
            return "Si hay numeros pares ";
        }
        i++;
    }
}
var numeros = [1, 3, 4, 5, 6, 7, 8, 9];
console.log(hasEven(numeros));
//
console.log("*******************");
//
function startWith(myName) {
    var i = 0;
    while (i <= myName.length) {
        if (myName[i][0].toUpperCase() == "M") {
            return "Verdadero";
        }
    }
}
var nombres = ["Muisa", "Mernando", "Mirian"];
console.log(startWith(nombres));
