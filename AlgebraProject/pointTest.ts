import { Point } from "./point";

let myPoint1: Point = new Point(1,-6);
let myPoint2: Point = new Point(1,-5);
let mypoint4: Point = new Point(34,7);

export let arrayPoint = [myPoint1,myPoint2,mypoint4]
console.log(myPoint1.toString());
console.log(myPoint1.distanceToOrigin());
console.log(myPoint1.calculateDistance(myPoint2));
console.log(myPoint1.calculateQuadrant());
console.log(myPoint1.calculateNearest(arrayPoint));