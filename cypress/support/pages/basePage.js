export class BasePage {
  //Locators
  userEmailField = '[name="email"]';
  userPasswordField = '[type="password"]';
  url = "https://www.tumblr.com/login";
  datePickerField = '[class^="XkwKr"][aria-label="Date"]';

  //Buttons
  loginButton = '[class^="EvhBA"]';
  newPostButton = '[class^="fvSXi xxqHJ"]';
  accountButton = '[class="TRX6J B1L2M"][aria-label="Account"]';
  exploreButton = '[class="TRX6J B1L2M"][aria-label="Activity"]';
  //Actions
  loginUser() {
    cy.visit(this.url);
    cy.get(this.userEmailField).click().type(Cypress.env("userEmail"));
    cy.get(this.userPasswordField).click().type(Cypress.env("userPassword"));
    cy.get(this.loginButton).contains("Log in").click();
  }
  clickOnNewPostButton() {
    cy.get(this.newPostButton).click();
  }
  clickOutside() {
    cy.get("body").click(0, 0);
  }
  clickOnAccountButton() {
    cy.get(this.accountButton).click();
  }
  clickOnExploreButton() {
    cy.xpath(this.exploreButton).click();
  }
  typeCurrentDate(today) {
    cy.get(this.datePickerField).type(today);
  }
}
export const basePage = new BasePage();
