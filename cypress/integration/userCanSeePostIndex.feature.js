describe("User can see a index list of posts", () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url:  "http://localhost:3000/api/posts",
      response: { posts: "fixture:post_index.json" }
    })
    cy.visit("/")
  })

  describe("successfully", () => {
    it("If the server is running", () => {
      cy.get("[data-cy='index']").within(() => {
        cy.get("[data-cy='track_data']").should("contain", "All I Want for Christmas Is You", "Mariah Carey")
        cy.get("[data-cy='description']").should("contain", "This is the best christmas song ever! All time favorite!")
        cy.get("[data-cy='track_data']").should("contain", "Last Christmas", "Wham!")
        cy.get("[data-cy='description']").should("contain", "Please don't say you don't know this song! Very classic christmas song.")
        cy.get("[data-cy='track_data']").should("contain", "It's Beginning to Look a Lot like Christmas", "Michael Bublé")
        cy.get("[data-cy='description']").should("contain", "Everyone can agree on this makes christmas perfect!")
      })
    })
  })
})
