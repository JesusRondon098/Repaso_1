import { Mobile } from "./mobile";

let myMobile = new Mobile("Polo", "Saga", "Talla", "Blanco", 20 )
let myMobile1 = new Mobile("Iphone","Tottus", "xR", "Azul", 100)
let myMobile2 = new Mobile("Samsung", "Lottus", "Jt1", "Negro", 50)
let myMobile3 = new Mobile("Nokio", "Coolbox", "TR3", "Gris", 70)

let myMobiles = [myMobile, myMobile1, myMobile2, myMobile3]
console.log(myMobiles[0].printClass());
console.log(myMobiles[1].printClass());
console.log(myMobiles[2].printClass());
console.log(myMobiles[3].printClass());
