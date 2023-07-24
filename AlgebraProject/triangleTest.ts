import { Triangle } from "./triangle";
import { Point } from "./point";
let punto: Point = new Point(7,8);
let punto1: Point = new Point(6,4);
let punto2: Point = new Point(3,1);

let triangle : Triangle = new Triangle(punto,punto1,punto2);

console.log(triangle.calculateLengthSides());