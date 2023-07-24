function hasEven(myNums){
    let i = 0
    while(i< myNums.length){
       if(myNums[i]%2==0){
        return `Si hay numeros pares `
       }
      i++ 
    } 
}
let numeros = [1,3,4,5,6,7,8,9]
console.log(hasEven(numeros));
//
console.log("*******************");
//
function startWith(myName){
    let i = 0
    while(i <= myName.length){
      if(myName[i][0].toUpperCase() == "M"){
        return "Verdadero"
      }
    }
}
let nombres = ["Muisa", "Mernando", "Mirian"]
console.log(startWith(nombres));