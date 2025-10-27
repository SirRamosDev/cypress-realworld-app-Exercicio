import userData from '../../tests/fixtures/users/userData.json'
import TransferPage from '../pages/TransferPage.js'
import LoginPage from '../pages/LoginPage.js'

const loginPage = new LoginPage()
const transferPage = new TransferPage()

describe('Real World App - Transfer Test', () => {
    beforeEach(() => {
        loginPage.accessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    })

    it('Success Transfer', () => {
        transferPage.startTransfer()
        transferPage.searchUser(userData.transferValid.recipient)
        transferPage.fillTransferDetails(100, 'Test Transfer')
        transferPage.submitTransfer()
        transferPage.checkTransferSuccess()
    })

    it.skip('Fail Transfer - Insufficient Funds', () => {
        transferPage.startTransfer()
        transferPage.searchUser(userData.transferInvalid.recipient)
        transferPage.fillTransferDetails(100000000, 'Test Transfer Insufficient Funds')
        transferPage.submitTransfer()
        transferPage.checkTransferError() // Mensagem esperada não aparece, o sistema procegue com a transferência
    })

    it.skip('Transfer with 0 amount', () => {
        transferPage.startTransfer()
        transferPage.searchUser(userData.transferZero.recipient)
        transferPage.fillTransferDetails(0, 'Test Transfer Zero Amount')
        transferPage.submitTransfer()
        transferPage.checkTransferError() // Mensagem esperada não aparece, o sistema procegue com a transferência
    })
})
