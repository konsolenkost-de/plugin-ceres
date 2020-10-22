// / <reference types="cypress" />
context("Homepage", () =>
{
    beforeEach(() =>
    {
        cy.visit("/");
    });

    it("Should load the homepage", () =>
    {
        cy.location("pathname").should("eq", "/");
        // checks if the logo exists
        cy.get(".brand-wrapper").should("exist");
    });
});
