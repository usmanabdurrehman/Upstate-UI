import { mount } from "@cypress/react";
import BottomNavigation from "./BottomNavigation";

describe("BottomNavigation", () => {
  context("When is rendered", () => {
    it("should show tab content based on tab selection", () => {
      mount(
        <BottomNavigation tabs={["Patients", "Doctors"]} onClick={() => {}}>
          <div>Patients Information</div>
          <div>Doctors Information</div>
        </BottomNavigation>
      );
      cy.contains("Patients Information").should("exist");
      cy.contains("Doctors Information").should("not.be.visible");
    });
  });

  context("When tab is clicked", () => {
    it("should call onClick", () => {
      const onClick = cy.stub();
      mount(
        <BottomNavigation tabs={["Patients", "Doctors"]} onClick={onClick}>
          <div>Patients Information</div>
          <div>Doctors Information</div>
        </BottomNavigation>
      );
      cy.get("[data-cy=tab]:contains(Patients)").click();
      cy.wrap(onClick).should("be.calledWith", 0);
      cy.get("[data-cy=tab]:contains(Doctors)").click();
      cy.wrap(onClick).should("be.calledWith", 1);
    });
  });
});
