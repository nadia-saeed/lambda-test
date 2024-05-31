const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const path = require('path');
const fs = require('fs');
const url = 'https://www.lambdatest.com/selenium-playground/'
const elementDownloadFileDemo =  $("//*[contains(text(),'Download File Demo')]")
const elementDownloadButton = $('//button[@type="button"]')
const downloadPath = 'This PC/Downloads'



// function 1
async function openTheWebsite(){
    await browser.url(url);
};

// function 2
async function clickSpecificGround(element){
    await (element).waitForDisplayed()
    await (element).click()
}

// function 3
async function clickDownload(){
    await elementDownloadButton.waitForDisplayed()
    await elementDownloadButton.click()
}

// function 4
async function verifyDownload(){
    const downloadDir = path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads');
    const fileName = 'LambdaTest.pdf';
    const filePath = path.join(downloadDir, fileName);

    const fileExists = fs.existsSync(filePath);
    await expect(fileExists).toBe(true);
};

Given('user opens the download page', async () => {
    await openTheWebsite();
    await clickSpecificGround(elementDownloadFileDemo);
});

When('user clicks the download button', async () => {
   await clickDownload();
});

Then('the file should be downloaded to the downloads folder', async ()=> {
    await verifyDownload();
});


