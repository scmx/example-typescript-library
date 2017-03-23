"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var Hello = (function () {
    function Hello() {
    }
    Hello.prototype.world = function (name) {
        if (name === void 0) { name = 'World'; }
        console.log("Hello, " + lodash_1.kebabCase(name));
    };
    return Hello;
}());
exports.Hello = Hello;
