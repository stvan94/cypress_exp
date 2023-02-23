/// <reference types="cypress" />
import BasePage from "../BasePage"

export default class LoginPageCypress extends BasePage {
  static login_v2(username, password) {
    cy.login_v2(username, password)
  }

  static clickResetPasswordLink() {
    cy.contains('Reset your password').click()
  }

  static displayErrorMessage() {
    cy.isVisible('.error-message')
  }

  static displayResetPassPage() {
    cy.isVisible('.reset-password-page-inner')
  }
}
