"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileCollection = void 0;
var mobile_1 = require("./mobile");
var MobileCollection = /** @class */ (function () {
    function MobileCollection(mobiles) {
        this.mobiles = mobiles;
        this.totalPrice;
    }
    MobileCollection.prototype.getMobile = function () {
        this.mobiles;
    };
    MobileCollection.prototype.setMobile = function (newMobile) {
        this.mobiles = newMobile;
    };
    MobileCollection.prototype.getTotalPrice = function () {
        this.totalPrice;
    };
    MobileCollection.prototype.setTotalPrice = function () {
        this.totalPrice = mobile_1.Mobile[4];
    };
    MobileCollection.prototype.totalPriceCalculation = function () {
        var x = [];
        for (var _i = 0, _a = this.mobiles; _i < _a.length; _i++) {
            var mob = _a[_i];
            x.push();
        }
    };
    MobileCollection.prototype.printColection = function () {
        return "The Characteristics of the ".concat(this.mobiles, "\n         .Name : ").concat(this.mobiles, "\n         .Trademark : ");
    };
    return MobileCollection;
}());
exports.MobileCollection = MobileCollection;
