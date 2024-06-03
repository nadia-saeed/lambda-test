const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapModal =  "//*[contains(text(),'Bootstrap Modal')]"
const locatorSingleModal = 'button[data-target="#myModal"]'
const locatorMultipleModal = 'button[data-target="#myMultiModal"]'
const locatorSingleModalTitle = '//button[contains(text(), "Changes")]'
const locatorSubmissionResponse = "#submit-control"

// function 1
async function openTheWebsite(){
    await browser.url(url)
}

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

// funcion 3
async function toClickSingleModal(){
    await $(locatorSingleModal).waitForDisplayed()
    await $(locatorSingleModal).click()
}

async function toVerifySingleModal(){
    singleModalDialog = $(locatorSingleModalTitle)
    // isPresent = await (singleModalDialog).isDisplayed()
    // await expect(isPresent).toBe(true)
    await singleModalDialog.click()
}

async function toClickMultipleModal(){
    await $(locatorMultipleModal).click()
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapModal)
});

When('user launches single modal', async () => {
    await toClickSingleModal()
    
});

Then('its relevant dialog will be displayed', async ()=> {
    await toVerifySingleModal()
});
