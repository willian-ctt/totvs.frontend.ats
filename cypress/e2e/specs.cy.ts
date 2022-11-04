describe('dashboard', () => {
  it('should have dashboard text', () => {
    cy.visit('http://localhost:4200')
    cy.contains('Dashboard')
  })

  it('should have dashboard menu', () => {
    cy.visit('http://localhost:4200')
    cy.get('.po-menu-item-first > .po-menu-item-link > .po-menu-item > div').should('exist')
  })

  it('should have candidatos menu', () => {
    cy.visit('http://localhost:4200')
    cy.get(':nth-child(2) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-item-grouper-down > div').should('exist')
  })

  it('should have vagas menu', () => {
    cy.visit('http://localhost:4200')
    cy.get(':nth-child(3) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-item-grouper-down > div').should('exist')
  })

  it('should have candidatos submenus', () => {
    cy.visit('http://localhost:4200')
    cy.get('body').then((body) => {
      if (body.find('.po-menu-mobile').length > 0) {
        cy.get('.po-menu-mobile').click();
      }
    });

    cy.get(':nth-child(2) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-item-grouper-down > div').click();
    cy.get(':nth-child(2) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-sub-items > :nth-child(1) > po-menu-item > .po-menu-item-link > .po-menu-item > div').contains('Pesquisar')
    cy.get(':nth-child(2) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-sub-items > :nth-child(2) > po-menu-item > .po-menu-item-link > .po-menu-item > div').contains('Cadastrar')

    cy.get(':nth-child(3) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-item-grouper-down > div').click();
    cy.get(':nth-child(3) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-sub-items > :nth-child(1) > po-menu-item > .po-menu-item-link > .po-menu-item > div').contains('Pesquisar')
    cy.get(':nth-child(3) > [ng-reflect-collapsed-menu="false"] > .po-clickable > .po-menu-sub-items > :nth-child(2) > po-menu-item > .po-menu-item-link > .po-menu-item > div').contains('Cadastrar')

  })
})

describe('candidatos', () => {
  it('should show "Cadastrar-se à vaga" modal', () => {
    cy.visit('http://localhost:4200/candidatos/list')
    cy.get('.po-loading').should('not.exist');
    cy.get(':nth-child(4) > .po-table-row > .po-table-column-actions > .po-icon').click()
    cy.get('.po-popup-container > :nth-child(1)').click();
    cy.contains('Cadastrar-se à vaga');
  })

  it('should show "Cadastrar curriculo" modal', () => {
    cy.visit('http://localhost:4200/candidatos/list')
    cy.get('.po-loading').should('not.exist');
    cy.get(':nth-child(4) > .po-table-row > .po-table-column-actions > .po-icon').click()
    cy.get('.po-popup-container > :nth-child(2)').click();
    cy.contains('Cadastrar curriculo');
  })

  it('should load page', () => {
    cy.visit('http://localhost:4200/candidatos/list')
    cy.contains('Pesquisar')
    cy.contains('Cadastrar Novo')
  })

  it('should load data', () => {
    cy.visit('http://localhost:4200/candidatos/list')
    cy.get('.po-loading').should('not.exist');
    cy.get('.po-table-row').should('exist')
  })
  
  it('should go to create new', () => {
    cy.visit('http://localhost:4200/candidatos/list')
    cy.get('.po-loading').should('not.exist');
    cy.get('[p-label="Cadastrar Novo"]').click();
    cy.url().should('include','/candidatos/create')
    cy.get('.po-loading').should('not.exist');
  })

  it('should go to update', () => {
    cy.visit('http://localhost:4200/candidatos/list')
    cy.get('.po-loading').should('not.exist');
    cy.get(':nth-child(2) > .po-table-row > .po-table-column-selectable > .po-table-radio-label').click();
    cy.get('[p-label="Editar"] > .po-button').click()
    cy.url().should('include','/candidatos/10')
    cy.get('.po-loading').should('not.exist');
  })

  it('should delete item', () => {
    cy.visit('http://localhost:4200/candidatos/list')
    cy.get('.po-loading').should('not.exist');
    cy.get(':nth-child(2) > .po-table-row > .po-table-column-selectable > .po-table-radio-label').click();
    cy.get('[p-label="Excluir"] > .po-button').click()
    cy.contains('Registro excluido com sucesso!')
  })

  
})


describe('vagas', () => {
  it('should load page', () => {
    cy.visit('http://localhost:4200/vagas/list')
    cy.contains('Pesquisar')
    cy.contains('Cadastrar Novo')
  })

  it('should load data', () => {
    cy.visit('http://localhost:4200/vagas/list')
    cy.get('.po-loading').should('not.exist');
    cy.get('.po-table-row').should('exist')
  })
  
  it('should go to create new', () => {
    cy.visit('http://localhost:4200/vagas/list')
    cy.get('.po-loading').should('not.exist');
    cy.get('[p-label="Cadastrar Novo"]').click();
    cy.url().should('include','/vagas/create')
    cy.get('.po-loading').should('not.exist');
  })

  it('should go to update', () => {
    cy.visit('http://localhost:4200/vagas/list')
    cy.get('.po-loading').should('not.exist');
    cy.get(':nth-child(2) > .po-table-row > .po-table-column-selectable > .po-table-radio-label').click();
    cy.get('[p-label="Editar"] > .po-button').click()
    cy.url().should('include','/vagas/1')
    cy.get('.po-loading').should('not.exist');
  })

  it('should delete item', () => {
    cy.visit('http://localhost:4200/vagas/list')
    cy.get('.po-loading').should('not.exist');
    cy.get(':nth-child(2) > .po-table-row > .po-table-column-selectable > .po-table-radio-label').click();
    cy.get('[p-label="Excluir"] > .po-button').click()
    cy.contains('Registro excluido com sucesso!')
  })

  it('should show modal', () => {
    cy.visit('http://localhost:4200/vagas/list')
    cy.get('.po-loading').should('not.exist');
    cy.get(':nth-child(2) > .po-table-row > .po-table-column-single-action > .po-table-single-action').click();
    cy.get('.po-loading').should('not.exist');
    cy.contains('Listagem de Candidatos para a vaga')
  })
})