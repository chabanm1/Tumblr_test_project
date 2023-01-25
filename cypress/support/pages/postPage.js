import { BasePage } from "./basePage";

export class PostPage extends BasePage {
  //Locators
  textContentType = '[class^="lWf47 eK_JR gjWXz"]';
  editorModeSetting = '[id="editorModeSetting"]';
  postTitleFieldHtmlEditor = '[class="block-editor-plain-text"]';
  postTitleFieldRichTextEditor = 'h1[role="document"]';
  postParagraphFieldRichTextEditor = 'p[role="document"]';

  //Buttons
  settingsButton = '[class="TRX6J KSOyK"]';
  openPostStateOptionsButton = '[class^="EvhBA qtKRw"]';
  addImageButton = '[class^="EvhBA imageButton"]';

  //Actions
  clickOnTextContentType() {
    cy.get(this.textContentType).click();
  }
  clickOnSettingsButton() {
    cy.get(this.settingsButton).click();
  }
  selectEditor(editorType) {
    cy.get(this.editorModeSetting).select(editorType);
  }
  typePostTitleHtmlEditor(text) {
    cy.get(this.postTitleFieldHtmlEditor).click().type(text).wait(2000);
  }
  typePostTitleRichTextEditor(text) {
    cy.get(this.postTitleFieldRichTextEditor).click().type(text);
  }
  clickOnParagraphField() {
    cy.get(this.postParagraphFieldRichTextEditor).click();
  }
  clickOnPostNowButton() {
    cy.get('[class="EvhBA"]').contains("Post now").click();
  }
  clickOnViewButton() {
    cy.get('[class="Rti1P"]').contains("View").click();
  }
  scrollIntoOpenPostStateOptionsButton() {
    cy.get(this.openPostStateOptionsButton).scrollIntoView();
  }
  clickOnOpenPostStateOptionsButton() {
    cy.get(this.openPostStateOptionsButton).click();
  }
  clickOnAddImageButton() {
    cy.get(this.addImageButton).click();
  }
  addFileToThePost(file) {
    cy.get("input[type=file]").selectFile(file, { force: true });
  }
  selectAddToQueueOption() {
    cy.get('[class^="NUymP"]').eq(1).click();
  }
  clickOnAddToQueueButton() {
    cy.get('[class="EvhBA"]').contains("Add to queue").click();
  }
}
export const postPage = new PostPage();
