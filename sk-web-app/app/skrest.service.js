"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var SKRestService = (function () {
    function SKRestService(http) {
        this.http = http;
        this.restUrl = "http://localhost:5000";
        this.requestOptions = new http_1.RequestOptions();
        this.createHeader();
    }
    SKRestService.prototype.createHeader = function () {
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        this.requestOptions = new http_1.RequestOptions({ headers: headers });
    };
    SKRestService.prototype.submitResults = function (postData) {
        var postUrl = this.restUrl + "/api/game";
        return this.http.post(postUrl, postData, this.requestOptions);
    };
    SKRestService.prototype.getResults = function () {
        var postUrl = this.restUrl + "/api/game";
        return this.http.get(postUrl).map(function (response) { return response.json(); });
    };
    SKRestService.prototype.deleteResults = function () {
        var postUrl = this.restUrl + "/api/game/5~";
        return this.http.delete(postUrl);
    };
    return SKRestService;
}());
SKRestService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], SKRestService);
exports.SKRestService = SKRestService;
//# sourceMappingURL=skrest.service.js.map