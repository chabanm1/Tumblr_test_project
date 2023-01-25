import { BasePage } from "./basePage";

export class AccountPage extends BasePage {
  //Locators
  postTitle = '[class="k31gt"]';
  customUrlField = '[class^="fh0lY"][name="custom URL"]';
  menuItem = '[class^="ZC1wz"]';
  userNameLink = '[data-login-wall-type="blogView"][class="BSUG4"]';
  backgroundWallImage = '[class="qvXRI"][alt="Untitled"]';
  userNameField = 'input[class="gWXwV"]';
  blogsSectionUserName = 'span[class="UulOO"]';
  themeSection = '[class^="ZC1wz"]>span';
  postBody = '[class="DdFPj"][data-login-wall-type="blogView"]';

  //Buttons
  editPostButton = '[aria-label="Edit"]';
  settingsButton = '[class="TRX6J KSOyK"]';
  blogSettingsButton = '[class="Z8Ux2 qjTo7 IMvK3 MvA0k qNKBC"]';
  editUserNameButton = '[class="TRX6J"][aria-label="Change your username"]';
  saveChangesButton =
    '[class="TRX6J CxLjL qjTo7 IMvK3 SYoWm"][aria-label="Save changes"]';

  //Actions
  clickOnPostLink() {
    cy.contains("Posts").click();
  }
  clickOnEditPostButtonOfLastCreatedPost() {
    cy.get(this.editPostButton).first().click();
  }
  clickOnSettingsButton() {
    cy.get(this.settingsButton).click();
  }
  clearCustomUrlField() {
    cy.get(this.customUrlField).clear().wait(1000);
  }
  typeNewCustomUrl(newUrl) {
    cy.get(this.customUrlField).type(newUrl);
  }
  clickOnDatePickerButton() {
    cy.get(this.datePickerButton).click();
  }
  clearDatePicker() {
    cy.get(this.datePickerButton).clear();
  }
  clickOnSaveButton() {
    cy.get('[class="EvhBA"]').contains("Save").click();
  }
  doubleClickOnThemeMenuItem() {
    cy.get(this.menuItem).last().dblclick();
  }
  hoverOnUserNameLinkFromFirstPost() {
    cy.get(this.userNameLink).first().trigger("mouseover");
    cy.wait(1500);
  }
  clickOnBackgroundWallImage() {
    cy.get(this.backgroundWallImage).click();
  }
  clickOnBlogSettingsButton() {
    cy.get(this.blogSettingsButton).click().wait(1500);
  }
  clickOnEditUserNameButton() {
    cy.get(this.editUserNameButton).click();
  }
  typeUserName(newUserName) {
    cy.get(this.userNameField).clear().type(newUserName);
  }
  clickOnSaveChangesButton() {
    cy.get(this.saveChangesButton).click();
  }
  //Assertions
  checkTitleOfTheLastCreatedPost(text) {
    cy.get(this.postTitle).first().should("have.text", text);
  }
  checkSectionUrl(text) {
    cy.location().should((loc) => {
      expect(loc.pathname).to.have.string(text);
    });
  }
  checkEditedDate(today) {
    cy.get(this.datePickerField).should("have.value", today);
  }
  checkCustomUrl(customUrl) {
    cy.get(this.customUrlField).should("have.value", customUrl);
  }
  checkTheme(themeName) {
    cy.get(this.themeSection).should("have.text", themeName);
  }
  checkUserNameFromBlogsSection(userName) {
    cy.get(this.blogsSectionUserName)
      .should("have.text", userName)
      .and("have.class", "UulOO");
  }
  checkIftheLastPostContainImage() {
    cy.get(this.postBody).first().find("img").should("have.attr", "srcset");
  }
}
export const accountPage = new AccountPage();
