"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var runtime_1 = require('@ennube/runtime');
var jws = require('jsonwebtoken');
var jw = jws;
var IndexHTTPService = (function () {
    function IndexHTTPService() {
    }
    IndexHTTPService.prototype.index = function (request, response) {
    };
    IndexHTTPService.prototype.robots = function (request, response) {
    };
    __decorate([
        runtime_1.http.GET('www', '/')
    ], IndexHTTPService.prototype, "index", null);
    __decorate([
        runtime_1.http.GET('www', '/robots.txt')
    ], IndexHTTPService.prototype, "robots", null);
    return IndexHTTPService;
}());
exports.IndexHTTPService = IndexHTTPService;
//# sourceMappingURL=index.js.map