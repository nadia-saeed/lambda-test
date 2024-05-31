const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorDragAndDropSliders =  "//*[contains(text(),'Drag & Drop Sliders')]"

// function 1
async function openTheWebsite(){
    await browser.url(url)
}
// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}



Given('user opens the slider demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorDragAndDropSliders)
});



When('user sets the slider with default value {int} to {int}', async (defaultValue, newValue) => {
    const slider = await $(`//h4[contains(text(), 'Default value ${defaultValue}')]/following-sibling::div/input[@type='range']`);
    const output = await $(`//h4[contains(text(), 'Default value ${defaultValue}')]/following-sibling::div/output`);

    const currentValue = parseInt(await output.getText(), 10);
    const sliderWidth = await slider.getSize('width');

    const min = parseInt(await slider.getAttribute('min'), 10);
    const max = parseInt(await slider.getAttribute('max'), 10);
    const valueRange = max - min;
    const step = sliderWidth / valueRange;

    const moveDistance = Math.round((newValue - currentValue) * step);

    await browser.performActions([{
        type: 'pointer',
        id: 'mouse',
        parameters: { pointerType: 'mouse' },
        actions: [
            { type: 'pointerMove', origin: slider, x: 0, y: 0 },
            { type: 'pointerDown', button: 0 },
            { type: 'pointerMove', origin: 'pointer', x: moveDistance, y: 0, duration: 100 },
            { type: 'pointerUp', button: 0 }
        ]
    }]);

    await browser.pause(500); // Wait for the value to update
});

Then('user should see the value of the slider with default value {int} as {int}', async (defaultValue, expectedValue) => {
    const valueElement = await $(`//h4[contains(text(), 'Default value ${defaultValue}')]/following-sibling::div/output`);
    const value = await valueElement.getText();
    expect(parseInt(value)).toBe(expectedValue);
});