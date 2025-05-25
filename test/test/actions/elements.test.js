const { expect } = require('chai')
const internetPage = require("../../../pages/internet.page")

describe("intertactin with elements", function () {
   it("get text for element", async () => {
      browser.url('/')
      let text = await $("#page-footer").getText()
   })
   it("is footer displayed", () => {
      console.log(internetPage.pageFooter.isDisplayed())
   })
   it("does the header exist?", () => {
      console.log(internetPage.pageHeader.isExisting())
   })
   it("is the subheader enabled", async () => {
      console.log($('h2').isEnabled())
   })
   it("clickElement", () => {
      internetPage.clickOnLink()
   })
})





// "scripts": {
//   "test": "npm run wdio",
//   "actions": "wdio --suite actions",
//   "wdio": "wdio run ./wdio.conf.js"
// },