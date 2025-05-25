internetPage = require('../../pages/internet.page')
const assert = require('assert')

describe('WaitUntil', function () {
    it('should wait until the button text changes to Add', async () => {
        await browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        await internetPage.clickPageButton()
        await browser.waitUntil(async () => {
            return (await internetPage.pageButton.getText()) === 'Add'
        }, {
            timeout: 6000,
            timeoutMsg: 'Expect button text to change'
        })
    })
    it('should wait until the button text changes to Remove', async () => {
        await internetPage.clickPageButton()
        await browser.waitUntil(async () => {
            return (await internetPage.pageButton.getText()) === 'Remove'
        }, {
            timeout: 6000,
            timeoutMsg: 'Expect button text to change'
        })
        const buttonText = await internetPage.pageButton.getText()
        assert.equal(buttonText, 'Remove')
    })
})        
