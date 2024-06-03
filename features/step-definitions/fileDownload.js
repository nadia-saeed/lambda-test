const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const path = require('path');
const fs = require('fs');

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorFileDownloadDemo =  "//*[contains(text(),'File Download')]"
const elementEnterData = $('#textbox')
const elementGenerateFileBtn = $('#create')
const elementDownloadButton = $('#link-to-download')

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
async function enterDataToTextArea(data){
    await elementEnterData.waitForEnabled()
    await elementEnterData.addValue(data)
}

// function 4
async function verifyDownload(string, data){
    const downloadDir = path.join(process.env.HOME || process.env.USERPROFILE, 'Downloads');
    const fileName = string;
    const filePath = path.join(downloadDir, fileName);

    const timeout = 30000; // 30 seconds timeout
    const interval = 500; // Check every 500ms

    let fileExists = false;
    for (let elapsed = 0; elapsed < timeout; elapsed += interval) {
        if (fs.existsSync(filePath)) {
            fileExists = true;
            break;
        }
        await new Promise(resolve => setTimeout(resolve, interval));
    }
    await expect(fileExists).toBe(true);

    let fileContent;
    try {
        fileContent = fs.readFileSync(filePath, 'utf-8');
    } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
    }
    await expect(fileContent).toBe(data);
};

Given('user is on the file download demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorFileDownloadDemo)
});

When('user enters text into the textbox and generate that', async () => {
    await enterDataToTextArea('Prices were higher than usual this time. There was recorded 14% of inflation rate.')
    await elementGenerateFileBtn.waitForClickable()
    await elementGenerateFileBtn.click()
});

Then('the download button gets clickable', async ()=> {
    let isPresent = await elementDownloadButton.isDisplayed()
    await expect(isPresent).toBe(true)
});

When('user clicks the download button', async () => {
    await elementDownloadButton.click()
    // await browser.pause(4000) // will replace it with dynamic pause for the time for download to be completed.
});

Then('a file with the name {string} should be downloaded containing the typed text', async (string)=> {
    await verifyDownload(string, 'Prices were higher than usual this time. There was recorded 14% of inflation rate.')
});