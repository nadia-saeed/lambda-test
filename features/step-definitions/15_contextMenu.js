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
    let newLocator = await $(locatorDiv)
  await newLocator.waitForDisplayed()
    // await browser.rightClick(locatorDiv)
    await browser.action('pointer', {
        actions: [{type: 'pointerMove', origin: newLocator }, {type: 'pointerDown', newLocator: 2}, {type: 'pointerUp', newLocator: 2}]
    }).perform()
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
    await browser.pause(1000)
});
