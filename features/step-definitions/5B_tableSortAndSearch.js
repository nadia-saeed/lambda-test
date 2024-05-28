const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// pending
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorTableSortAndSearch =  "//*[contains(text(),'Table Sort & Search')]"
const locatorSort = 'thead.thead-inverse tr[role="row"] th.sorting_asc'
const locatorResults = 'tr[role="row"]'
// const locatorSingleModalTitle = '//button[contains(text(), "Changes")]'
// const locatorSubmissionResponse = "#submit-control"
let searchTab = ''
let resultsTab = ''
// let submitButton = ''

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
async function clickToSort(){
    await $(locatorSort).waitForDisplayed()
    await $(locatorSort).click()
const rows = await $$('tbody tr[role="row"]')
const columns = await rows[1].$$('td')
const columns2 = await rows[2].$$('td')
console.log(await columns[0].getText())
console.log(await columns2[0].getText())


await browser.pause(7000)
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorTableSortAndSearch)
});


When('user searches for a specific entry', async () => {
    
    await browser.pause(1000)
});

Then('user gets the relevant result', async ()=> {
await     clickToSort()
});
