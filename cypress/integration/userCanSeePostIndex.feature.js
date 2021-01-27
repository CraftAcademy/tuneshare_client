import { posts } from '../fixtures/staticPostIndexData'

describe('User can see a index list of posts', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/posts',
      response: { posts: posts },
    })
    cy.visit('/')
  })

  describe('successfully', () => {
    it('If the server is running', () => {
      cy.get('body').should(
        'contain',
        'Mariah Carey',
        'All I Want for Christmas Is You',
        'This is the best christmas song ever! All time favorite!',
        'Last Christmas',
        'Wham!',
        "Please don't say you don't know this song! Very classic christmas song.",
        "It's Beginning to Look a Lot like Christmas",
        'Michael Bublé',
        'Everyone can agree on this makes christmas perfect!'
      )
    })
  })
})
