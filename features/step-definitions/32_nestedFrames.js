const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorNestedFrames =  "//*[contains(text(),'Nested Frames')]"


// function 1
async function openTheWebsite(){
    await browser.url(url)
};

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
};




Given('I am on the nested frames page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorNestedFrames)
});

When('I switch to the following frames:', async (dataTable) => {
    const rows = dataTable.hashes();
    for (const row of rows) {
        if (row.parentFrame) {
            await browser.switchToParentFrame(); // Go back to the parent frame
            await browser.switchToFrame(await $(`frame[name="${row.parentFrame}"]`)); // Switch to parent frame first
        }
        await browser.switchToFrame(await $(`frame[name="${row.frame}"]`));
    }
});

Then('I should see the following text in frames:', async (dataTable) => {
    const rows = dataTable.hashes();
    for (const row of rows) {
        await browser.switchToParentFrame(); // Go back to the parent frame
        if (row.frame === 'frame-middle' || row.frame === 'frame-right') {
            await browser.switchToFrame(await $(`frame[name="frame-top"]`)); // Switch to top frame first
        }
        await browser.switchToFrame(await $(`frame[name="${row.frame}"]`));
        const frameText = await $('body').getText();
        expect(frameText).to.include(row.expectedText);
    }
});

