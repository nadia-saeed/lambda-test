const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorSelectDropdownList =  "//*[contains(text(),'Select Dropdown List')]"
const locatorFirstSelected = 'button[value="Print First"]'
const locatorLastSelected = 'button[value="Print All"]'
let statesDDOne = ''
let statesDDTwo = ''
let firstSelected = ''
let lastSelected = ''
let firstSelection = ''
let secondSelection = ''

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
async function selectionOne(){
    statesDDOne = $('#multi-select')
    await statesDDOne.selectByAttribute('value', 'Florida')
    firstSelection = await statesDDOne.waitForDisplayed()
    await $(locatorFirstSelected).click()

}
async function selectionTwo(){
    statesDDTwo = $('#multi-select')
    await statesDDTwo.selectByAttribute('value', 'Ohio')
    secondSelection = await statesDDTwo.waitForDisplayed()
    await $(locatorLastSelected).click()
}
async function toVerify(){
firstSelected = await $('.genderbutton')
await firstSelected.waitForDisplayed()
await expect(firstSelected).toHaveTextContaining('Florida')
lastSelected = await $('.groupradiobutton')
await lastSelected.waitForDisplayed()
await expect(lastSelected).toHaveTextContaining('Ohio')
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorSelectDropdownList)
});

When('user selects the options', async () => {
    await selectionOne()
    await selectionTwo()
});

Then('verify the chosen options', async ()=> {
    await toVerify()
    await browser.pause(5000)
});