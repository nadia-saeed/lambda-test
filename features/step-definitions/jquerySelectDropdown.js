const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorJqueryDD =  "//*[contains(text(),'JQuery Select dropdown')]"
let isPresent
// function 1
async function openTheWebsite(){
    await browser.url(url)
}
// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

const elementSingleDD = $('#country')
const elementMultipleDD = $("//select[@class='js-example-basic-multiple pl-10 select2-hidden-accessible']")
// const elementDisabledDD = $('')
// const elementCategoryDD = $('')

async function clickDD(country){
    await elementMultipleDD.waitForDisplayed()
    await elementMultipleDD.selectByAttribute('value', country)
    // selectedValue = await elementMultipleDD.getValue()
    // selectedValue = await elementMultipleDD.getValue()
    // await expect(selectedValue).toBe(country)
    // selectedValue
}

async function verifyValue(state){
    isPresent = await ($(`//ul[@class='select2-selection__rendered']/li[@title='${state}']`)).isDisplayed()
    await expect(isPresent).toBe(true)
}

Given('user opens the website', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorJqueryDD)
});


When('user chooses the DD option', async () => {
    await clickDD('CA')
    await clickDD('AK')
    await clickDD('CT')
    await clickDD('DC')
});

Then('verify the chosen value', async ()=> {
    await verifyValue('California')
    await verifyValue('Alaska')
    await verifyValue('Connecticut')
    await verifyValue('District Of Columbia')
});
