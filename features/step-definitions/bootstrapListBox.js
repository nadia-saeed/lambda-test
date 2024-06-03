const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapListBox =  "//*[contains(text(),'Bootstrap List Box')]"
const locatorSearchLeft = $("div.dual-list.list-left input[name='SearchDualList']")
const locatorSearchRight = $("div.dual-list.list-right input[name='SearchDualList']")
const locatorResultList = $$('li.list-group-item')
const locatorResult = $$('div[class*="dual-list"]')

// function 1
async function openTheWebsite(){
    await browser.url(url)
}
// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

async function searchItemLeft(item, locatorSearch){
    for(const char of item){
        await locatorSearch.addValue(char)
    }
}

async function verifySearch(locatorResult, item){
    await expect (locatorResult).toHaveText(expect.stringContaining(item))
}

Given('user opens the bootstrap list box page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapListBox)
});

When('user searches for a valid item from list and click', async () => {
    await searchItemLeft('Milan', locatorSearchRight)
});

Then('user should find the entry', async ()=> {
    await verifySearch(locatorResultList[3], 'Milan')
});
