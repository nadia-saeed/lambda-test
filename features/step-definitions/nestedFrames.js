const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorNestedFrames =  "//*[contains(text(),'Nested Frames')]"
let frame

// function 1
async function openTheWebsite(){
    await browser.url(url)
};

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
};

// function 3
async function switchToCertainFrame(position){
    frame = await $(`frame[name="frame-${position}"]`)
    await browser.waitUntil(async () => await frame.isDisplayed(), {
        timeout: 5000,
        timeoutMsg: 'Top frame not displayed'
    });
    await browser.switchToFrame(frame);
}

// function 4
async function verifyFrame(text){
    body = await $('body')
    await expect(body).toHaveText(expect.stringContaining(text));
    await browser.switchToParentFrame();
}

Given('user is on the nested frames page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorNestedFrames)
});

When('user switches to the top frame', async () => {
    await switchToCertainFrame('top')
});

Then('user should see the text "Top"', async () => {
    await verifyFrame('Top')
});


When('user switches to the middle frame', async () => {
    await browser.switchToParentFrame(); // Ensure we're starting from the default content
    await browser.switchToFrame(await $('frame[name="frame-bottom"]')); // Switch to bottom frame
    await switchToCertainFrame('middle')
    
});

Then('user should see the text "Middle"', async () => {
    await verifyFrame('Middle')
    await browser.switchToParentFrame(); // Switch back to default content
});

When('user switches to the left frame', async () => {
    await browser.switchToParentFrame(); // Ensure we're starting from the default content
    await browser.switchToFrame(await $('frame[name="frame-bottom"]')); // Switch to bottom frame

    await switchToCertainFrame('left')
});

Then('user should see the text "Left"', async () => {
    await verifyFrame('Left')
    await browser.switchToParentFrame(); // Switch back to default content
});

When('user switches to the right frame', async () => {
    await browser.switchToParentFrame(); // Ensure we're starting from the default content
    await browser.switchToFrame(await $('frame[name="frame-bottom"]')); // Switch to bottom frame

    await switchToCertainFrame('right')
});

Then('user should see the text "Right"', async () => {
    await verifyFrame('Right')
    await browser.switchToParentFrame(); // Switch back to default content
});