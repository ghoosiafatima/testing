const internetPage = require('../../pages/internet.page')
const assert = require('assert')

describe('The Internet Login Page', () => {
    it('should login with valid data', async () => {
        await internetPage.open();
        await internetPage.login('tomsmith', 'SuperSecretPassword!')

        const message = await internetPage.flashMessage.getText()
        assert.ok(message.includes('You logged into a secure area!'))
    })

    it('should show error for invalid data', async () => {
        await internetPage.open()
        await internetPage.login('invaliduser', 'wrongpass')

        const message = await internetPage.flashMessage.getText()
        assert.ok(message.includes('Your username is invalid!'))
    })
})