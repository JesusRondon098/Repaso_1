function Zodiac(day:number,month:number){
    let array = ["Acuario" , "Piscis" , "Aries" , "Tauro" , "Gemenis" , "Cancer" , "Leo" , "Virgo" , "Libra" , "Escorpio" , "Sagitario" , "Capricornio"]
    if( (day > 21 && month == 1)|| (day < 19 && month == 2)){
     return "Tu signo es: " + array[0]
    }else if((day > 20 && month == 2)|| (day < 20 && month == 3)){
     return "Tu signo es: " + array[1]
    }else if((day > 21 && month == 3) || (day < 19 && month == 4)){
     return "Tu signo es: " + array[2]
    }else if((day > 20 && month == 4) || (day < 20 && month == 5)){
     return "Tu signo es: " + array[3]
    }else if((day > 21 && month == 5) || (day < 20 && month == 6)){
     return "Tu signo es: " + array[4]
    }else if((day > 21 && month == 6) || (day < 22 && month == 7)){
     return "Tu signo es: " + array[5]
    }else if((day > 23 && month == 7) || (day < 22 && month == 8)){
     return "Tu signo es: " + array[6]
    }else if((day > 23 && month == 8) || (day < 20 && month == 9)){
     return "Tu signo es: " + array[7]
    }else if((day > 23 && month == 9) || (day < 22 && month == 10)){
     return "Tu signo es: " + array[8]
    }else if((day > 23 && month == 10) || (day < 21 && month == 11)){
     return "Tu signo es: " + array[9]
    }else if((day > 22 && month == 11) || (day < 21 && month == 12)){
     return "Tu signo es: " + array[10]
    }else if((day > 22 && month == 12) || (day < 20 && month == 1)) {
     return "Tu signo es: " + array[11]
    }else{
     console.log("ingrese dos numero para el dia y para el mes: Ejemplo.5,1");
    }
 }
 console.log(Zodiac(26,1));
 ////
 console.log("**********************************************");
 ////
 function Continent(country:string) {
     let continentes = ["Europa","America","Asia","Africa","Oceania"]
     if (country == "España" || country == "Suiza" || country==="Alemania" || country == "Holanda" || country == "Portugal"){
      return "El continente del pais es: " + continentes[0]
     }else if(country == "Argentina" || country == "Colombia" || country == "Peru" || country =="Republica dominicana" || country == "Venezuela"){
      return "El continente del pais es: " + continentes[1]
     }else if(country == "China" || country == "Corea" || country == "Japon" || country =="India" || country == "Taiwan"){
      return "El continente del pais es: " + continentes[2]
     }else if(country == "Egipto" || country == "Marruecos" || country == "Sudafrica" || country =="Etiopia" || country == "Somalia"){
      return "El continente del pais es: " + continentes[3]
     }else if(country == "Australia" || country == "Nueva Zelanda" || country == "Tonga" || country =="Palaos" || country == "Fiyi"){
      return "El continente del pais es: " + continentes[4]
     }
 }
 console.log(Continent("Argentina"));
 ////
 console.log("**********************************************");
 ////
 export function isEven(numero : number){  
     if (numero % 2 == 0 ) {
       return `El ${numero}, es un numero par.`
     }else{
       return `El ${numero}, es un numero impar.`
     }    
 }
 console.log(isEven(7));