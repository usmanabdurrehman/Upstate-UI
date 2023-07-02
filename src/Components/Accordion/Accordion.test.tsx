import { mount } from "@cypress/react";
import Accordion from "./Accordion";

describe("Accordion", () => {
  context("When is not expanded", () => {
    it("should hide accordion content", () => {
      mount(
        <Accordion
          title="This is an accordion"
          content="This is accordion content"
        />
      );
      cy.contains("This is accordion content").should("not.exist");
    });
  });

  context("When is expanded", () => {
    it("should show accordion content", () => {
      mount(
        <Accordion
          title="This is an accordion"
          content="This is accordion content"
          expanded
        />
      );
      cy.contains("This is accordion content").should("be.visible");
    });
  });

  context("When is clicked", () => {
    it("should call onClick", () => {
      const onClick = cy.stub();
      mount(
        <Accordion
          title="This is an accordion"
          content="This is accordion content"
          onClick={onClick}
          expanded
        />
      );
      cy.get('[data-cy="accordion-button"]').click();
      cy.wrap(onClick).should("be.called");
    });
  });

  context("When is disabled an clicked", () => {
    it("should not call onClick", () => {
      const onClick = cy.stub();
      mount(
        <Accordion
          title="This is an accordion"
          content="This is accordion content"
          onClick={onClick}
          disabled
        />
      );
      cy.get('[data-cy="accordion-button"]').click();
      cy.wrap(onClick).should("not.be.called");
    });
  });
});
