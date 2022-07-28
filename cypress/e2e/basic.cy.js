describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the form', () => {
    cy.get('form')
    .should('be.visible')
  })
})