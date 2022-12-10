"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(lastname, firstname, birthday, adress, position) {
        this.lastname = lastname;
        this.firstname = firstname;
        this.birthday = birthday;
        this.adress = adress;
        this.position = position;
    }
    User.prototype.getLastname = function () {
        return this.lastname;
    };
    User.prototype.getFirstname = function () {
        return this.firstname;
    };
    User.prototype.getBirthday = function () {
        return this.birthday;
    };
    User.prototype.getAdress = function () {
        return this.adress;
    };
    User.prototype.getPosition = function () {
        return this.position;
    };
    return User;
}());
exports["default"] = User;
