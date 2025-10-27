class HistoryPage {


    history(){
        cy.get('[data-test="nav-personal-tab"]').click()
        cy.get('.TransactionAmount-amountNegative').should('be.visible')
    }

    historyEmpty(){
        cy.get('[data-test="nav-personal-tab"]').click()
        cy.get('[data-test="empty-list-header"] > .MuiTypography-root').should('contain.text', 'No Transactions');
    }

}

export default HistoryPage