const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/';
const locatorProgressBarDialog =  "//*[contains(text(),'Progress Bar Modal')]";
const dialog = $("div.modal-dialog");

// function 1
async function openTheWebsite(){
    await browser.url(url)
};

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
};

// funtion 3
async function clickSpecificButton(seconds){
    const locatorBtn = $(`//button[text()='Show dialog (Autoclose after ${seconds} seconds)']`)
    await locatorBtn.waitForClickable()
    await locatorBtn.click()
};

// function 4
async function verifyDialogBox(){
    await dialog.waitForDisplayed()
    expect(await dialog.isDisplayed()).toBe(true)
};

// function 5
async function verifyDialogBoxText(text){
    dialogText = await dialog.getText()
    await expect(dialogText).toBe(text)
};

// function 6
async function verifyDialogDisappear(seconds){
    await browser.pause(seconds * 1000);
    expect(await dialog.isDisplayed()).toBe(false)
};

Given('user is on the progress bar dialog page', async()=>{
    await openTheWebsite()
    await clickSpecificGround(locatorProgressBarDialog)
});

When('user clicks on the button', async()=>{
await clickSpecificButton(5);
});

Then('the dialog should appear with certain title', async()=>{
    await verifyDialogBox()
    //await verifyDialogBoxText('Loading') // for 2 secs
    //await verifyDialogBoxText('Custom message') // for 3 secs
    await verifyDialogBoxText('Hello Mr. Alert !') // for 5 secs
    await verifyDialogDisappear(5)
    await browser.pause(2000)
});