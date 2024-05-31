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
}


Given('user opens the website', async () => {
    await openTheWebsite()
});

When('user filters the desired entry', async () => {
    await clickSpecificGround(locatorJQueryListBox)

});

Then('user gets the respective data if it was present', async ()=> {
    await clickOnListElement('05')
    await locatorAdd.click()
    await browser.pause(1000)
    await locatorAddAll.click()
    await browser.pause(1000)
    await locatorRemoveAll.click()
    await browser.pause(1000)
});