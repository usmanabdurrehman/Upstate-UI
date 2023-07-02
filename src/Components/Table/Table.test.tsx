import { mount } from "@cypress/react";
import Table from "./Table";

describe("Table", () => {
  context("When is rendered", () => {
    it("should show data", () => {
      mount(
        <Table
          data={[
            { Name: "Alex", Age: 69 },
            { Name: "Ajmal", Age: 43 },
          ]}
        />
      );
      cy.contains("Alex").should("exist");
      cy.contains("Ajmal").should("exist");
      cy.contains("69").should("exist");
      cy.contains("43").should("exist");
    });
  });

  context("When custom widgets are passed", () => {
    it("should show custom widgets", () => {
      mount(
        <Table
          data={[
            { Name: "Alex", Age: 69 },
            { Name: "Ajmal", Age: 43 },
          ]}
          customWidgets={{ Name: () => <div data-cy="name-widget"></div> }}
        />
      );
      cy.get("[data-cy=name-widget]").should("exist");
    });
  });
});
