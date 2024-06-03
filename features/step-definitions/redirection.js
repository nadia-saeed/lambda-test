const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorRedirection = "//*[contains(text(),'Redirection')]"
const locatorHereButton = '//a[contains(text(),"here")]'
let redirectionButton = ''
let hereButton = ''
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
async function clickHereButton(){
    hereButton = $(locatorHereButton)
    await hereButton.waitForDisplayed()
    await hereButton.click()
}

// function 4
async function testTheRedirection(){
    redirectionButton = $(locatorRedirection)
isPresent = await (redirectionButton).isDisplayed()
await expect(isPresent).toBe(true)
}

Given('user opens the page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorRedirection)
});

When('user clicks the trigger button', async () => {
    await clickHereButton()
});

Then('user is redirected to the playground window', async ()=> {
    await testTheRedirection()
});