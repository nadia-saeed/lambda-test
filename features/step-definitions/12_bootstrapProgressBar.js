const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
// done
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBootstrapProgressBar =  "//*[contains(text(),'Bootstrap Progress bar')]"
const locatorStartDownload = "#dwnBtn"
const locatorDownloadSuccess = ".success.text-green-100.mb-10"

let downloadStatus = ''
let startDownload = ''

// function 1
async function openTheWebsite(){
    await browser.url(url)
}

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}


// function 5
async function toDownload(){
    startDownload = $(locatorStartDownload)
    await startDownload.waitForDisplayed()
    await startDownload.click()
}

// function 6
async function verifyDownloadStatus(status){
    downloadStatus = $(locatorDownloadSuccess)
    await expect(downloadStatus).toHaveText(expect.stringContaining(status))
}

Given('user is on the download page', async () => {
    await openTheWebsite()
});

When('user starts downloading', async () => {
    await clickSpecificGround(locatorBootstrapProgressBar)
    await toDownload()
    
});

Then('the download is successfully completed', async ()=> {
    await verifyDownloadStatus('Download completed!')
});
