const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorHoverDemo =  "//*[contains(text(),'Hover Demo')]"
const elementHoverMeBtn = "div[class*='bg-green-100']"
const elementLinkHoverBtn = "//div[text()='Link Hover']"

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
async function hoverOverElements(element){
    await $(element).moveTo()
}

// function 4
async function verifyHover(element, colorcode){
    const backgroundColor = await $(element).getCSSProperty('background-color')
    await expect(backgroundColor.value).not.toBe(colorcode);
}

Given('user is on the mouse hover demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorHoverDemo)
});

When('user hovers over the green Hover Me button', async () => {
    await hoverOverElements(elementHoverMeBtn)
});

Then('green Hover Me button should change color', async ()=> {
    await verifyHover(elementHoverMeBtn, 'rgba(0, 128, 0, 1)')
});

When('user hovers over the Link Hover button', async () => {
    await hoverOverElements(elementLinkHoverBtn)
});

Then('the Link Hover button should change color', async ()=> {
    await verifyHover(elementLinkHoverBtn, 'rgba(0, 0, 0, 1)')
    await browser.pause(4000)
});