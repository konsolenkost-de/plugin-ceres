// / <reference types="cypress" />
context("Breadcrumbs", () =>
{
    beforeEach(() =>
    {
    });

    it("Should display breadcrumbs on single item", () =>
    {
        cy.visit("/wohnzimmer/sofas/zweisitzer-amsterdam-at-dawn_131");
        cy.get(".breadcrumbs").find(".breadcrumb > .breadcrumb-item").should("have.length", 3);
        cy.get(".breadcrumbs .breadcrumb > .breadcrumb-item.active").should("have.length", 1);
    });
});
