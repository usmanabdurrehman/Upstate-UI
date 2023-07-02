import { mount } from "@cypress/react";
import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  context("When is hovered", () => {
    it("should show tooltip", () => {
      mount(<Tooltip title="Patients Information">Patient</Tooltip>);
      cy.get("[data-cy=tooltip-wrapper]").trigger("mouseover");
      cy.contains("Patients Information").should("exist");
    });
  });
});
