const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorShadowDOM =  "//*[contains(text(),' Shadow DOM')]"

// async function getShadowElement(shadowHostSelector, elementSelector) {
//     const shadowHost = await $(shadowHostSelector);
//     return await browser.execute((host, selector) => {
//         return host.shadowRoot.querySelector(selector);
//     }, shadowHost, elementSelector);
// }

const locatorUsername = $('>>>[name="username"]');
const locatorEmail = $(">>>div.col-8 > input.form-control[type='email']");
const locatorPassword = $('>>>input[name="password"]');
const locatorConfirmPassword = $('>>>input[name="confirm_password"]');
const locatorSubmitButton =  $('>>>button.btn');

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
async function enterCredentials(locator, credential){
   await locator.waitForDisplayed()
   
    for(const char of credential){
    await locator.addValue(char)
}
}

// function 4
async function submitForm(){
    await locatorSubmitButton.waitForDisplayed()
    await locatorSubmitButton.click()
}

Given('user opens the page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorShadowDOM)
});

When('user enters valid credentials', async () => {
    await enterCredentials(locatorUsername, 'username')
    await enterCredentials(locatorEmail, 'username@gmail.com')
    await enterCredentials(locatorPassword, 'password1')
    await enterCredentials(locatorConfirmPassword, 'password1')
});

Then('user should be signed up', async ()=> {
    await submitForm()
});
