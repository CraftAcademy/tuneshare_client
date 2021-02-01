import { posts } from '../fixtures/staticPostIndexData'
import { tracks } from '../fixtures/staticSearchIndexData'

describe('User can create a post', () => {
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
      cy.get('[data-testid=login-password]').type('password')
      cy.get('[data-testid=login-submit]').click()
      cy.get('[data-testid=login-screen]').should('not.be.visible')
    })
    cy.contains('Post').click()
  })

  describe('successfully', () => {
    beforeEach(() => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/posts',
        response: { message: 'Your post was succesfully created!' },
      })
      cy.get('[data-testid="searchInput"]').type('Love Story')
      cy.get('[data-testid="searchButton"]').click()
    })

    it('when user can select a song from search results', () => {
      cy.get('[data-testid="result-1"]').click()
      cy.get('[data-testid="searchResults"]').should('not.be.visible')
    })

    it('when user can see a preview of selected song', () => {
      cy.get('[data-testid="result-2"]').click()
      cy.get('[data-testid="trackPreview"]')
        .should('contain', 'Love Story')
        .and('contain', 'Sarah Cothran')
    })

    it('when user can see homescreen after they created a post', () => {
      cy.get('[data-testid="result-2"]').click()
      cy.get('[data-testid="descriptionInput"]').type('Anyone here??')
      cy.get('[data-testid="postButton"]').click()
      cy.contains('TuneShare').should('be.visible')
    })
  })

  describe('unsuccessfully', () => {
    it('when users have not filled in description', () => {
      cy.route({
        method: 'POST',
        url: 'http://localhost:3000/api/posts',
        response: { message: "Description can't be blank" },
        status: 422,
      })
      cy.get('[data-testid="searchInput"]').type('Love Story')
      cy.get('[data-testid="searchButton"]').click()
      cy.get('[data-testid="result-2"]').click()
      cy.get('[data-testid="postButton"]').click()
      cy.get('[data-testid="errorMessage"]').should(
        'contain',
        "Description can't be blank"
      )
    })
    it('when users have not selected any track', () => {
      cy.get('[data-testid="postButton"]').should('not.be.visible')
    })
  })
})
