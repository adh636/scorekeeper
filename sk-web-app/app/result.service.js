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
var Observable_1 = require("rxjs/Observable");
var ResultService = (function () {
    function ResultService() {
        var _this = this;
        this.results$ = new Observable_1.Observable(function (observer) {
            _this.resultsObserver = observer;
        });
    }
    ResultService.prototype.onUpdate = function () {
        return this.results$;
    };
    ResultService.prototype.update = function () {
        if (this.resultsObserver)
            this.resultsObserver.next(true);
    };
    return ResultService;
}());
ResultService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ResultService);
exports.ResultService = ResultService;
//# sourceMappingURL=result.service.js.map