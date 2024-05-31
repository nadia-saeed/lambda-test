const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapDatePicker =  "//*[contains(text(),'Bootstrap Date Picker')]"
const locatorSelectDate = $("input[name='birthday']")
let daysDD
let selectedValue


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
// async function selection(date){
//     const [day, month, year] = date.split('-')
//     const dayElement = await $(`//td[@role='gridcell' and text()='${parseInt(day, 10)}']`);
//     await dayElement.click();
// }

Given('user opens the calendar', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBootstrapDatePicker)
    await click()
});

When('I select the date {string}', async (date) => {
    const [day, month, year] = date.split('-')
    const dayElement = await $(`//td[@role='gridcell' and text()='${parseInt(day, 10)}']`);
    await dayElement.click();
});

Then('the selected date {string} should be in the input field', async (expectedDate)=> {
    await browser.pause(4000)
});


