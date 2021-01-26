import { posts } from '../../specs/fixtures/staticPostIndexData'

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
    it("successfully view all listed articles", () => {
      cy.get('[data-cy="index"]').within(() => {
        cy.get(">div").each((_) => {
          cy.get(`[data-cy="post-card"]`).within(() => {
            cy.get('[data-cy="track-data"]').should("exist");
            cy.get('[data-cy="description"]').should("exist");
          });
        });
      });
    })
  })
})

// it("If the server is running", () => {
//   cy.get('[name=index]').within(() => {
//     cy.get("[data-cy='track-data']").should("contain", "Mariah Carey", "All I Want for Christmas Is You")
//     cy.get("[data-cy='description']").should("contain", "This is the best christmas song ever! All time favorite!")
//     cy.get("[data-cy='track-data']").should("contain", "Last Christmas", "Wham!")
//     cy.get("[data-cy='description']").should("contain", "Please don't say you don't know this song! Very classic christmas song.")
//     cy.get("[data-cy='track-data']").should("contain", "It's Beginning to Look a Lot like Christmas", "Michael Bublé")
//     cy.get("[data-cy='description']").should("contain", "Everyone can agree on this makes christmas perfect!")
//   })
// })
