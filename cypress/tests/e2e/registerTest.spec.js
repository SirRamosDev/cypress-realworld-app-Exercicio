import userData from '../../tests/fixtures/users/userData.json' 
import RegisterPage from '../pages/RegisterPage.js'

const registerPage = new RegisterPage()

describe('Real Word App - Testes de Registro de Usuário', () => {

    it('Registro de novo usuário com sucesso', () => {
        const u = userData.newUser
        registerPage.accessRegisterPage()
        registerPage.fillRegistrationForm(u.firstName, u.lastName, u.username, u.password, u.confirmPassword)
        registerPage.submitRegistration()

        cy.url().should('include', '/signup')
    })

    it('Tentativa de registro com informações incompletas', () => {
        registerPage.accessRegisterPage()
        registerPage.submitRegistration()
        registerPage.checkButtonDisabled()

    })
})
