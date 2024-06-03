const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorContextMenu =  "//*[contains(text(),' Context Menu')]"
const locatorDivSection = "#hot-spot"

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
async function toContextClick(locatorDiv){
    const elementDiv = await $(locatorDiv)
    await elementDiv.moveTo();
    await browser.action('pointer', { pointerType: 'mouse' })
        .move({ origin: elementDiv })
        .down({ button: 2 })
        .perform();

}
async function verifyAlert(expectedAlertText){
    const alertText = await browser.getAlertText();
    await expect(alertText).toBe(expectedAlertText);
    
    await browser.acceptAlert();
}

Given('user opens the website', async () => {
    await openTheWebsite()
});

When('user clicks the div', async () => {
    await clickSpecificGround(locatorContextMenu)
    await toContextClick(locatorDivSection)
    await browser.pause(5000)
    
});

Then('user gets the alert message', async ()=> {
    await verifyAlert('You selected a context menu')
});
