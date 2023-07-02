import { mount } from "@cypress/react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  context("When is clicked", () => {
    it("should call onClick", () => {
      const onClick = cy.stub();
      mount(<Checkbox onClick={onClick} />);
      cy.get('[data-cy="checkbox"]').click();
      cy.wrap(onClick).should("be.called");
    });
  });

  context("When is disabled an clicked", () => {
    it("should not call onClick", () => {
      const onClick = cy.stub();
      mount(<Checkbox onClick={onClick} disabled />);
      cy.get('[data-cy="checkbox"]').click();
      cy.wrap(onClick).should("not.be.called");
    });
  });

  context("When checkedIcon is passed", () => {
    it("should show checkedIcon if checked", () => {
      const onClick = cy.stub();
      mount(
        <Checkbox
          checked
          checkedIcon={<div data-cy="custom-checked-icon"></div>}
        />
      );
      cy.get('[data-cy="custom-checked-icon"]').should("exist");
    });
  });

  context("When checkedIcon isnt passed", () => {
    it("should show default check icon if checked", () => {
      const onClick = cy.stub();
      mount(<Checkbox checked />);
      cy.get('[data-cy="checked-icon"]').should("exist");
    });
  });

  context("When icon is passed", () => {
    it("should show icon when unchecked", () => {
      const onClick = cy.stub();
      mount(<Checkbox icon={<div data-cy="custom-icon"></div>} />);
      cy.get('[data-cy="custom-icon"]').should("exist");
    });
  });
});
