export default class Login {
  static clickOnEmail() {
    //cy.get('.brand').click()
    cy.get('.pull-left').contains('email').click()
  }

  static search(text) {
    cy.get('#searchTerm').type(`${text} {enter}`)
  }

  static clickSignIn() {
    cy.get('#signin_button').click()
  }
}
