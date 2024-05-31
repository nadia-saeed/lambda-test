const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorDataListFilter =  "//*[contains(text(),'Data List Filter')]"

const elementData = $("//div[contains(@class, 'searchable-container') and contains(@class, 'grid')]")
const elementSearch = $("#input-search")


// function 1
async function openTheWebsite(){
    await browser.url(url)
}
// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}
// function 3
async function searchForEntry(searchStatement){
    for(const char of searchStatement){
        await elementSearch.addValue(char)
    }
}
//function 4
async function verifySearch(expectedText){
    await expect(elementData).toHaveTextContaining(expectedText)
}


Given('user opens the data list filter page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorDataListFilter)
});


When('user searches for {string}', async (searchStatement) => {
    await searchForEntry(searchStatement)
});

Then('user should see {string}', async (expectedText)=> {
    await verifySearch(expectedText)
});


