const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatoriFrameDemo =  "//*[contains(text(),'iFrame Demo')]"
const locatoriFrame = ('iframe[id="iFrame1"]')
const editorBody = $('//div[@class="rsw-ce"]')
let elementiFrame

async function openTheWebsite(){
    await browser.url(url)
}

async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

async function iframeEnter(){
    elementiFrame = await $(locatoriFrame)
    await elementiFrame.waitForDisplayed()
    await browser.switchToFrame(elementiFrame)
}
async function writeText(text){
    await editorBody.click();
    //await editorBody.clearValue(); didn't work
    await browser.keys(['Control', 'a']); // Select all text
    await browser.keys('Backspace'); // Delete the selected text

    for(const char of text){
        await browser.keys(char)
    }
}

async function verifyText(text){
    const actualText = await editorBody.getText()
    await expect (actualText).toBe(text)
}

Given('user is on the iframe-demo-page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatoriFrameDemo)
});

When('user writes into the editor', async () => {
    await iframeEnter()
    await writeText('Hello World')
});

Then('the editor should contain text', async ()=> {
    verifyText('Hello World')
});
