import { mount } from "@cypress/react";
import Button from "./Button";

describe("Button", () => {
  context("When is rendered", () => {
    it("should show text", () => {
      mount(<Button onClick={() => {}}>Sign up</Button>);
      cy.get("button:contains(Sign up)").should("exist");
    });
  });

  context("When button is clicked", () => {
    it("should call onClick", () => {
      const onClick = cy.stub();
      mount(<Button onClick={onClick}>Sign up</Button>);
      cy.get("button").click();
      cy.wrap(onClick).should("be.called");
    });
  });
});
