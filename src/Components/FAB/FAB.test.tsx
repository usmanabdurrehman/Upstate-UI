import { mount } from "@cypress/react";
import FAB from "./FAB";

describe("FAB", () => {
  context("When is rendered", () => {
    it("should render FAB", () => {
      mount(<FAB onClick={() => {}}>+</FAB>);
      cy.get("button").should("exist");
    });
  });

  context("When button is clicked", () => {
    it("should call onClick", () => {
      const onClick = cy.stub();
      mount(<FAB onClick={onClick}>+</FAB>);
      cy.get("button").click();
      cy.wrap(onClick).should("be.called");
    });
  });

  context("When href prop is passed", () => {
    it("should show a tag", () => {
      mount(
        <FAB onClick={() => {}} href="https://www.google.com">
          +
        </FAB>
      );
      cy.get("a").should("exist");
    });
  });
});
