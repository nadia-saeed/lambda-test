const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorHoverDemo =  "//*[contains(text(),'Hover Demo')]"
const elementImageWithNoContent = "//div[@class='s__column m-15']//img[@alt='Image']"

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
async function verifyHover(element){
    expect (await element.waitForDisplayed()).toBe(true);
}

Given('user is on the mouse hover demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorHoverDemo)
});

When('user hovers over the image with the caption No Effect only content show', async () => {
    await hoverOverElements(elementImageWithNoContent)
});

Then('the caption should be visible', async ()=> {
    await verifyHover($("//div[@class='s__column m-15']//p[text()='Hover']"))
});


