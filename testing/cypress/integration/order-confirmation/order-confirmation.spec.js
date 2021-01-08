context("register/ registrierung", () =>
{

    before(() =>
    {
        cy.visit("/");
        cy.login();
        cy.visit("/bestellbestaetigung/?orderId=437");
    });

    it("Should check for order ID", () =>
    {
        cy.get(".h3").should("contain", "437");
    });

    it("Should check for Vielen Dank", () =>
    {
        cy.get(".h2").should("contain", "Vielen Dank!");
    });

    it("Should check for order date", () =>
    {
        cy.getByTestingAttr("order-confirmation-date").should("contain", "09.12.2020, 12:59");
    });

    it("Should check for invoice address", () =>
    {
        cy.getByTestingAttr("order-confirmation-invoice-address").should("contain","Plenty Test Straße 1 12345 Kassel Deutschland");
    });

    it("Should check for shipping address", () =>
    {
        cy.getByTestingAttr("order-confirmation-shipping-address").should("contain","Lieferadresse gleich Rechnungsadresse");
    });

    it("Should check for payment method", () =>
    {
        cy.getByTestingAttr("order-confirmation-payment-method").should("contain","Rechnung");
    });

    it("Should check for payment status", () =>
    {
        cy.getByTestingAttr("order-confirmation-payment-status").should("contain","Nicht bezahlt");
    });

    it("Should check for order document", () =>
    {
        cy.getByTestingAttr("order-confirmation-order-documents").should("exist").child().click();

    });
});
