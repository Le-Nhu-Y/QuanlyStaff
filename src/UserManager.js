"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var readlineSync = require('readline-sync');
var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.addUser = function () {
        var lastname = readlineSync.question('Add Lastname: ');
        var firstname = readlineSync.question('Add Firstname: ');
        var birthday = readlineSync.question('Add Birthday: ');
        var adress = readlineSync.question('Add Adress: ');
        var position = readlineSync.question('Add Position: ');
        var user = new User_1["default"](lastname, firstname, birthday, adress, position);
        this.users.push(user);
    };
    UserManager.prototype.showList = function () {
        console.table(this.users);
    };
    UserManager.prototype.deleteUser = function () {
        var index = readlineSync.question('Nhap vi tri can xoa: ');
        this.users.splice(index, 1);
    };
    return UserManager;
}());
exports["default"] = UserManager;
