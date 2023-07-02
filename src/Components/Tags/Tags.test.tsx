import { mount } from "@cypress/react";
import Tags from "./Tags";

describe("Tags", () => {
  context("When is rendered", () => {
    it("should show tags", () => {
      mount(<Tags tags={["science", "biology"]} />);
      cy.contains("science");
      cy.contains("biology");
    });
  });
});
