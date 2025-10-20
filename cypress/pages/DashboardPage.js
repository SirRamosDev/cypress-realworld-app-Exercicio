class DashboarPage {

    selectorList(){
        const selectors = {
            dashboardHeader: '[data-test="sidenav-home"]]'
    }
    return selectors
}

    checkDashboardPage() {
        cy.get(this.selectorList().dashboardHeader)
        .should('be.visible')
    }
}

export default DashboardPage