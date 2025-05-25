const internetPage = require('../../pages/internet.page')
const assert = require('assert')

describe('Switch to Iframe', function () {
    it('Should switch to iframe and type test', async () => {
        await browser.url(`${browser.options.baseUrl}/iframe`)
        await internetPage.h3Header.waitForDisplayed()
        await internetPage.iframe.waitForDisplayed()
        await browser.switchToFrame(await internetPage.iframe)
        await internetPage.iframeBody.waitForDisplayed()

        const inputText = 'This is the text in the iframe body'
        await internetPage.sendTextToBody(inputText)
        const actualText = await internetPage.iframeBody.getText()
        assert.strictEqual(actualText, inputText, 'Text inside iframe body does not match expected')
    })
})