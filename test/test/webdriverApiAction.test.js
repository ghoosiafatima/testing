const internetPage = require('../../pages/internet.page')
const assert = require('assert')

describe('WebdriverIO API Actions', function () {
    it('should hover on figure', async () => {
        await browser.url(`${browser.options.baseUrl}/hovers`)

        await internetPage.hoverOnFigure(3)
        const detailsText = await internetPage.getFigureDetailsText(3)
        assert.strictEqual(detailsText.trim(), 'name: user3')
    })
})