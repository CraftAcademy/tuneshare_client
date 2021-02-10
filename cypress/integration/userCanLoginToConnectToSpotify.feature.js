import { posts } from '../fixtures/staticPostIndexData'
import { tracks } from '../fixtures/staticSearchIndexData'

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
      cy.get('[data-testid=login-screen]').within(() => {
        cy.get('[data-testid=login-email]').type('spotifyuser@spotify.com')
        cy.get('[data-testid=login-password]').type('password')
        cy.get('[data-testid=login-submit]').click()
        cy.get('[data-testid=login-screen]').should('not.be.visible')
      })
    })
  })

  describe('is unsuccessful ', () => {
    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/auth/sign_in',
        status: '401',
        response: {
          errors: ['Invalid login credentials, please try again'],
        },
      })
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/auth/validate_token**',
        response: 'fx:user_login_with_devise_credentials.json',
      })
      cy.visit('/')
    })
    it('with invalid spotify credentials', () => {
      cy.get('[data-testid=login-screen]').within(() => {
        cy.get('[data-testid=login-email]').type('sporp@sporp.com')
        cy.get('[data-testid=login-password]').type('password')
        cy.get('[data-testid=login-submit]').click()
      })
      cy.get('[data-testid=login-screen]').should('exist')
    })
  })
})
