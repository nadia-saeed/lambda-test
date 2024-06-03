const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorStatusCodes =  "//*[contains(text(),'Status Codes')]"
let statusCode

async function openTheWebsite(){
    await browser.url(url)
}

async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

function getStatusCode(code){
    return $(`//p[text()="${code}"]/following-sibling::p[1]`)
}

async function getCodeStatement (code){
    statusCode = await getStatusCode(code).getText()
}

async function verifyCodeStatement(statement){
    await expect(statusCode).toBe(statement)
}

Given('user opens the page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorStatusCodes)
});

When('user enters the status code', async () => {
    await getCodeStatement(200)
});

Then('status codes should be verifies', async ()=> {
    await verifyCodeStatement('Indicates that the request has succeeded.')
});




