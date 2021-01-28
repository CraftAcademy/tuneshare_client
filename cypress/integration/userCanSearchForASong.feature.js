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
    cy.visit('/')
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
