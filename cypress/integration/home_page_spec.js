describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
        cy.get("[type='email']").type('{ctrl+v}')
        cy.get("[type='email']").type('{ctrl+c}')
        cy.get("[type='password']").type('{ctrl+v}')
        cy.get("[type='password']").type('{ctrl+c}')
        cy.get("[type='email']").type('{meta+v}')
        cy.get("[type='email']").type('{meta+c}')
        cy.get("[type='password']").type('{meta+v}')
        cy.get("[type='password']").type('{meta+c}')
    })
  })
  