const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapDatePicker =  "//*[contains(text(),'Bootstrap Date Picker')]"
const locatorStartDate = $('input[placeholder="Start date"]')
const locatorEndDate = $('input[placeholder="End date"]')

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
async function enterDate (element, date){
    await element.waitForDisplayed()
    for(const char of date){
    await element.addValue(char)
}
}

// function 5
async function verifyDateRange(element, expectedDate){
    let actualDate = await element.getValue()
    await expect (actualDate).toBe(expectedDate)
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapDatePicker)
});

When('user chooses valid dates', async () => {
    await enterDate(locatorStartDate, '17-May-2023')
    await enterDate(locatorEndDate, '17-May-2024')
});

Then('dates are verified as true', async ()=> {
    await verifyDateRange(locatorStartDate, '17-May-2023')
    await verifyDateRange(locatorEndDate, '17-May-2024')
});

