import { url, url_1 } from '../../../config'
import Login from '../../page-objects/components/Login'
import LoginPageCypress from '../../page-objects/pages/LoginPageCypress'


describe('Login Failed Test', () => {
  before(function () {
    cy.visit(url_1)
    Login.clickOnEmail()
  })

  it('should try to login with invalid credentials', function () {
    LoginPageCypress.login_v2('aaa@aaa.com', 'invalid password')
  })

  it('should display error message', function () {
    LoginPageCypress.displayErrorMessage()
  })
})

describe('Navigate to Reset password page', () => {
    before(function () {
      cy.visit(url_1)
      Login.clickOnEmail()
    })
  
    it('clich on Reset your password', function () {
      LoginPageCypress.clickResetPasswordLink()
    })

    it('should display Reset Pass Page', function () {
      LoginPageCypress.displayResetPassPage()
    })
})