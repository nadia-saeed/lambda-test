const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorAjaxFormSubmit =  "//*[contains(text(),'Ajax Form Submit')]"
const locatorName = "//input[@id='title']"
const locatorMessage = "#description"
const locatorSubmitButton = "//input[@id='btn-submit']"
const locatorSubmissionResponse = "#submit-control"
let nameSection
let messageSection
let submitButton

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
async function enterName(name){
nameSection = $(locatorName)
for(const nameLetters of name){
    await nameSection.addValue(nameLetters)
}
}

// function 4
async function enterMessage(message){
messageSection = $(locatorMessage)
for(const messageLetters of message){
    await messageSection.addValue(messageLetters)
}
}

// function 5
async function submitForm(){
    submitButton = $(locatorSubmitButton)
    await submitButton.click()
}

// function 6
async function verifyFormSubmission(submissionText){
    submissionResponse = $(locatorSubmissionResponse)
    await expect(submissionResponse).toHaveText(expect.stringContaining(submissionText))
}

Given('user is on the form submit demo page', async () => {
    await openTheWebsite()
});

When('user submits the form', async () => {
    await clickSpecificGround(locatorAjaxFormSubmit)
    await enterName('Nobody')
    await enterMessage('Hello World')
    await submitForm()
});

Then('user gets a response message', async ()=> {
    await verifyFormSubmission('Ajax Request is Processing!')
});
