import { mount } from "@cypress/react";
import Alert from "./Alert";

describe("Alert", () => {
  context("When is rendered", () => {
    it("should show text", () => {
      mount(
        <Alert
          showAlert
          text="You have successfully signed up"
          onClose={() => {}}
        />
      );
      cy.contains("You have successfully signed up");
    });
  });

  context("When onClose is passed", () => {
    it("should show close icon and call onClose when clicked", () => {
      const onClose = cy.stub();
      mount(
        <Alert
          onClose={onClose}
          showAlert
          text="You have successfully signed up"
        />
      );
      cy.get("[data-cy=close-icon]").should("exist");
      cy.get("[data-cy=close-icon]").click();
      cy.wrap(onClose).should("be.called");
    });
  });
});
