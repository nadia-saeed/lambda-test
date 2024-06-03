const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapDatePicker =  "//*[contains(text(),'Bootstrap Date Picker')]"
const locatorSelectDate = $("input[name='birthday']")

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
async function click(){
    await locatorSelectDate.waitForDisplayed()
    await locatorSelectDate.click()
}

// function 4
async function selectBirthdayDate(date){
    await locatorSelectDate.waitForDisplayed()
    await locatorSelectDate.addValue(date)
}

// function 5
async function verifyBirthdayDate(date){
    //let finalLocator = await $("input[name='birthday']")
    let actualDate = await locatorSelectDate.getValue()
    await expect(actualDate).toBe(date)
}

Given('user opens the calendar', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapDatePicker)
    await click()
});

When('user selects the date', async () => {
    await selectBirthdayDate('22')
    await selectBirthdayDate('6')
    await browser.keys(['ArrowRight']);
    await selectBirthdayDate('2024')
});

Then('the selected date should be in the input field', async ()=> {
    await verifyBirthdayDate('2024-06-22')
});


