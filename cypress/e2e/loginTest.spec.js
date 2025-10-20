import userData from '../fixtures/userData.json';
import LoginPage from '../pages/loginPage';
import DashboardPage from '../pages/DashboardPage';

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
        loginPage.loginWithAnyUser(userData.userFail.username,userData.userfail.password)
        loginPage.checkInvalidAccess()
    })
})