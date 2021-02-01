import { posts } from '../fixtures/staticPostIndexData'
import { updatedPosts } from '../fixtures/staticPostIndexDataUpdated'

describe('User can', () => {
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
    }),
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/posts/1/likes',
        response: {},
      })
    cy.visit('/')
    cy.get('[data-testid=login-screen]').within(() => {
      cy.get('[data-testid=login-email]').type('spotifyuser@spotify.com')
      cy.get('[data-testid=login-password]').type('password')
      cy.get('[data-testid=login-submit]').click()
    })
  })

  describe('successfully', () => {
    it('like another post', () => {
      cy.route({
        method: 'GET',
        url: 'http://localhost:3000/api/posts',
        response: { posts: updatedPosts },
      })
      cy.get('[data-testid="likeButton-1"]').click()
      cy.get('[data-testid="likeCount-1"]').should('contain', '3')
    })
  })
})
