const internetPage = require('../../pages/internet.page')
const assert = require('assert')
describe('Dropdown menu', function () {
    it('should select option 1', async () => {
        await browser.url(`${browser.options.baseUrl}/dropdown`)
        await internetPage.clickDropdownMenu()
        await internetPage.clickDropdownMenuOption1()
        assert.equal(true, await internetPage.dropdownMenuOption1.isSelected())
    })
}) 