"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }
    MobileCollection.prototype.getMobile = function () {
        return this.mobiles;
    };
    MobileCollection.prototype.setMobile = function (newMobile) {
        this.mobiles = newMobile;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        return this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function (newTotalPrice) {
        this.totalPrice = newTotalPrice;
    };
    MobileCollection.prototype.printCollection = function () {
        var x;
        for (var i = 0; i < this.mobiles.length; i++) {
            x += this.mobiles[i].printClass();
        }
        return x;
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var x = 0;
        for (var i = 0; i < this.mobiles.length; i++) {
            x += this.mobiles[i].getPrice();
        }
        return x;
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
