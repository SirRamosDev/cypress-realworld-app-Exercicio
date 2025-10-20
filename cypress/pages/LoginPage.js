class LoginPage{
    selectorList(){
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[data-test="signin-submit"]',
            errorMessageAlert: '[data-test="signin-error"]'
        }
        return selectors

    }
    accessLoginPage(){
        cy.visit('/signin')
    }

    loginWithAnyUser(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()
    }
    checkInvalidAccess(){
        cy.get(this.selectorList().errorMessageAlert)
        .should('be.visible')
        .and('contain','Username or password is invalid')

    }
}

export default LoginPage