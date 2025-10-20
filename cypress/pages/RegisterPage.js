class RegisterPage {
    selectorList() {
        const selectors = {
            firstNameField: '[data-test="signup-first-name"]',
            lastNameField: '[data-test="signup-last-name"]',
            usernameField: '[data-test="signup-username"]',
            passwordField: '[data-test="signup-password"]',
            confirmPasswordField: '[data-test="signup-confirmPassword"]',
            submitButton: '[data-test="signup-submit"]',
            errorMessage: '[data-test="signup-error"]'
            }
            return selectors
        }

    accessRegisterPage() {
        cy.visit('/signup')
    }
    fillRegistrationForm(firstName, lastName, username, password, confirmPassword) {
        cy.get(this.selectorList().firstNameField).type(firstName)
        cy.get(this.selectorList().lastNameField).type(lastName)
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().confirmPasswordField).type(confirmPassword)
    }
    submitRegistration() {
        cy.get(this.selectorList().submitButton).click()
    }
    checkIncompleteError(expectedMessage) {
        cy.get(this.selectorList().errorMessage)
            .should('be.visible')
            .and('contain', expectedMessage)
    }

    
}

export default RegisterPage