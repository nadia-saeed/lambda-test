const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorJQueryDownload =  "//*[contains(text(),'JQuery Download Progress bars')]"

const locatorStartDownload = $("//button[@id='downloadButton']")
const locatorDownloadDialog = $("//div[@role='dialog']")
const locatorCancelDownload = $("//button[text()='Cancel Download']")
const locatorClose = $("//button[text()='Close']")
const locatorDownloadCompleted = $("//div[text()='Complete!']")
let isCompleted
let dialogIsPresent

async function openTheWebsite(){
    await browser.url(url)
}

async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

async function downloadProgress(locator){
    await locator.waitForDisplayed()
    await locator.click()
}

async function verifyDialog(){
    dialogIsPresent = await locatorDownloadDialog.isDisplayed()
    await expect (dialogIsPresent).toBe(true)
}
async function verifyCompletion(locator){
    isCompleted = await locator.isDisplayed()
    await expect(isCompleted).toBe(true)
}

Given('user is on the download page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorJQueryDownload)
});

When('user clicks on the start download button', async () => {
    await downloadProgress(locatorStartDownload)
});

Then('user should see download dialogue box', async ()=> {
    await verifyDialog() 
});

When('user clicks on the cancel download button', async () => {
    await downloadProgress(locatorCancelDownload)
});

Then('the download dialogue is closed', async ()=> {
    await verifyCompletion(locatorStartDownload)
});

When('user clicks on the close button', async () => {
    //await downloadProgress(locatorClose)
    await browser.pause(200)
});

Then('the complete dialogue is closed', async ()=> {
    // await browser.pause(10000)
    await verifyCompl+etion(locatorDownloadCompleted)
});

