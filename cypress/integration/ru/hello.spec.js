describe("Baby Music Notes Hello", () => {
  beforeEach(() => {
    // https://крошки-нотки.рф
    cy.visit("https://xn----otbbfacueeo2a0e.xn--p1ai/");
  });
  it("checks the correct site header", () => {
    cy.get("header")
      // Title in header
      .find("h1")
      .should("contain", "Крошки-Нотки");

    cy.get("header")
      // Description
      .find("strong")
      .should("contain", "Интерактивный курс нотной грамоты");
  });
});
