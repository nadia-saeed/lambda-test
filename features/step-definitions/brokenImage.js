const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorBrokenImages =  "//*[contains(text(),'Broken Image')]"
const imgWithAltElement = $("img[alt='Image']");
const imgWithoutAltElement = $("div.border.border-gray-10.inline-block.w-100.h-100.mt-10 img[alt='...']")

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
async function verifyAltText(element){
    await element.waitForDisplayed({ timeout: 20000 })
    let isPresent = await (element).isDisplayed();
    await expect(isPresent).toBe(true)
}

Given('user opens the image page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorBrokenImages)
});

Then('user should see a broken image with an alt text', async () => {
    await verifyAltText(imgWithoutAltElement)
    await verifyAltText(imgWithAltElement)

    // const parentDiv = await imgElement.closest("div.border.border-gray-10.inline-block.w-100.h-100.mt-10");
    // const parentIsPresent = await parentDiv.isDisplayed();
    // await expect(parentIsPresent).toBe(true)
});



