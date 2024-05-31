const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorUploadFileDemo =  "//*[contains(text(),'Upload File Demo')]"
const fileInput = $('input[type="file"]');
const locatorUploadResponse = $('//div[@id="error"]')
// const filePath = 'D:\\Files\\MY PDF File.pdf'
let remoteFilePath
let uploadStatus

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
async function uploadingTheFile(filePath){
    remoteFilePath = await browser.uploadFile(filePath);
    fileInput.setValue(remoteFilePath);
}

// function 4
async function verifyUpload(response){
    await locatorUploadResponse.waitForDisplayed()
    uploadStatus = await (locatorUploadResponse).getText()
    await expect(uploadStatus).toBe(response)
}

Given('user opens the page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorUploadFileDemo)
});

When('user uploads file', async () => {
    await uploadingTheFile('D:\\Files\\MY PDF File.pdf')
});

Then('file gets uploaded successfully', async ()=> {
    await verifyUpload('File Successfully Uploaded')
});