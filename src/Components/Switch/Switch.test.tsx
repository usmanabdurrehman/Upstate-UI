import { mount } from "@cypress/react";
import Switch from "./Switch";

describe("Switch", () => {
  context("When is clicked", () => {
    it("should call onClick", () => {
      const onClick = cy.stub();
      mount(<Switch onClick={onClick} />);
      cy.get("[data-cy=switch]").click();
      cy.wrap(onClick).should("be.called");
    });
  });
});
