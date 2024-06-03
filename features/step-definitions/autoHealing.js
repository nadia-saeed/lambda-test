const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorAutoHealing =  "//*[contains(text(),'Auto Healing')]"
const locatorUsername = "//input[@id='username']"
const locatorPassword = "//input[@id='password']"
const locatorSubmitButton = ".bg-black.border-black.text-white.rounded.px-10.py-5"
const locatorSuccessMessage = "p.text-green-100.mt-10"

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
async function enterUsername(username){
    let usernameSection = $(locatorUsername)
        for(const usernameLetters of username){
        await usernameSection.addValue(usernameLetters)
}
}

// function 4
async function enterPassword(password){
    let passwordSection = $(locatorPassword)
        for(const passwordLetters of password){
        await passwordSection.addValue(passwordLetters)
}
}

// function 5
async function submitForm(){
    let submitButton = $(locatorSubmitButton)
    await submitButton.click()
}

// function 6
async function verifyFormSubmission(submissionText){
    submissionResponse = $(locatorSuccessMessage)
    await expect(submissionResponse).toHaveText(expect.stringContaining(submissionText))
}

Given('user is on the form submit demo page', async () => {
    await openTheWebsite()
});

When('user submits the form', async () => {
    await clickSpecificGround(locatorAutoHealing)
    await enterUsername('Nobody')
    await enterPassword('Hello World')
    await submitForm()
});

Then('user gets a response message', async ()=> {
    await verifyFormSubmission('Login Successful')
});
