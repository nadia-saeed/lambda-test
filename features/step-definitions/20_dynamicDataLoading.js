const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorDynamicDataLoading = "//*[contains(text(),'Dynamic Data Loading')]"
const locatorRandomButton = '//button[@id="save"]'
const locatorResult = '//div[@id="loading"]'
let randomButton = ''
let result = ''
let isPresent = ''

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
    randomButton = $(locatorRandomButton)
    await randomButton.waitForDisplayed()
    await randomButton.click()
}

// function 4
async function verifyTheResult(){
result = $(locatorResult)
await result.waitForDisplayed()
await expect(result).toHaveTextContaining('First Name')
await expect(result).toHaveTextContaining('Last Name')
}

Given('user opens the page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorDynamicDataLoading)
});

When('user clicks the button', async () => {
    await clickRandomButton()
});

Then('random users details appear', async ()=> {
    await verifyTheResult()
    await browser.pause(3000)
});