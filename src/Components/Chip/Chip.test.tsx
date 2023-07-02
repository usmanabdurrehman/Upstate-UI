import { mount } from "@cypress/react";
import FaceIcon from "@material-ui/icons/Face";
import Chip from "./Chip";

describe("Chip", () => {
  context("When is rendered", () => {
    it("should show label", () => {
      mount(<Chip label="Alex" />);
      cy.contains("Alex");
    });
  });

  context("When is rendered with onDelete", () => {
    it("should show delete icon and call onDelete when clicked", () => {
      const onDelete = cy.stub();
      mount(<Chip label="Alex" onDelete={onDelete} />);
      cy.get('[data-cy="delete-icon"]').should("exist");
      cy.get('[data-cy="delete-icon"]').click();
      cy.wrap(onDelete).should("be.called");
    });
  });

  context("When is rendered with clickable prop", () => {
    it("should show ribbon", () => {
      mount(<Chip label="Alex" clickable />);
      cy.get('[data-cy="chip-ribbon"]').should("exist");
    });
  });

  context("When is rendered with avatar prop", () => {
    it("should show avatar", () => {
      mount(<Chip label="Alex" avatar={<FaceIcon />} />);
      cy.get('[data-cy="avatar"]').should("exist");
    });
  });
});
