const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorSelectDropdownList =  "//*[contains(text(),'Select Dropdown List')]"
const locatorDaysDD = '#select-demo'
let daysDD = ''
let day = 'Wednesday'
let selectedValue = ''
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
async function toSelectFromDD(day){
    daysDD = $(locatorDaysDD)
    await daysDD.selectByAttribute('value', day)
    selectedValue =await daysDD.getValue()
}
// function 4
async function toVerifyValue(day){
    await expect(selectedValue).toBe(day)
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorSelectDropdownList)
});


When('user chooses the DD option', async () => {
    await toSelectFromDD(day)
});

Then('verify the chosen value', async ()=> {
    await toVerifyValue(day)
});






