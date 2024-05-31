const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapAlerts =  "//*[contains(text(),'Bootstrap Alerts')]"
let alertTab = ''

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
async function click(type){
    let locator = `button.btn-${type}`
    let responseAlert = $(locator)
    await responseAlert.click()
}

// function 4
async function verifyTheAlert(type, requiredText){
    alertTab = $(`//div[contains(@class, "alert-${type}")]`)
    await alertTab.waitForDisplayed()
    let alertText = await alertTab.getText()
    await expect(alertText).toContain(requiredText)

}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapAlerts)
});

When('user searches for a autoclosable entry', async () => {
    await click('success-auto')
});

Then('user gets the relevant alert for a specific time', async ()=> {
    await verifyTheAlert('success-auto', 'Autocloseable' )
});

When('user searches for a normal entry', async () => {
    await click('info-manual')
});

Then('user gets the relevant alert to be closed manually', async ()=> {
    await verifyTheAlert('info-manual', 'Normal')
});
