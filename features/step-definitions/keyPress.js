const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorKeyPress =  "//*[contains(text(),'Key Press')]"
const locatorKeyField = $('//input[@id="my_field"]')
const locatorResultField = $('#result')
let lastNumber
let resultField

// function 1
async function openTheWebsite(){
    await browser.url(url)
};

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
};

// function 3
async function enterKeys(key){
    await locatorKeyField.click()
    for(const char of key){
        await browser.keys(char)
        lastNumber = char
    }
};

// function 4
async function verifyResult(lastKey){
resultField = await locatorResultField.getText()
expect (resultField).toBe(`You entered: ${lastKey}`)
};


Given('user is on the key-press page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorKeyPress)
});

When('user enters keys {string}', async (key) => {
    await enterKeys(key)
});

Then('the last key typed should be {string}', async (lastKey)=> {
    await verifyResult(lastKey)
});


