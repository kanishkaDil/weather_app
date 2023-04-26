
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.contains('Git').click()
    // cy.url().should('include', 'https://github.com/kanishkaDil/weather_app')
  })
})