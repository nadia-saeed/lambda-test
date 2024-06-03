const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
let url = 'https://www.lambdatest.com/selenium-playground/'
let getResultsLocator = ''
let isPresent = ''
const locatorTableDataDownload =  "//*[contains(text(),'Table Data Search')]"
const searchLocator = $("//input[@id='task-table-filter']")

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
async function searchEntry(searchStatement, output){
    for(const char of searchStatement){
        await searchLocator.addValue(char);
    }
    getResultsLocator = $(`//table[@id='task-table']//tr[td[text()='${searchStatement}']]`)
    isPresent = await (getResultsLocator).isDisplayed()
    await expect(isPresent).toBe(output)
}

Given('user opens the website', async () => {
    await openTheWebsite()
});

When('user filters the desired entry', async () => {
    await clickSpecificGround(locatorTableDataDownload)

});

Then('user gets the respective data if it was present', async ()=> {
    await searchEntry('Development', true)
});




