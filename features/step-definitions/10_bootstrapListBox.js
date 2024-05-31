const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// incomplete
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapListBox =  "//*[contains(text(),'Bootstrap List Box')]"

const locatorSearchLeft = $("div.dual-list.list-left input[name='SearchDualList']")
const locatorSearchRight = $("div.dual-list.list-right input[name='SearchDualList']")
const locatorResultList = $('li.list-group-item')
let result
//const locatorResultTwo = $('')


// function 1
async function openTheWebsite(){
    await browser.url(url)
}
// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

async function searchItemLeft (item, locatorSearch){
    for(const char of item){
        await locatorSearch.addValue(char)
    }
}

async function verifySearch(locatorResult, item){
    // await locatorResult.waitForDisplayed()
// result = await locatorResult.getText()
await expect (locatorResult).toHaveTextContaining(item)
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapListBox)
});

When('user searches for a valid item from list', async () => {
    await searchItemLeft('Danville', locatorSearchLeft)
});

Then('user should find the entry', async ()=> {
    await verifySearch(locatorResultList, 'Danville')
});
