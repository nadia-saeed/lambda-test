const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorSimpleFormDemo =  "//*[contains(text(),'Simple Form Demo')]"
const locatorMessage = "//input[@id='user-message']"
const locatorGetCheckedValue = "//button[@id='showInput']"
const locatorOutputValue = "#message"

const locatorFirstValue = "//input[@id='sum1']"
const locatorSecondValue = "//input[@id='sum2']"
const locatorSumButton = '//button[text()="Get Sum"]'
const locatorFinalResult = '#addmessage'

let outputValue
let checkButton

let firstValue = ''
let secondValue = ''
let finalResult = ''
let first = 12
let second = 45
let sum = first + second
let stringSum = sum + ''

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
async function toEnterMessage(message){
messageSection = $(locatorMessage)
for(const messageLetters of message){
    await messageSection.addValue(messageLetters)
    }
}

// function 4
async function toClickButton(){
    checkButton = $(locatorGetCheckedValue)
    await checkButton.click()
}

// function 5
async function toVerifyValue(message){
    outputValue = $(locatorOutputValue)
    await expect(outputValue).toHaveText(expect.stringContaining(message))
}

// function 6
async function toEnterFirstValue(value1){
    firstValue = $(locatorFirstValue)
    await firstValue.setValue(value1)
}

// function 7
async function toEnterSecondValue(value2){
    secondValue = $(locatorSecondValue)
        await secondValue.addValue(value2)
}    

// function 8
async function toGetSum(){
    sumButton = $(locatorSumButton)
    await sumButton.click()
}

// function 9
async function toVerifySum(sumOfTwo){
    finalResult = $(locatorFinalResult)
    await (finalResult).waitForDisplayed()
    await expect(finalResult).toHaveText(sumOfTwo)
};

Given('user opens the page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorSimpleFormDemo)
});

When('user enters message', async () => {
    await toEnterMessage('Hello World')
    await toClickButton()
});

Then('the exact message is displayed', async ()=> {
   await toVerifyValue('Hello World')
});

When('user enters two numbers for the calculations', async()=>{
    await toEnterFirstValue(first)
    await toEnterSecondValue(second)
});

Then('the correct answer is displayed', async()=>{
    await toGetSum()
    await toVerifySum(stringSum)
});
