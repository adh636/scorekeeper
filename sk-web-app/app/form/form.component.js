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
var model_1 = require("../model");
var skrest_service_1 = require("../skrest.service");
var result_service_1 = require("../result.service");
var FormComponent = (function () {
    function FormComponent(skRestService, resultService) {
        this.skRestService = skRestService;
        this.resultService = resultService;
        this.model = new model_1.Model("", ["", ""], "");
    }
    FormComponent.prototype.submitResults = function () {
        if (this.modelNotFull())
            return;
        var postData = this.modelToJSON();
        this.skRestService.submitResults(postData).subscribe();
        this.resultService.update();
    };
    FormComponent.prototype.modelToJSON = function () {
        return {
            game: this.model.game,
            playerOne: this.model.players[0],
            playerTwo: this.model.players[1],
            winner: this.model.winner
        };
    };
    FormComponent.prototype.modelNotFull = function () {
        return this.model.game === "" || this.model.players[0] === ""
            || this.model.players[1] === "" || this.model.winner === "";
    };
    return FormComponent;
}());
FormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sk-form',
        templateUrl: 'form.component.html',
        styleUrls: ["form.component.css"]
    }),
    __metadata("design:paramtypes", [skrest_service_1.SKRestService,
        result_service_1.ResultService])
], FormComponent);
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map