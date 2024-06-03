const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorInputSubmit =  "//*[contains(text(),'Input Form Submit')]"
let submitMessage

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
async function enterInput(element, credential){
    await element.waitForDisplayed()
    for(const char of credential){
        await element.addValue(char)
    }
};

// function 4
async function chooseCountry(element, country){
    await element.selectByAttribute('value', country)
}

// function 5
async function submitForm(element){
    await element.waitForDisplayed()
    await element.click()
}

// 
async function verifySubmission(element, text){
    await element.waitForDisplayed()
    submitMessage = await element.getText()
    await expect(submitMessage).toBe(text)
}


Given('user opens the form page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorInputSubmit)
});

When('user submits the form with valid data', async () => {
    await enterInput($('#name'), 'theName')
    await enterInput($('#inputEmail4'), 'theName@gmail.com')
    await enterInput($('#inputPassword4'), 'thePassword')
    await enterInput($('#company'), 'theCompany')
    await enterInput($('#websitename'), 'theWebsite')
    await chooseCountry($("//select[@name='country']"),'PK')
    await enterInput($('#inputCity'), 'theCity')
    await enterInput($('#inputAddress1'), 'theAddress1')
    await enterInput($('#inputAddress2'), 'theAddress2')
    await enterInput($('#inputState'), 'theState')
    await enterInput($('#inputZip'), '12345')
});

Then('user should see the success message', async ()=> {
    await submitForm($("//button[@type='submit' and text()='Submit']"))
    await verifySubmission($("//p[contains(@class, 'success-msg')]"), "Thanks for contacting us, we will get back to you shortly.")
});




