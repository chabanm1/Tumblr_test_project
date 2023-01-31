import { accountPage } from "../support/pages/accountPage";
import { basePage } from "../support/pages/basePage";
import { postPage } from "../support/pages/postPage";
import "cypress-file-upload";
import "@4tw/cypress-drag-drop";

beforeEach(() => {
  cy.viewport(1800, 920);
  basePage.loginUser();
});

let editorType = "html";
let postTitle = "Cypress Test";
let urlKeyWord = "/queue";
let newImage = "mickey.jpg";

it("create post using HTML text editor ", () => {
  basePage.clickOnNewPostButton();
  postPage.clickOnTextContentType();
  postPage.clickOnSettingsButton();
  postPage.selectEditor(editorType);
  basePage.clickOutside();
  postPage.typePostTitleHtmlEditor(postTitle);
  postPage.clickOnPostNowButton();
  postPage.clickOnViewButton();
  accountPage.checkTitleOfTheLastCreatedPost(postTitle);
});

it.only("add post with image to the queue ", () => {
  basePage.clickOnNewPostButton();
  postPage.clickOnTextContentType();
  postPage.typePostTitleRichTextEditor(postTitle);
  postPage.clickOnParagraphField();
  postPage.clickOnAddImageButton();
  postPage.addFileToThePost(newImage);
  postPage.scrollIntoOpenPostStateOptionsButton();
  postPage.clickOnOpenPostStateOptionsButton();
  postPage.selectAddToQueueOption();
  postPage.clickOnAddToQueueButton();
  postPage.clickOnViewButton();
  accountPage.checkSectionUrl(urlKeyWord);
  accountPage.checkIftheLastPostContainImage();
});
