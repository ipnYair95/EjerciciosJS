"use strict";
exports.__esModule = true;
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario() {
    }
    Object.defineProperty(Usuario.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "dateBirth", {
        get: function () {
            return this._dateBirth;
        },
        set: function (dateBirth) {
            this._dateBirth = dateBirth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Usuario.prototype, "yearsOld", {
        get: function () {
            return this._yearsOld;
        },
        set: function (yearsOld) {
            this._yearsOld = yearsOld;
        },
        enumerable: false,
        configurable: true
    });
    return Usuario;
}());
exports.Usuario = Usuario;
