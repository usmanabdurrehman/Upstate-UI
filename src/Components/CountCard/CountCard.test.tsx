import { mount } from "@cypress/react";
import CountCard from "./CountCard";

describe("CountCard", () => {
  context("When is rendered", () => {
    it("should show count and text", () => {
      mount(<CountCard number={40} text="Orders Completed" />);
      cy.contains("40");
      cy.contains("Orders Completed");
    });
  });
});
