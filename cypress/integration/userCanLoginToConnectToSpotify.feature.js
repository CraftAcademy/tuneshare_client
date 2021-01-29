describe('User login with devise', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/posts',
      response: { posts: posts },
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/tracks?q=**',
      response: { tracks: tracks },
    })
    cy.visit('/')
  })

  describe('is successful', () => {
    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/auth/sign_in',
        response: 'fx:user_login_with_devise_credentials.json',
      })
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/auth/validate_token**',
        response: 'fx:user_login_with_devise_credentials.json',
      })
      cy.visit('/')
    })
    it('when using spotify credentials', () => {
      cy.get('[data-testid=login-icon]').click()
      cy.get('[data-testid=login-modal]').within(() => {
        cy.get('[data-testid=login-email]').type('spotifyuser@spotify.com')
        cy.get('[data-testid=login-submit]').click()
        cy.get('[data-testid=login-modal]').should('not.be.visible')
      })
    });
  })
})
