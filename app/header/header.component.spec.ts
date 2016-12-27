import {HeaderComponent} from "./header.component";

describe("Header Component", () => {
  it("should store app name", () => {
    let headerComponent: HeaderComponent = new HeaderComponent();
    expect(headerComponent.appName).toEqual("ScoreKeeper");
  });
});