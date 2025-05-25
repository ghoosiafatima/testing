class Internet {
    get pageHeader() { return $('h1.heading') }
    get subHeading() { return $('h2') }
    get h3Header() { return $('h3') }
    get pageFooter() { return $('#page-footer') }
    get parent() { return $('ul') }
    get childElement() { this.parent.$$('.li') }
    specificChildElement(index) { return this.parent.$(`li:nth-child(${index})`) }
    get firstLink() { return $('ul li:nth-child(1) a') }
    link(index) { return $(`ul li:nth-child(${index}) a`) }

    checkboxes(index) { return $(`#checkboxes input:nth-child(${index})`); }
    get username() { return $('#username'); }
    get password() { return $('#password'); }

    figures(index) { return $(`.example .figure:nth-of-type(${index}) img`) }
    figureDetails(index) { return $(`.example .figure:nth-of-type(${index}) .figcaption h5`) }

    get target() { return $('.example #target') }
    get result() { return $('.example #result') }

    get hereLink() { return $('.example a') }
    get iframeBody() { return $('#tinymce') }
    get iframe() { return $('.tox-edit-area__iframe') }

    get columnA() { return $('#column-a') }
    get columnB() { return $('#column-b') }
    get columnAHeader() { return $('#column-a header') }
    get columnBHeader() { return $('#column-b header') }
    get draggable() { return $('#draggable') }
    get droppable() { return $('#droppable') }
    get droppableParagraph() { return $('#droppable p') }
    get dropdownMenu() { return $('#dropdown') }
    get dropdownMenuOption1() { return $('#dropdown option:nth-of-type(1)') }

    javascriptAlertButton(index) { return $(`.example li:nth-of-type(${index}) button`) }

    get exampleButton() { return $('.example button') }
    deleteButton(index) {
        return $(`#elements button:nth-of-type(${index})`);
    }

    get pageButton() { return $('#checkbox-example button') }

    get usernameInput() { return $('#username'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('button[type="submit"]'); }
    get flashMessage() { return $('#flash'); }


    async login(username, password) {
        await this.usernameInput.waitForDisplayed();
        await this.usernameInput.setValue(username);

        await this.passwordInput.waitForDisplayed();
        await this.passwordInput.setValue(password);

        await this.loginButton.waitForDisplayed();
        await this.loginButton.click();
    }

    async open() {
        await browser.url('https://the-internet.herokuapp.com/login');
    }





    /** 
    * Click the Page Button
    */
    async clickPageButton() {
        await this.pageButton.waitForDisplayed()
        await this.pageButton.click()
    }

    /** 
   * Click the Example Button
   */
    async clickExampleButton() {
        await this.exampleButton.waitForDisplayed()
        await this.exampleButton.click()
    }
    /**
     * Clicks the delete button
     * @param {Number} index index of the element
     */
    async clickDeleteButton(index) {
        await this.deleteButton(index).waitForDisplayed()
        await this.deleteButton(index).click()
    }

    get enableButton() { return $('#input-example button') }
    get inputEnabledField() { return $('#input-example input') }
    /** 
     * Click the Enable/Disable Button
     */
    async clickEnableButton() {
        await this.enableButton.waitForDisplayed()
        await this.enableButton.click()
    }

    /**
   * Click the specified javascript alert button
   * @param {Number} index the index of the element
   */
    async clickJavascriptAlertButton(index) {
        await this.javascriptAlertButton(index).waitForDisplayed()
        await this.javascriptAlertButton(index).click()
    }


    /** 
     * Click the dropdown Button
     */
    async clickDropdownMenu() {
        await this.dropdownMenu.waitForDisplayed()
        await this.dropdownMenu.click()
    }

    async clickDropdownMenuOption1() {
        await this.dropdownMenuOption1.waitForDisplayed()
        await this.dropdownMenuOption1.click()
    }

    /**
 * Drag and drop
 */
    async dragDraggableToDroppable() {
        await this.draggable.waitForDisplayed()
        await this.draggable.dragAndDrop(this.droppable)
    }
    /**
         * Drag box A to box B
         */
    async dragColumnAToColumnB() {
        await this.columnA.waitForDisplayed()
        await this.columnA.dragAndDrop(this.columnB)
    }

    /**
    * Enter text in the iframe
    * @param {String} text the text to be entered
    */

    async sendTextToBody(text) {
        console.log('In sendTextToBody, about to access #tinymce');
        const iframeBody = await this.iframeBody;
        await iframeBody.waitForDisplayed();
        await iframeBody.clearValue();
        await iframeBody.click();
        await iframeBody.keys(text);
    }
    /**
     * Click the "click here" link
     */
    async clickHereLink() {
        await this.hereLink.waitForDisplayed()
        await this.hereLink.click()
    }

    /**
         * Clicks the target input field
         */
    async clickTarget() {
        await this.target.waitForDisplayed();
        await this.target.click();
    }
    /**
   * Send keybord keys to Target
   * @param {String} text The keyboard text to enter
   */
    async sendKeysToTarget(text) {
        await this.target.waitForDisplayed();
        await this.target.click();
        await browser.keys(text);
    }


    /**
   * Return the text of the return element
   */
    async getResultText() {
        await this.result.waitForDisplayed();
        return await this.result.getText();
    }

    /**
 * Hovers over the specified image
 * @param {Number} index the specific index of the image
  */
    async hoverOnFigure(index) {
        const figure = await this.figures(index)
        await figure.waitForDisplayed()
        await figure.moveTo(1, 1)
    }
    /**
     * Returns the text of the figure details
     * @param {Number} index the index of the element
     */
    async getFigureDetailsText(index) {
        const details = await this.figureDetails(index)
        await details.waitForDisplayed()
        return await details.getText()
    }

    /**
     * Enter the username into the field
     * @param {String} text username to be entered
     */
    async enterUsername(text) {
        await this.username.waitForDisplayed({ timeout: 5000 })
        await this.username.setValue(text)
    }
    /**
 * Enter the password into the field
 * @param {String} text password to be entered
  */
    async enterPassword(text) {
        await this.password.waitForDisplayed({ timeout: 5000 })
        await this.password.setValue(text)

    }
    /**
     * Clicks on the link based on the index provided
     * @param {Number} index the index of the element
     */
    async clickLink(index) {
        const linkElement = await this.link(index);
        await linkElement.waitForDisplayed();
        await linkElement.click();
    }

    async clickCheckbox(index) {
        const checkbox = await this.checkboxes(index);
        await checkbox.waitForDisplayed();
        await checkbox.click();
    }

    async getLiTest() {
        const elements = await this.childElements;
        for (const element of elements) {
            const text = await element.getText();
            console.log(text);
        }
    }
    async getSpecificElementText(index) {
        const el = await this.specificChildElement(index);
        return await el.getText();
    }
    async clickOnLink() {
        const firstElementLink = await this.firstLink;
        const isDisplayed = await firstElementLink.isDisplayed();
        if (isDisplayed === true) {
            await firstElementLink.click()
        }
        this.h3Header.waitForDisplayed()

    }

    async scrollToPageFooter() {
        await this.pageFooter.moveTo()
    }

}
const internetObject = new Internet();
module.exports = internetObject;