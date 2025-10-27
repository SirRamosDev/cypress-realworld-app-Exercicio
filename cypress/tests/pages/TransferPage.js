import { experimentalStyled } from "@mui/material"

class TransferPage {
    selectorList() {
        const selector = {
            newTransactionButton: '[data-test="nav-top-new-transaction"]',
            searchUserInput: '[data-test="user-list-search-input"]',
            userResultItem: '[data-test="user-list-item"]',
            amountInput: '[data-test="transaction-create-amount-input"]',
            noteInput: '[data-test="transaction-create-description-input"]',
            submitButton: '[data-test="transaction-create-submit-payment"]',
            successMessageText: 'Transaction Submitted!',
            // possível seletor de erro (ajuste conforme sua versão do RWA)
            errorMessage: '[data-test="transaction-error"]'

        }
        return selector
    }

    startTransfer() {
        cy.get(this.selectorList().newTransactionButton).click()
    }

    searchUser(username) {
        cy.get(this.selectorList().searchUserInput).type(username)
        cy.get(this.selectorList().userResultItem).first().click()
    }
    
    fillTransferDetails(amount, note) {
        cy.get(this.selectorList().amountInput).type(amount)
        cy.get(this.selectorList().noteInput).type(note)
    }
    submitTransfer() {
        cy.get(this.selectorList().submitButton).click()
    }

    checkTransferSuccess() {
        cy.contains(this.selectorList().successMessageText).should('be.visible')
    }
    
    checkTransferError() {
        cy.get(this.selectorList().errorMessage).should('be.visible')
    }
}

export default TransferPage
