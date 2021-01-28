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
    cy.visit('/')
    cy.contains('Post').click()
    cy.get('[data-testid="searchInput"]').type('Love Story')
    cy.get('[data-testid="searchButton"]').click()
  })

  it('User can select a song from search results', () => {
    cy.get('[data-testid="result-1"]').click()
    cy.get('[data-testid="searchResults"]').should('not.be.visible')
  })
})
