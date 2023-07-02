import { mount } from "@cypress/react";
import Stepper from "./Stepper";

describe("Stepper", () => {
  context("When is rendered", () => {
    it("should show text", () => {
      mount(<Stepper steps={["Quarter Final", "Semi Final", "Final"]} />);
      cy.contains("Quarter Final").should("exist");
      cy.contains("Semi Final").should("exist");
      cy.contains("Final").should("exist");
    });
  });
});
