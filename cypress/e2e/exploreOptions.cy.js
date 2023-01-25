import { basePage } from "../support/pages/basePage";
import { explorePage } from "../support/pages/explorePage";

beforeEach(() => {
  cy.viewport(1800, 920);
  basePage.loginUser();
});

let unchecked = "not.be.checked";
let checked = "be.checked";

it("filter activity notifications checkboxes functionality. Uncheck Group similar notifications option", () => {
  basePage.clickOnExploreButton();
  explorePage.clickOnGoToSelectedBlogActivityPageLink();
  explorePage.clickOnFilterActivityNotificationsButton();
  explorePage.uncheckfiltersGroupSimilarNotificationsOption();
  explorePage.clickOnApplyfiltersButton();
  explorePage.clickOnFilterActivityNotificationsButton();
  explorePage.checkfiltersGroupSimilarNotificationsOptionState(unchecked);
});

it("filter activity notifications checkboxes functionality. Check Group similar notifications option", () => {
  basePage.clickOnExploreButton();
  explorePage.clickOnGoToSelectedBlogActivityPageLink();
  explorePage.clickOnFilterActivityNotificationsButton();
  explorePage.checkfiltersGroupSimilarNotificationsOption();
  explorePage.clickOnApplyfiltersButton();
  explorePage.clickOnFilterActivityNotificationsButton();
  explorePage.checkfiltersGroupSimilarNotificationsOptionState(checked);
});
