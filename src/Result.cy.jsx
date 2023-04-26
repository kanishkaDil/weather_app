import React from 'react'
import Result from './Result'

describe('<Result />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Result cordinate="6.99,81.05" city="Badulla"/>)
    cy.get('[data-cy=display]').should('include.text', 'Badulla')
    cy.get('[data-cy=displayData]').should('include.text', '°C')
    cy.get('[data-cy=change]').click()
    cy.get('[data-cy=displayData]').should('include.text', '°F')

  })
})