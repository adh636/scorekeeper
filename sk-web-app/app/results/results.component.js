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
var skrest_service_1 = require("../skrest.service");
var result_service_1 = require("../result.service");
var ResultsComponent = (function () {
    function ResultsComponent(skRestService, resultService) {
        this.skRestService = skRestService;
        this.resultService = resultService;
    }
    ResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.updateResults();
        this.resultService.onUpdate().subscribe(function () {
            setTimeout(function () {
                _this.updateResults();
            }, 500);
        });
    };
    ResultsComponent.prototype.updateResults = function () {
        var _this = this;
        this.skRestService.getResults().subscribe(function (results) { return _this.results = results; });
    };
    ResultsComponent.prototype.deleteResults = function () {
        this.skRestService.deleteResults().subscribe();
        this.resultService.update();
    };
    return ResultsComponent;
}());
ResultsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sk-results',
        templateUrl: 'results.component.html',
        styleUrls: ["results.component.css"]
    }),
    __metadata("design:paramtypes", [skrest_service_1.SKRestService, result_service_1.ResultService])
], ResultsComponent);
exports.ResultsComponent = ResultsComponent;
//# sourceMappingURL=results.component.js.map