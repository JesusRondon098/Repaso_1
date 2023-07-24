"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mobile = void 0;
var Mobile = /** @class */ (function () {
    function Mobile(name, trademark, model, color, price) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }
    Mobile.prototype.getName = function () {
        this.name;
    };
    Mobile.prototype.setName = function (newName) {
        this.name = newName;
    };
    Mobile.prototype.printName = function () {
        return this.name;
    };
    Mobile.prototype.getTrademark = function () {
        this.trademark;
    };
    Mobile.prototype.setTrademark = function (newTrademark) {
        this.trademark = newTrademark;
    };
    Mobile.prototype.printTrademark = function () {
        return this.trademark;
    };
    Mobile.prototype.getModel = function () {
        this.model;
    };
    Mobile.prototype.setModel = function (newModel) {
        this.model = newModel;
    };
    Mobile.prototype.printModel = function () {
        return this.model;
    };
    Mobile.prototype.getColor = function () {
        this.color;
    };
    Mobile.prototype.setColor = function (newColor) {
        this.color = newColor;
    };
    Mobile.prototype.printColor = function () {
        return this.color;
    };
    Mobile.prototype.getPrice = function () {
        return this.price;
    };
    Mobile.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
    };
    Mobile.prototype.printPrice = function () {
        return this.price;
    };
    Mobile.prototype.printClass = function () {
        return "\"The characteritics of the mobile name are\"\n                .Name: ".concat(this.name, "\n                .Trademark: ").concat(this.trademark, "\n                .Model: ").concat(this.model, "\n                .Color: ").concat(this.color, "\n                .Price: ").concat(this.price);
    };
    return Mobile;
}());
exports.Mobile = Mobile;
