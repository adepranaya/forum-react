/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when username is empty
 *   - should display alert when password is empty
 *   - should display alert when username and password are wrong
 *   - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  it('should display login page correctly', () => {
    cy.visit('http://localhost:5173/login');

    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="dev@example.com"]').should('be.visible');
    cy.get('input[placeholder="••••••••"]').should('be.visible');
    cy.get('button[type="submit"]')
      .contains(/^Sign In$/)
      .should('be.visible');
  });
  it('should display alert when username is empty', () => {
    cy.visit('http://localhost:5173/login');

    // mengisi password saja
    cy.get('input[placeholder="••••••••"]').type('mypassword');
    cy.get('button[type="submit"]')
      .contains(/^Sign In$/)
      .click();

    // memverifikasi alert muncul
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please enter your email address.');
    });
  });

  it('should display alert when password is empty', () => {
    cy.visit('http://localhost:5173/login');

    // mengisi email saja
    cy.get('input[placeholder="dev@example.com"]').type('dev@example.com');
    cy.get('button[type="submit"]')
      .contains(/^Sign In$/)
      .click();

    // memverifikasi alert muncul
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please enter your password.');
    });
  });
  it('should display alert when username and password are wrong', () => {
    cy.visit('http://localhost:5173/login');

    // mengisi email dan password yang salah
    cy.get('input[placeholder="dev@example.com"]').type('dev@example.com');
    cy.get('input[placeholder="••••••••"]').type('wrongpassword');
    cy.get('button[type="submit"]')
      .contains(/^Sign In$/)
      .click();

    // memverifikasi alert muncul
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Invalid email or password.');
    });
  });
  it('should display homepage when username and password are correct', () => {
    cy.visit('http://localhost:5173/login');

    // mengisi email dan password yang benar
    cy.get('input[placeholder="dev@example.com"]').type('testuser2@example.com');
    cy.get('input[placeholder="••••••••"]').type('test123456');
    cy.get('button[type="submit"]')
      .contains(/^Sign In$/)
      .click();

    // memverifikasi halaman homepage muncul
    cy.get('aside').contains(/^All Threads$/).should('be.visible');
    cy.get('button').contains(/Sign out/i).should('be.visible');
  });
});