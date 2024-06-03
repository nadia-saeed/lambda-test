const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const url = 'https://www.lambdatest.com/selenium-playground/'
const locatorJqueryDatePicker =  "//*[contains(text(),'JQuery Date Picker')]"
const elementFrom = $('#from');
const elementTo = $('#to')


// function 1
async function openTheWebsite(){
    await browser.url(url)
}

// function 2
async function clickSpecificGround(locator){
    await $(locator).waitForDisplayed()
    await $(locator).click()
}

// async function selectTheDate(startDate, endDate){
//     await elementFrom.waitForClickable()
//     await elementFrom.click()
//     const [startMonth, startDay, startYear] = startDate.split('/')

//     await selectDate(startYear, startMonth, startDay);

//     await elementTo.waitForClickable()
//     await elementTo.click()

//     const [endMonth, endDay, endYear] = endDate.split('/');
//     await selectDate(endYear, endMonth, endDay);
// }

async function selectDateRange(element, dates){
    for(const char of dates){
        await element.addValue(char)
    }
}
async function verifyDateRange(element, expectedDate){
    let actualDate = await element.getValue()
    await expect (actualDate).toBe(expectedDate)
}

Given('user is on the JQuery Date Picker demo page', async () => {
    await openTheWebsite()
    await clickSpecificGround(locatorJqueryDatePicker)
});

When('user selects a starting date', async () => {
    await selectDateRange(elementFrom, '06/06/2023')
});

Then('the selected starting date should be displayed correctly', async ()=> {
    await verifyDateRange(elementFrom, '06/06/2023')
});

When('user selects the ending date', async () => {
    await selectDateRange(elementTo, '06/06/2024')
});

Then('the selected ending date should be displayed correctly', async ()=> {
    await verifyDateRange(elementTo, '06/06/2024')
});
