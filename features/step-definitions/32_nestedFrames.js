const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorNestedFrames =  "//*[contains(text(),'Nested Frames')]"


// function 1
async function openTheWebsite(){
    await browser.url(url)
};

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
};




Given('I am on the nested frames page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorNestedFrames)
});


