const internetPage = require('../../pages/internet.page')
const assert = require('assert')

describe('Wait For Exist', function () {
    it('should wait until the delete button exists', async () => {
        await browser.url(`${browser.options.baseUrl}/add_remove_elements/`)
        await internetPage.clickExampleButton()
        await internetPage.deleteButton(1).waitForExist({
            timeout: 5000,
            // timeoutMsg: 'Delete button did not appear in time'
        });

        const exists = await internetPage.deleteButton(1).isExisting();
        assert.strictEqual(exists, true);
    });
});