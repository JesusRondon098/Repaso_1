function evenNumbers(numero){
    for(let i = 1 ; i <= numero; i+=2){
     console.log(i);
    }
 }
 new evenNumbers(8)
 //
 console.log("*******************");
 //
 function myRevert(myArray){
     let array = []
     for(let i = myArray.length - 1; i >= 0 ; i-- ){
       array += myArray[i];
     }
     return array
 }
 console.log(myRevert([1,2,3,4,5,6,7,8,9]));
 //
 console.log("*******************");
 //
 function isRainbow(colores){
      for(let colors of colores){
         if(colors.includes("Rojo")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Naranja")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Amarillo")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Verde")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Azul")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else if(colors.includes("Violeta")){
         console.log("El " + colors + " esta dentro del arcoiris.");
      }else{
         console.log("El "+ colors + " no esta dentro del arcoiris.");
      }
  }
 }
 let colores = ["Rojo" , "Naranja", "Negro"]
 isRainbow(colores)
 //
 console.log("*******************");
 //
 export function add(myWords){
    let x = 0
    for(let reducir of myWords){
       x += reducir.length
    }
    return x
 }
 let array = ["Hola", "Dia", "Mañana"]
 console.log(add(array));