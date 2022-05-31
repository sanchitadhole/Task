describe('Instagram testcases', () => {

    beforeEach('before test case', () => {
        cy.visit('https://www.instagram.com/')
    })

    it('To check user should login with valid credentials', () => {
        cy.login('dholesanchita2020@gmail.com', 'qaz123plm')
        cy.get('.coreSpriteKeyhole').should('be.visible')
    })

    it('To check user should get error message at invalid username', () => {
        cy.login('dholesanchita20@gmail.com', 'qaz123plm')
        cy.get('#slfErrorAlert').should('have.text', "The username you entered doesn't belong to an account. Please check your username and try again.")
    })

    it('To check user should get error message at invalid password', () => {
        cy.login('dholesanchita2020@gmail.com', 'qaz123pl')
        cy.get('#slfErrorAlert').should('have.text', "Sorry, your password was incorrect. Please double-check your password.")
    })


})