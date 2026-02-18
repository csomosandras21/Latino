describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[id="belep-gomb"]').click();
    cy.get('[id="email"]').type("buza.csaba@szbiszeged.hu");
    cy.get('[id="password"]').type("andras");
    cy.get('[id="belepesgomb"]').click();
  })
})