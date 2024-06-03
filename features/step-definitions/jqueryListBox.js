const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
let url = 'https://www.lambdatest.com/selenium-playground/'
const locatorJQueryListBox =  "//*[contains(text(),'JQuery List Box')]"

const locatorAdd = $("//button[contains(@class, 'pAdd') and text()='Add']")
const locatorAddAll = $("//button[contains(@class, 'pAdd') and text()='Add All']")
const locatorRemove = $("//button[contains(@class, 'pRemove') and text()='Remove']")
const locatorRemoveAll = $("//button[contains(@class, 'pRemove') and text()='Remove All']")
// const locatorFieldOne = $('')
const locatorFieldTwo = $("//div[@id='pickList']//select[@class='border-4 border-gray-950 h-full p-10 rounded w-full form-control pickListSelect pickListResult']")

// function 1
async function openTheWebsite(){
    await browser.url(url)
}

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

async function clickOnListElement(liNumber){
let listElement = $(`//select[@class='border-4 border-gray-950 h-full p-10 rounded w-full form-control pickListSelect pickData']/option[@data-id='${liNumber}']`)
await listElement.click()
await locatorAdd.click()
}

async function verifyItemPresence(name){
    await locatorFieldTwo.waitForDisplayed()
    await expect(locatorFieldTwo).toHaveText(expect.stringContaining(name))
}

async function verifyItemAbsence(name){
    await locatorFieldTwo.waitForDisplayed()
    isPresent = await locatorFieldTwo.isDisplayed()
    await expect(isPresent).toBe(false)
}

Given('user is on the dual list box page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorJQueryListBox)
});

When('user selects an item from the left box and adds', async () => {
    await clickOnListElement('10')
    await clickOnListElement('14')
});

Then('the item should be in the right box', async ()=> {
    await verifyItemPresence('Andrea')
    await verifyItemPresence('Una')

When('user clicks remove-all button', async()=>{
    await locatorRemoveAll.click()
})

Then('all items get removed from the box', async()=>{
    await verifyItemAbsence('Andrea')
    await verifyItemAbsence('Una')
})
    
    // await browser.pause(1000)
    // await locatorAddAll.click()
    // await browser.pause(1000)
    // await locatorRemoveAll.click()
    // await browser.pause(1000)
});