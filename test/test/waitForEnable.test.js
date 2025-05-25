const internetPage = require('../../pages/internet.page')
const assert = require('assert')
describe("Wait For Enabled", function () {
    it('should wait for the input field to be enabled', async () => {
        await browser.url(`${browser.options.baseUrl}/dynamic_controls`)
        await internetPage.clickEnableButton()
        await internetPage.inputEnabledField.waitForEnabled({
            timeout: 4000,
            timeoutMsg: 'Input field was not enabled in time'
            // browser.debug()
        })
        const isEnabled = await internetPage.inputEnabledField.isEnabled();
        assert.strictEqual(isEnabled, true);
        browser.pause(4000)
    })
})