import { mount } from "@cypress/react";
import Badge from "./Badge";

describe("Badge", () => {
  context("When is rendered with nonzero number", () => {
    it("should show number", () => {
      mount(<Badge number={10}>Notifications</Badge>);
      cy.contains("10");
    });
  });

  context("When is rendered with number 0", () => {
    it("should show number if showZero is true", () => {
      mount(
        <Badge number={0} showZero>
          Notifications
        </Badge>
      );
      cy.contains("0");
      cy.get("[data-cy=badge-content]").should("exist");
    });

    it("should not show number if showZero is false", () => {
      mount(
        <Badge number={0} showZero={false}>
          Notifications
        </Badge>
      );
      cy.get("[data-cy=badge-content]").should("not.exist");
    });
  });

  context("When number is more than max", () => {
    it("should render max", () => {
      mount(<Badge number={100}>Notifications</Badge>);
      cy.contains("99");
    });
  });
});
