const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorTableSortAndSearch =  "//*[contains(text(),'Table Sort & Search')]"
const locatorSearch = 'input[type="search"]'
const locatorResults = 'tr[role="row"]'
let searchTab = ''
let resultsTab = ''

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
async function searchForTableEntry(text){
searchTab = $(locatorSearch)
await searchTab.waitForDisplayed()
for(const letters of text){
    await searchTab.addValue(letters)
}
}

// function 4
async function verifyResult(text){
resultsTab = $('tbody tr[role="row"]')
await expect(resultsTab).toHaveTextContaining(text)
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorTableSortAndSearch)
});

When('user searches for a specific entry', async () => {
    await searchForTableEntry('Bennet')
    
});

Then('user gets the relevant result', async ()=> {
    await verifyResult('Bennett')
});
