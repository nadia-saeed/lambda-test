const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorOverlappedElement =  "//*[contains(text(),' Overlapped Element')]"
const elementID = $("//input[@placeholder='Id']")
const elementName = $("//input[@placeholder='Name']")
let expectedText

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
async function enterText(value){
    await browser.execute((val)=>{
    document.getElementById('name').value = val }, value)
}

// function 4
async function verifyText(element, text){
    expectedText = await element.getValue()
    expect(await expectedText).toBe(text)
};

Given('user is on the overlapped elememt demo page', async()=>{
    await openTheWebsite()
    await clickSpecificGround(locatorOverlappedElement)
});

When('user try to enter text into Name field', async() =>{
    await enterText('My name is Bleeh')
})

Then('the text should be at the Name field', async()=>{
    await verifyText(elementName, 'My name is Bleeh')
})