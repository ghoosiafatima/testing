const assert = require('assert')
const internetPage = require('../../pages/internet.page')
loginData = require('../../data/logindata')

describe("Test element action", function () {
    it('should click element', async () => {
        await browser.url('/')
        await internetPage.clickOnLink()
        const currentUrl = await browser.getUrl()
        await expect(currentUrl).toEqual('https://the-internet.herokuapp.com/abtest')
    })


    it('should click element', async () => {
        await browser.url('/')
        await internetPage.clickOnLink()
        const pageUrl = await browser.getUrl()
        await expect(pageUrl).toEqual('https://the-internet.herokuapp.com/abtest')
    })

    it('should get Text', async () => {
        await browser.url('/')
        const data = await internetPage.getSpecificElementText(1)
        console.log("🚀 ~ it ~ data:", data)
        await expect(data).toEqual('A/B Testing')
    })

    it('should click checkbox', async () => {
        await internetPage.clickLink(6)
        await internetPage.clickCheckbox(1)
        const isSelected = await internetPage.checkboxes(1).isSelected()
        await expect(isSelected).toBe(true)
    })

    it('should uncheck checkbox', async () => {
        await internetPage.clickCheckbox(1)
        const isSelected = await internetPage.checkboxes(1).isSelected()
        await expect(isSelected).toBe(false)
    })

    it('should enter username', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await internetPage.enterUsername('loginData.userName')
        const value = await internetPage.username.getValue()
        await assert.equal('loginData.userName', value)
    })
    it('should enter password', async () => {
        await browser.url(`${browser.options.baseUrl}/login`)
        await internetPage.enterPassword('loginData.password')
        const value = await internetPage.password.getValue()
        await expect(value).toEqual('loginData.password')
    })

    it('should clear value', async () => {
        await internetPage.username.click()
        await internetPage.username.clearValue()
        const clearedValue = await internetPage.username.getValue()
        expect(clearedValue).toEqual('')
    })
    it('should send keyboard value Backspace', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget('Backspace')
        const resultText = await internetPage.getResultText()
        assert.strictEqual(resultText, 'You entered: BACK_SPACE')
    })

    it('should send keyboard value Tab', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget('Tab')
        const resultText = await internetPage.getResultText()
        assert.strictEqual(resultText, 'You entered: TAB')
    })

    it('should send keyboard value Shift', async () => {
        await browser.url(`${browser.options.baseUrl}/key_presses`)
        await internetPage.clickTarget()
        await internetPage.sendKeysToTarget('Shift')
        const resultText = await internetPage.getResultText()
        assert.strictEqual(resultText, 'You entered: SHIFT')
    })

})