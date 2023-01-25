import { accountPage } from "../support/pages/accountPage";
import { basePage } from "../support/pages/basePage";

beforeEach(() => {
  cy.viewport(1800, 920);
  basePage.loginUser();
});

let customUrl = "newcustomurl".slice(3);
let today = new Date().toISOString().slice(0, 10);
let themeName = "Low-Contrast Classic";
let userAccountName = "testusernamecypress";

it("edit custom_url/date of the last created post ", () => {
  basePage.clickOnAccountButton();
  accountPage.clickOnPostLink();
  accountPage.clickOnEditPostButtonOfLastCreatedPost();
  accountPage.clickOnSettingsButton();
  accountPage.clearCustomUrlField();
  accountPage.typeNewCustomUrl(customUrl);
  accountPage.typeCurrentDate(today);
  basePage.clickOutside();
  accountPage.clickOnSaveButton();
  accountPage.clickOnEditPostButtonOfLastCreatedPost();
  accountPage.clickOnSettingsButton();
  accountPage.checkEditedDate(today);
  accountPage.checkCustomUrl(customUrl);
});

it("change default theme to 'Low-Contrast Classic' ", () => {
  basePage.clickOnAccountButton();
  accountPage.doubleClickOnThemeMenuItem();
  accountPage.checkTheme(themeName);
});

it("edit user account name", () => {
  basePage.clickOnAccountButton();
  accountPage.clickOnPostLink();
  accountPage.hoverOnUserNameLinkFromFirstPost();
  accountPage.clickOnBackgroundWallImage();
  accountPage.clickOnBlogSettingsButton();
  accountPage.clickOnEditUserNameButton();
  accountPage.typeUserName(userAccountName);
  accountPage.clickOnSaveButton();
  basePage.clickOutside();
  accountPage.checkUserNameFromBlogsSection(userAccountName);
});
