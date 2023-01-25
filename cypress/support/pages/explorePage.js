import { BasePage } from "./basePage";

export class ExplorePage extends BasePage {
  //Locators
  GoToSelectedBlogActivityPageLink = 'a[class="iRWlG"]';
  filtersGroupSimilarNotificationsCheckboxOption =
    'input[type="checkbox"][aria-labelledby="rollups"]';

  //Buttons
  filterActivityNotificationsButton =
    '[class="TRX6J"][aria-label="Filter activity notifications"]';
  applyfiltersButton = '[class="TRX6J CxLjL qjTo7 IMvK3"]>span';

  //Actions
  clickOnTextContentType() {
    cy.get(this.textContentType).click();
  }
  clickOnGoToSelectedBlogActivityPageLink() {
    cy.get(this.GoToSelectedBlogActivityPageLink).click();
  }
  clickOnFilterActivityNotificationsButton() {
    cy.get(this.filterActivityNotificationsButton).click();
  }
  uncheckfiltersGroupSimilarNotificationsOption() {
    cy.get(this.filtersGroupSimilarNotificationsCheckboxOption).uncheck();
  }
  checkfiltersGroupSimilarNotificationsOption() {
    cy.get(this.filtersGroupSimilarNotificationsCheckboxOption).check();
  }
  clickOnApplyfiltersButton() {
    cy.get(this.applyfiltersButton).click();
  }
  //Assertions
  checkfiltersGroupSimilarNotificationsOptionState(state) {
    cy.get(this.filtersGroupSimilarNotificationsCheckboxOption).should(state);
  }
}
export const explorePage = new ExplorePage();
