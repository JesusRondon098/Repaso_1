"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var pointTest_1 = require("./pointTest");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (newX) {
        return this.x = newX;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.setY = function (newY) {
        return this.y = newY;
    };
    Point.prototype.toString = function () {
        return "(".concat(this.x, ",").concat(this.y, ")");
    };
    Point.prototype.distanceToOrigin = function () {
        return Math.round(Math.sqrt(this.x * this.x + this.y * this.y));
    };
    Point.prototype.calculateDistance = function (another) {
        var a = this.x - another.getX();
        var b = this.y - another.getY();
        return Math.round(Math.sqrt(a * a + b * b));
    };
    Point.prototype.calculateQuadrant = function () {
        if (this.x == 0 || this.y == 0) {
            return 0;
        }
        else if (this.x > 0 && this.y > 0) {
            return 1;
        }
        else if (this.x < 0 && this.y > 0) {
            return 2;
        }
        else if (this.x < 0 && this.y < 0) {
            return 3;
        }
        else if (this.x > 0 && this.y < 0) {
            return 4;
        }
    };
    Point.prototype.calculateNearest = function (points) {
        var puntoCercano = pointTest_1.arrayPoint[0];
        var distancia = this.calculateDistance(puntoCercano);
        for (var i = 0; i < pointTest_1.arrayPoint.length; i++) {
            var distance = this.calculateDistance(pointTest_1.arrayPoint[i]);
            if (distance < distancia) {
                puntoCercano = pointTest_1.arrayPoint[i];
                distancia = distance;
            }
        }
        return puntoCercano;
    };
    return Point;
}());
exports.Point = Point;
