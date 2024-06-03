const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorDynamicDataLoading = "//*[contains(text(),'Dynamic Data Loading')]"
const locatorRandomButton = '//button[@id="save"]'
const locatorResult = '//div[@id="loading"]'

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
async function clickRandomButton(){
    let randomButton = $(locatorRandomButton)
    await randomButton.waitForDisplayed()
    await randomButton.click()
}

// function 4
async function verifyTheResult(){
    let result = $(locatorResult)
    await result.waitForDisplayed()
    await expect(result).toHaveText(expect.stringContaining('First Name'))
    await expect(result).toHaveText(expect.stringContaining('Last Name'))
}

Given('user is on the dynamic data loading page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorDynamicDataLoading)
});

When('user clicks on the button', async () => {
    await clickRandomButton()
});

Then('random users details appear', async ()=> {
    await verifyTheResult()
});