import userData from '../../tests/fixtures/users/userData.json'
import HistoryPage from '../pages/HistoryPage.js'
import LoginPage from '../pages/LoginPage.js'

const loginPage = new LoginPage()
const historyPage = new HistoryPage()

describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
    it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        historyPage.historyEmpty()
    });
});

describe('View successful transaction history', () => {
    it('Must display a users transaction history correctly', () => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
        historyPage.history()

    });
});