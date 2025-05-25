const internetPage = require('../../pages/internet.page')
const assert = require('assert')
describe('Switch Window', function () {
    it('Should switch to the next window', async () => {
        await browser.url(`${browser.options.baseUrl}/windows`)
        await internetPage.clickHereLink()
        await browser.switchWindow(`${browser.options.baseUrl}/windows/new`)
        assert.equal(true, await internetPage.h3Header.isExisting())
        assert.equal(true, await internetPage.h3Header.isDisplayed())
        assert.equal('New Window', await internetPage.h3Header.getText())
    })
})