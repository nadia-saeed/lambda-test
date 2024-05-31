const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorCheckDemo =  "//*[contains(text(),'Checkbox Demo')]"
const elementSingleCheck = $('#isAgeSelected')
const elementCheckAll = $('#box')
const elementStatusSingleCheck = $('#txtAge')

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
async function clickSingleCheck(element){
    await element.waitForDisplayed()
    await element.click()
}

// function 4
async function verifySingleCheck(element, status){
    await element.waitForDisplayed()
    elementText = await element.getText()
    await expect(elementText).toBe(status)
}

// function 5
async function disabledCheckBox(option){
    let checkbox;
    switch (option) {
        // case 'Option 1':
        //     checkbox = await $$('input[type="checkbox"].mr-10')[0];
        //     break;
        // case 'Option 2':
        //     checkbox = await $$('input[type="checkbox"].mr-10')[1];
        //     break;
        case 'Option 3':
            checkbox = await $$('input[type="checkbox"].mr-10')[2];
            break;
        case 'Option 4':
            checkbox = await $$('input[type="checkbox"].mr-10')[3];
            break;
    }
    const isDisabled = await checkbox.getAttribute('disabled');
    await expect(isDisabled).toBe(null);
}






Given('user opens the checkbox demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorCheckDemo)
});


When('user checks the single checkbox', async () => {
    await clickSingleCheck(elementSingleCheck)
});

Then('user should see "Checked"', async ()=> {
    await verifySingleCheck(elementStatusSingleCheck, 'Checked')
});

// Then('user should see that {string} is disabled', async (option)=> {
//     await disabledCheckBox(option)
// });

When('user checks multiple checkboxes', async () => {
    const checkboxes = await $$('input[type="checkbox"]:not(:disabled)');
    for (let checkbox of checkboxes) {
        if (!await checkbox.isSelected()) {
            await checkbox.click();
        }
    }
});

Then('user should see all checkboxes checked', async () => {
    const checkboxes = await $$('input[type="checkbox"]:not(:disabled)');
    for (let checkbox of checkboxes) {
        const isChecked = await checkbox.isSelected();
        expect(isChecked).toBe.true;
    }
});
