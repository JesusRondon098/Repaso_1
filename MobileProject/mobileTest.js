"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mobile_1 = require("./mobile");
var myMobile = new mobile_1.Mobile("Polo", "Saga", "Talla", "Blanco", 20);
var myMobile1 = new mobile_1.Mobile("Iphone", "Tottus", "xR", "Azul", 100);
var myMobile2 = new mobile_1.Mobile("Samsung", "Lottus", "Jt1", "Negro", 50);
var myMobile3 = new mobile_1.Mobile("Nokio", "Coolbox", "TR3", "Gris", 70);
var myMobiles = [myMobile, myMobile1, myMobile2, myMobile3];
console.log(myMobiles[0].printClass());
console.log(myMobiles[1].printClass());
console.log(myMobiles[2].printClass());
console.log(myMobiles[3].printClass());
