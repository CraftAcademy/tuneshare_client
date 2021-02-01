import { posts } from '../fixtures/staticPostIndexData'
import { updatedPosts } from '../fixtures/staticPostIndexDataUpdated'

describe('User can', () => {
  beforeEach(() => {
    cy.server()
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
