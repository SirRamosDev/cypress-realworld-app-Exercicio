import userData from '../../tests/fixtures/users/userData.json'
import LoginPage from '../pages/LoginPage.js'
import DashboardPage from '../pages/DashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Real Word App - Testes de Login', () => {

    it('Login com sucesso', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)
        dashboardPage.checkDashboardPage()
    })

    it('Login com credenciais inválidos', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userFail.username,userData.userFail.password)
        loginPage.checkInvalidAccess()
    })
})