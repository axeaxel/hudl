it('logs in using env variables', () => {
  const username = Cypress.env('username')
  const password = Cypress.env('password')

  cy.visit('/')
  cy.get('a[href*="/login"]').eq(0).click()

  expect(username, 'username was set').to.be.a('string').and.not.be.empty
  cy.get('[name=password]').type(password, {log: false})

  expect(password, 'password was set').to.be.a('string').and.not.be.empty
  cy.get('[type=Submit]').click()

  cy.contains('a', 'profile').should('be.visible').click()
  cy.url().should('match', /profile$/)
  cy.contains('Email: chircualex@gmail.com')
})