const internetPage = require('../../pages/internet.page')
const assert = require('assert')

describe('Scroll to Element', function () {
    it.skip('should scroll to the footer', async () => {
        await browser.url('/')
        await internetPage.pageHeader.waitForDisplayed()
        await internetPage.scrollToPageFooter()
        const isVisible = await internetPage.pageFooter.isDisplayedInViewport()
        assert.strictEqual(isVisible, true)
        browser.pause(3000)
    })
})