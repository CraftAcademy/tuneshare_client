import { posts } from '../fixtures/staticPostIndexData'
import { tracks } from '../fixtures/staticSearchIndexData'

describe('User can search a song to post by keyword', () => {
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
    cy.visit('/')
    cy.get('[data-testid=login-screen]').within(() => {
      cy.get('[data-testid=login-email]').type('spotifyuser@spotify.com')
      cy.get('[data-testid=login-submit]').click()
    })
    cy.contains('Post').click()
  })

  it('successfully', () => {
    cy.get('[data-testid="searchInput"]').type('Love Story')
    cy.get('[data-testid="searchButton"]').click()
    cy.get('[data-testid="searchResults"]')
      .should('contain', 'Love Story')
      .and('contain', 'Taylor Swift')
    cy.get('[data-testid="searchResults"]')
      .should('contain', 'Love Story')
      .and('contain', 'Sarah Cothran')
    cy.get('[data-testid="searchResults"]')
      .should('contain', 'Greatest Love Story')
      .and('contain', 'LANCO')
  })
})
