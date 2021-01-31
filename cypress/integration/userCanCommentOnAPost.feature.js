import { posts } from '../fixtures/staticPostIndexData'

describe('User can Comment on a post', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/posts',
      response: { posts: posts },
    })
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/auth/signin',
      response: 'fixture:user_can_comment_on_post.json',
    })
    cy.visit('/')
  })

  it('successfully', () => {
    cy.get('[data-testid=post-card-1]').within(() => {
      cy.get('[data-testid=comment-button]').click()
    })
    cy.get('[data-testid=comment-section]').within(() => {
      cy.get('[data-testid=comment-text]').type('this is a comment')
      cy.get('[data-testid=comment-submit]').click()
      cy.get('[data-testid=comment-list]').should(
        'contain',
        'this is a comment'
      )
    })
  })
})
