import React from "react";
import { mount } from "@cypress/react";
import Button from "./Button";

describe("Button", () => {
  context("When Button is rendered", () => {
    it("should show text", () => {
      mount(<Button onClick={() => {}}>Yo boi</Button>);
      cy.contains("Yo boi");
    });
  });
});
