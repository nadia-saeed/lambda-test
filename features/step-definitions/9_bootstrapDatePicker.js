const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapDatePicker =  "//*[contains(text(),'Bootstrap Date Picker')]"
const locatorStartDate = 'input[placeholder="Start date"]'
const locatorEndDate = 'input[placeholder="End date"]'
let startDate = ''
let endDate = ''

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
async function enterStartDate (dateOne){
startDate = $(locatorStartDate)
await startDate.waitForDisplayed()
for(const char of dateOne){
    await startDate.addValue(char)
}
}

// function 4
async function enterEndDate(dateTwo){
    endDate = $(locatorEndDate)
    await endDate.waitForDisplayed()
    for(const char of dateTwo){
        await endDate.addValue(char)
    }
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapDatePicker)
});

When('user chooses valid dates', async () => {
    await enterStartDate('17-May-2023')
    await enterEndDate('17-May-2024')
});

Then('dates are verified as true', async ()=> {
    await browser.pause(4000)
});


