"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var triangle_1 = require("./triangle");
var point_1 = require("./point");
var punto = new point_1.Point(7, 8);
var punto1 = new point_1.Point(6, 4);
var punto2 = new point_1.Point(3, 1);
var triangle = new triangle_1.Triangle(punto, punto1, punto2);
console.log(triangle.calculateLengthSides());
