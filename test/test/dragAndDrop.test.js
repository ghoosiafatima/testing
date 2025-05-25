internetPage = require('../../pages/internet.page')
const assert = require('assert')
describe("Drag and Drop", function () {

    it.skip('should drag column A to column B', async () => {

        await browser.url(`${browser.options.baseUrl}/drag_and_drop`)

        await internetPage.dragColumnAToColumnB()

        await browser.pause(3000)

        assert.equal("A", await internetPage.columnBHeader.getText())

    })

    it('Should drag and drop', async () => {
        await browser.url('https://crossbrowsertesting.github.io/drag-and-drop.html')
        await internetPage.dragDraggableToDroppable()
        assert.equal('Dropped!', await internetPage.droppableParagraph.getText())
    })

})