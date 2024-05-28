const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorAutoHealing =  "//*[contains(text(),'Auto Healing')]"
const locatorUsername = "//input[@id='username']"
const locatorPassword = "//input[@id='password']"
const locatorSubmitButton = ".bg-black.border-black.text-white.rounded.px-10.py-5"
const locatorSuccessMessage = "p.text-green-100.mt-10"
let usernameSection = ''
let passwordSection = ''
let submitButton = ''

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
async function toEnterUsername(username){
usernameSection = $(locatorUsername)
for(const usernameLetters of username){
    await usernameSection.addValue(usernameLetters)
}
}

// function 4
async function toEnterPassword(password){
passwordSection = $(locatorPassword)
for(const passwordLetters of password){
    await passwordSection.addValue(passwordLetters)
}
}

// function 5
async function toSubmit(){
    submitButton = $(locatorSubmitButton)
    await submitButton.click()
}

// function 6
async function verifyFormSubmission(submissionText){
    submissionResponse = $(locatorSuccessMessage)
    await expect(submissionResponse).toHaveTextContaining(submissionText)
}

Given('user opens the website', async () => {
    await openTheWebsite()
});

When('user fill the entries', async () => {
    await clickSpecificGround(locatorAutoHealing)
    await toEnterUsername('Nobody')
    await toEnterPassword('Hello World')
    await toSubmit()
});

Then('the message gets submitted', async ()=> {
    await verifyFormSubmission('Login Successful')
});
