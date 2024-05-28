const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorRadioButton =  "//*[contains(text(),'Radio Buttons Demo')]"
let locatorOptionButton = ""
const locatorGetValueButton = '//button[@id="buttoncheck"]' 
const locatorResultStatement = 'p.radiobutton'
let resultStatement = ''


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
async function clickOnValue(value){
locatorOptionButton = $(`input[type="radio"][value="${value}"]`)
await locatorOptionButton.waitForDisplayed()
await locatorOptionButton.click()
await browser.pause(5000)
}

// function 4
async function toGetValue(){
    await $(locatorGetValueButton).waitForDisplayed()
    await $(locatorGetValueButton).click()
}

// function 5
async function toVerifyResult(value){
    resultStatement = $(locatorResultStatement)
    await (resultStatement).waitForDisplayed()
    await expect (resultStatement).toHaveTextContaining(value)
}

Given('user opens the demo page', async () => {
    await openTheWebsite()
});

When('user clicks the chosen button', async () => {
    await clickSpecificGround(locatorRadioButton)
    await clickOnValue('Female')
    await toGetValue()
    await browser.pause(5000)
});

Then('the relevant text appears', async ()=> {
    await toVerifyResult('Female')
});

