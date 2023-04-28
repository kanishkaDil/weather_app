
describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    // cy.contains('Git').click()
    // cy.url().should('include', 'https://github.com/kanishkaDil/weather_app')
    cy.contains(3)
    // cy.contains(/^\d+$/)
    // cy.contains(/^([2-9][0-9]|[1-9][0-9]{2}|100)(\.[0]{1,2})?$/)
  })
})