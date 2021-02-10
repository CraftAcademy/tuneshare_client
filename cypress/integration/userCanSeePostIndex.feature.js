import { posts } from '../fixtures/staticPostIndexData'

describe('User can see a index list of posts', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/posts',
      response: { posts: posts },
    })
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
    cy.get('[data-testid=login-screen]').within(() => {
      cy.get('[data-testid=login-email]').type('spotifyuser@spotify.com')
      cy.get('[data-testid=login-password]').type('password')
      cy.get('[data-testid=login-submit]').click()
    })
  })

  describe('successfully', () => {
    it('If the server is running', () => {
      cy.get('[data-testid=post-index]').within(() => {
        cy.get('[data-testid=post-title-1]').should(
          'contain',
          'All I Want for Christmas Is You'
        )
        cy.get('[data-testid=post-artist-1]').should('contain', 'Mariah Carey')
        cy.get('[data-testid=post-description-1]').should(
          'contain',
          'This is the best christmas song ever! All time favorite!'
        )
        cy.get('[data-testid=post-title-2]').should('contain', 'Last Christmas')
        cy.get('[data-testid=post-artist-2]').should('contain', 'Wham!')
        cy.get('[data-testid=post-description-2]').should(
          'contain',
          "Please don't say you don't know this song! Very classic christmas song."
        )
      })
    })
  })
})
