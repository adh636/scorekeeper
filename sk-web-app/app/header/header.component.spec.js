"use strict";
var header_component_1 = require("./header.component");
describe("Header Component", function () {
    it("should store app name", function () {
        var headerComponent = new header_component_1.HeaderComponent();
        expect(headerComponent.appName).toEqual("ScoreKeeper");
    });
});
//# sourceMappingURL=header.component.spec.js.map