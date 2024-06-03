const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorJavacriptAlerts =  "//*[contains(text(),'Javascript Alerts')]"
const locatorButtons = $$('button[class*="btn-dark"]')


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
async function clickAlertButton(btn){
    await btn.waitForDisplayed()
    await btn.click()
}

// function 4
async function verifyAlert(expectedAlertText){
    const alertText = await browser.getAlertText();
    await expect(alertText).toBe(expectedAlertText);
    await browser.acceptAlert();
}

Given('user is on the Javascript Alert Box Demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorJavacriptAlerts)
});

When('user clicks the relevant button', async () => {
    await clickAlertButton(locatorButtons[2])
});

Then('user should see an alert with specified text', async ()=> {
    await verifyAlert('Please enter your name')
});