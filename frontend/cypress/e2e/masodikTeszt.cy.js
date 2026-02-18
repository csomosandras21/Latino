describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
    cy.get('[id="belep-gomb"]').click();
    cy.get('[id="regi"]').click();
    cy.get('[id="username"]').type("szilveszter");
    cy.get('[id="email"]').type("teszter@szbiszeged.hu");
    cy.get('[id="password"]').type("veszti");
    cy.get('[id="repeat-password"]').type("veszti");
    cy.get('[id="belepesgomb2"]').click();
    cy.wait(1000);
    cy.get('[id="email"]').type("teszter@szbiszeged.hu");
    cy.get('[id="password"]').type("veszti");
    cy.get('[id="belepesgomb"]').click();
  })
})