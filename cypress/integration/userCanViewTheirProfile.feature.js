import { user } from '../fixtures/staticProfileData'
import { posts } from '../fixtures/staticPostIndexData'

describe('User can view their profile', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/auth/sign_in',
      response: 'fx:user_login_with_devise_credentials.json',
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/auth/validate_token**',
      response: 'fx:user_login_with_devise_credentials.json',
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/posts',
      response: { posts: posts },
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/users/3',
      response: { user: user },
    })
    cy.visit('/')
    cy.get('[data-testid=login-screen]').within(() => {
      cy.get('[data-testid=login-email]').type('spotifyuser@spotify.com')
      cy.get('[data-testid=login-password]').type('password')
      cy.get('[data-testid=login-submit]').click()
      cy.get('[data-testid=login-screen]').should('not.be.visible')
    })
    cy.contains('Profile').click()
  })

  describe('successfully ', () => {
    it('see their email', () => {
      cy.get('[data-testid=user-email]').should(
        'contain',
        'spotifyuser@spotify.com'
      )
    })
  })
})
