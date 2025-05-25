const internetPage = require('../../pages/internet.page')
const assert = require('assert')

describe('Javascript Alerts', function () {
    it.only('should get text of alert', async () => {
        await browser.url(`${browser.options.baseUrl}/javascript_alerts`)
        await internetPage.clickJavascriptAlertButton(1)
        const alertText = await browser.getAlertText()
        assert.equal(alertText, 'I am a JS Alert')
    })
    it('should accept alert', async () => {
        await browser.acceptAlert()
        assert.equal('You successfuly clicked an alert', await internetPage.getResultText())
    })
    it('should dismiss alert', async () => {
        await internetPage.clickJavascriptAlertButton(2)
        await browser.dismissAlert()
        assert.equal('You clicked: Cancel', await internetPage.getResultText())
    })
    it('should send text to the alert', () => {
        internetPage.clickJavascriptAlertButton(3)
        browser.sendAlertText('This is some text')
        browser.acceptAlert()
        assert.equal('You entered: This is some text', internetPage.getResultText())
    })
})